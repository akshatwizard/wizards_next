"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CalendarDays, ChevronRight, Clock, Loader2, LogOut, Video, CheckCircle2, MessageCircle } from "lucide-react";
import { Section, Wrapper } from "@/components/ui/sections";
import { FadeUp } from "@/components/ui/motion_components";
import { SectionBadge } from "@/components/services/section_badge";

// Free 30-min Exploration Call booking. The booking API + admin live on the Hostinger VPS
// (book-api.wizards.co.in); this page talks to it with a short-lived bearer token from the
// WhatsApp OTP sign-in, kept in localStorage.
const API = (process.env.NEXT_PUBLIC_BOOKING_API_URL || "https://book-api.wizards.co.in").replace(/\/$/, "");
const TOKEN_KEY = "wn_book_token";

type Slot = { id: number; start: string; duration: number; freeOk: boolean };
type Day = { date: string; slots: Slot[] };
type User = { id: number; name: string; phone: string; contactEmail: string; needsProfile: boolean; freeConsultationUsed: boolean };
type Booking = { id: number; startsAt: string; durationMinutes: number; status: string; meetLink: string | null; notes: string };

const ist = (d: string, o: Intl.DateTimeFormatOptions) => new Date(d).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", ...o });
const dayLabel = (date: string) => ist(`${date}T12:00:00+05:30`, { weekday: "short", day: "numeric", month: "short" });
const timeLabel = (s: string) => ist(s, { hour: "numeric", minute: "2-digit" });
const whenLabel = (s: string) => ist(s, { weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" }) + " IST";
const ref = (id: number) => `WZ-${id}`;
type ApiErr = Error & { status?: number };
const errMsg = (x: unknown) => (x instanceof Error ? x.message : "Something went wrong.");

function loadToken() {
    try {
        const raw = localStorage.getItem(TOKEN_KEY);
        if (!raw) return null;
        const t = JSON.parse(raw) as { token: string; exp: number };
        return t.exp > Date.now() ? t.token : null;
    } catch { return null; }
}

async function call<T = unknown>(path: string, opts: { method?: string; body?: unknown; token?: string | null } = {}): Promise<T> {
    const headers: Record<string, string> = {};
    if (opts.body !== undefined) headers["Content-Type"] = "application/json";
    if (opts.token) headers.Authorization = `Bearer ${opts.token}`;
    let r: Response;
    try {
        r = await fetch(API + path, { method: opts.method || (opts.body !== undefined ? "POST" : "GET"), headers, body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined, cache: "no-store" });
    } catch {
        throw Object.assign(new Error("Couldn't reach the booking server. Please check your connection and try again."), { status: 0 });
    }
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw Object.assign(new Error(j.error || `Something went wrong (HTTP ${r.status}).`), { status: r.status });
    return j as T;
}

const btn = "inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none text-black text-[13px] font-semibold px-5 py-3 rounded-xl transition-all duration-200";
const ghost = "inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-amber-600/50 text-zinc-100 text-[12.5px] font-medium px-4 py-2.5 rounded-xl transition-all duration-200 disabled:opacity-50";
const input = "w-full bg-zinc-900 border border-zinc-800 focus:border-amber-600/60 outline-none rounded-xl px-4 py-3 text-[13px] text-zinc-100 placeholder:text-zinc-500";

export default function BookingApp({ embedded = false }: { embedded?: boolean } = {}) {
    const Root = embedded ? "div" : "main";
    const Heading = embedded ? "h2" : "h1";
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [days, setDays] = useState<Day[]>([]);
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [notice, setNotice] = useState("");
    const [reschedule, setReschedule] = useState<Booking | null>(null);
    const [now, setNow] = useState(0);

    const signOut = useCallback(async (silent = false) => {
        const t = token;
        localStorage.removeItem(TOKEN_KEY);
        setToken(null); setUser(null); setBookings([]);
        if (t && !silent) await call("/api/auth/logout", { method: "POST", token: t }).catch(() => {});
    }, [token]);

    const loadSlots = useCallback(async () => {
        const j = await call<{ days: Day[] }>("/api/slots");
        setDays(j.days.map((d) => ({ ...d, slots: d.slots.filter((s) => s.freeOk) })));
    }, []);

    const loadMe = useCallback(async (t: string) => {
        try {
            const [me, b] = await Promise.all([call<{ user: User | null }>("/api/me", { token: t }), call<{ bookings: Booking[] }>("/api/bookings", { token: t })]);
            if (!me.user) { localStorage.removeItem(TOKEN_KEY); setToken(null); return; }
            setUser(me.user); setBookings(b.bookings); setNow(Date.now());
        } catch (e) {
            if ((e as ApiErr).status === 401) { localStorage.removeItem(TOKEN_KEY); setToken(null); setUser(null); }
            else throw e;
        }
    }, []);

    useEffect(() => {
        const t = loadToken();
        Promise.resolve()
            .then(() => { setToken(t); return Promise.all([loadSlots(), t ? loadMe(t) : Promise.resolve()]); })
            .catch((e) => setError(errMsg(e)))
            .finally(() => setLoading(false));
    }, [loadSlots, loadMe]);

    const refresh = useCallback(async () => {
        setError("");
        await Promise.all([loadSlots(), token ? loadMe(token) : Promise.resolve()]).catch((e) => setError(errMsg(e)));
    }, [loadSlots, loadMe, token]);

    const upcoming = useMemo(() => bookings.filter((b) => b.status !== "cancelled" && +new Date(b.startsAt) > now), [bookings, now]);
    const past = useMemo(() => bookings.filter((b) => !upcoming.includes(b)), [bookings, upcoming]);
    const canBook = user && !user.needsProfile && !upcoming.length && !user.freeConsultationUsed;

    return (
        <Root>
            <Section id={embedded ? "book" : undefined} className="relative overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.15]"
                    style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
                <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-175 h-87.5"
                    style={{ background: "radial-gradient(ellipse, rgba(217,119,6,0.1) 0%, transparent 65%)" }} />
                <Wrapper>
                    <div>
                        <FadeUp delay={0}>
                            {!embedded && (
                            <div className="flex items-center gap-1.5 text-[12px] text-zinc-300 mb-6">
                                <Link href="/" className="hover:text-zinc-100 transition-colors">Home</Link>
                                <ChevronRight size={12} />
                                <span className="text-zinc-100">Book a call</span>
                            </div>
                            )}
                            <SectionBadge label="Free 30-Min Exploration Call" />
                        </FadeUp>
                        <FadeUp delay={0.08}>
                            <Heading className="tracking-tight text-zinc-200 leading-tight mb-3 lg:text-4xl text-3xl font-medium max-w-2xl">
                                Book your free <span className="text-amber-600 font-sora">Exploration Call</span>
                            </Heading>
                        </FadeUp>
                        <FadeUp delay={0.15}>
                            <p className="text-zinc-200 text-sm font-light max-w-xl">
                                30 minutes on Google Meet with the Wizards Next team to understand your business and goals. Pick a time below. You&apos;ll get the Meet link and reminders on WhatsApp.
                            </p>
                        </FadeUp>
                    </div>

                    <FadeUp delay={0.2} className="grid gap-px bg-zinc-800 rounded-2xl overflow-hidden lg:grid-cols-[1fr_1.5fr]">
                        <aside className="bg-zinc-900 p-7 flex flex-col gap-5">
                            {([
                                [Clock, "Duration", "30 minutes · free"],
                                [Video, "Where", "Google Meet (link sent on WhatsApp)"],
                                [CalendarDays, "Times", "Shown in IST (India Standard Time)"],
                                [MessageCircle, "Updates", "Confirmation and reminders on WhatsApp"],
                            ] as const).map(([Icon, label, value]) => (
                                <div key={label} className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-amber-600/10 border border-amber-600/20 flex items-center justify-center shrink-0">
                                        <Icon size={15} strokeWidth={1.6} className="text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-[12px] text-zinc-300 uppercase tracking-wider mb-0.5">{label}</p>
                                        <p className="text-zinc-100 text-[12.5px]">{value}</p>
                                    </div>
                                </div>
                            ))}
                            {user && (
                                <div className="mt-2 pt-5 border-t border-zinc-800 text-[12.5px] text-zinc-300 flex items-center justify-between gap-3">
                                    <span>Signed in as <b className="text-zinc-100">{user.name || "+" + user.phone}</b><br />+{user.phone}</span>
                                    <button className={ghost} onClick={() => signOut()}><LogOut size={14} /> Sign out</button>
                                </div>
                            )}
                        </aside>

                        <div className="bg-zinc-950/80 p-7 flex flex-col gap-5 min-h-105">
                            {error && <p role="alert" className="text-[12.5px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{error}</p>}
                            {notice && <p role="status" className="text-[12.5px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">{notice}</p>}
                            {loading ? (
                                <div className="flex-1 flex items-center justify-center text-zinc-400 text-sm gap-2"><Loader2 className="animate-spin" size={16} /> Loading…</div>
                            ) : !token || !user ? (
                                <SignIn onDone={(t, exp, u) => { localStorage.setItem(TOKEN_KEY, JSON.stringify({ token: t, exp: Date.now() + exp * 1000 - 60_000 })); setToken(t); setUser(u); loadMe(t).catch((e) => setError(errMsg(e))); }} />
                            ) : user.needsProfile ? (
                                <Profile token={token} onDone={(u) => setUser(u)} onAuthLost={() => signOut(true)} />
                            ) : reschedule ? (
                                <SlotPicker days={days} title={`Reschedule ${ref(reschedule.id)}`} submitLabel="Move my call" exclude={reschedule.startsAt}
                                    onCancel={() => setReschedule(null)}
                                    onSubmit={async (slot) => {
                                        await call("/api/bookings", { method: "PATCH", token, body: { id: reschedule.id, action: "reschedule", slotId: slot.id } });
                                        setReschedule(null); setNotice(`Your call is moved to ${whenLabel(slot.start)}. The Meet link stays the same.`); await refresh();
                                    }} />
                            ) : (
                                <>
                                    {upcoming.length > 0 && <MyBookings title="Your upcoming call" rows={upcoming} token={token}
                                        onReschedule={(b) => { setNotice(""); setReschedule(b); }}
                                        onChanged={async (m) => { setNotice(m); await refresh(); }} onError={setError} />}
                                    {canBook && (
                                        <SlotPicker days={days} title="Pick a date and time" submitLabel="Book my free call" withNotes
                                            onSubmit={async (slot, notes) => {
                                                const j = await call<{ booking: Booking }>("/api/bookings", { token, body: { slotId: slot.id, notes } });
                                                setNotice(`Booked! ${ref(j.booking.id)} on ${whenLabel(j.booking.startsAt)}. ${j.booking.meetLink ? "Your Google Meet link is below and on WhatsApp." : "We'll send your Google Meet link on WhatsApp."}`);
                                                await refresh();
                                            }} />
                                    )}
                                    {!canBook && !upcoming.length && (
                                        <p className="text-[13px] text-zinc-300">You&apos;ve already used your free Exploration Call. For anything else, <Link href="/contact" className="text-amber-500 underline">contact us</Link>.</p>
                                    )}
                                    {past.length > 0 && <MyBookings title="Past and cancelled" rows={past} token={token} muted onReschedule={() => {}} onChanged={async () => {}} onError={setError} />}
                                </>
                            )}
                        </div>
                    </FadeUp>
                </Wrapper>
            </Section>
        </Root>
    );
}

function SignIn({ onDone }: { onDone: (token: string, expiresIn: number, user: User) => void }) {
    const [phone, setPhone] = useState(""), [code, setCode] = useState(""), [challenge, setChallenge] = useState<string | null>(null);
    const [busy, setBusy] = useState(false), [err, setErr] = useState(""), [wait, setWait] = useState(0);
    useEffect(() => { if (wait <= 0) return; const t = setTimeout(() => setWait((w) => w - 1), 1000); return () => clearTimeout(t); }, [wait]);
    async function send(e?: React.FormEvent) {
        e?.preventDefault(); setBusy(true); setErr("");
        try { const j = await call<{ challenge: string; resendIn: number }>("/api/auth/request", { body: { target: phone } }); setChallenge(j.challenge); setWait(j.resendIn || 30); setCode(""); }
        catch (x) { setErr(errMsg(x)); } finally { setBusy(false); }
    }
    async function verify(e: React.FormEvent) {
        e.preventDefault(); setBusy(true); setErr("");
        try { const j = await call<{ token: string; expiresIn: number; user: User }>("/api/auth/verify", { body: { challenge, code } }); onDone(j.token, j.expiresIn, j.user); }
        catch (x) { setErr(errMsg(x)); } finally { setBusy(false); }
    }
    return (
        <div className="flex flex-col gap-4 max-w-md">
            <h2 className="text-zinc-100 text-lg font-medium">Sign in with WhatsApp</h2>
            <p className="text-[12.5px] text-zinc-300">We&apos;ll send a 6-digit code to your WhatsApp number. No password needed.</p>
            {!challenge ? (
                <form onSubmit={send} className="flex flex-col gap-3">
                    <label className="text-[12px] text-zinc-300">WhatsApp number
                        <input className={input + " mt-1.5"} value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" autoComplete="tel" placeholder="98765 43210 (add country code if outside India)" required />
                    </label>
                    <button className={btn} disabled={busy || phone.replace(/\D/g, "").length < 10}>{busy && <Loader2 size={14} className="animate-spin" />} Send code on WhatsApp</button>
                </form>
            ) : (
                <form onSubmit={verify} className="flex flex-col gap-3">
                    <label className="text-[12px] text-zinc-300">Code sent to WhatsApp
                        <input className={input + " mt-1.5 tracking-[0.4em] text-center text-lg"} value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))} inputMode="numeric" autoComplete="one-time-code" placeholder="••••••" required autoFocus />
                    </label>
                    <button className={btn} disabled={busy || code.length !== 6}>{busy && <Loader2 size={14} className="animate-spin" />} Verify and continue</button>
                    <div className="flex gap-3 text-[12px]">
                        <button type="button" className="text-zinc-300 hover:text-zinc-100 disabled:opacity-50" disabled={wait > 0 || busy} onClick={() => send()}>{wait > 0 ? `Resend in ${wait}s` : "Resend code"}</button>
                        <button type="button" className="text-zinc-300 hover:text-zinc-100" onClick={() => { setChallenge(null); setErr(""); }}>Change number</button>
                    </div>
                </form>
            )}
            {err && <p role="alert" className="text-[12.5px] text-red-400">{err}</p>}
        </div>
    );
}

function Profile({ token, onDone, onAuthLost }: { token: string; onDone: (u: User) => void; onAuthLost: () => void }) {
    const [name, setName] = useState(""), [email, setEmail] = useState(""), [busy, setBusy] = useState(false), [err, setErr] = useState("");
    async function save(e: React.FormEvent) {
        e.preventDefault(); setBusy(true); setErr("");
        try { const j = await call<{ user: User }>("/api/me", { token, body: { name, contactEmail: email } }); onDone(j.user); }
        catch (x) { if ((x as ApiErr).status === 401) onAuthLost(); setErr(errMsg(x)); } finally { setBusy(false); }
    }
    return (
        <form onSubmit={save} className="flex flex-col gap-3 max-w-md">
            <h2 className="text-zinc-100 text-lg font-medium">A little about you</h2>
            <label className="text-[12px] text-zinc-300">Your name
                <input className={input + " mt-1.5"} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required minLength={2} maxLength={100} />
            </label>
            <label className="text-[12px] text-zinc-300">Email (optional, for the Google Calendar invite)
                <input className={input + " mt-1.5"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" maxLength={120} />
            </label>
            <button className={btn} disabled={busy || name.trim().length < 2}>{busy && <Loader2 size={14} className="animate-spin" />} Continue</button>
            {err && <p role="alert" className="text-[12.5px] text-red-400">{err}</p>}
        </form>
    );
}

function SlotPicker({ days, title, submitLabel, withNotes, exclude, onSubmit, onCancel }: {
    days: Day[]; title: string; submitLabel: string; withNotes?: boolean; exclude?: string;
    onSubmit: (slot: Slot, notes: string) => Promise<void>; onCancel?: () => void;
}) {
    const open = days.map((d) => ({ ...d, slots: d.slots.filter((s) => s.start !== exclude) })).filter((d) => d.slots.length);
    const [date, setDate] = useState<string | null>(open[0]?.date || null);
    const [slot, setSlot] = useState<Slot | null>(null), [notes, setNotes] = useState(""), [busy, setBusy] = useState(false), [err, setErr] = useState("");
    const day = open.find((d) => d.date === date) || open[0];
    async function submit() {
        if (!slot) return; setBusy(true); setErr("");
        try { await onSubmit(slot, notes.trim()); setSlot(null); setNotes(""); }
        catch (x) { setErr(errMsg(x)); } finally { setBusy(false); }
    }
    if (!open.length) return (
        <div className="flex flex-col gap-3">
            <h2 className="text-zinc-100 text-lg font-medium">{title}</h2>
            <p className="text-[13px] text-zinc-300">No open times right now. Please check back soon, or <Link href="/contact" className="text-amber-500 underline">contact us</Link>.</p>
            {onCancel && <button className={ghost + " self-start"} onClick={onCancel}>Back</button>}
        </div>
    );
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-zinc-100 text-lg font-medium">{title}</h2>
            <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Dates">
                {open.map((d) => (
                    <button key={d.date} role="tab" aria-selected={day?.date === d.date} onClick={() => { setDate(d.date); setSlot(null); }}
                        className={"shrink-0 px-3.5 py-2 rounded-xl border text-[12.5px] transition-all " + (day?.date === d.date ? "bg-amber-600 border-amber-600 text-black font-semibold" : "border-zinc-800 text-zinc-200 hover:border-amber-600/50")}>
                        {dayLabel(d.date)}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {day?.slots.map((s) => (
                    <button key={s.id} onClick={() => setSlot(s)} aria-pressed={slot?.id === s.id}
                        className={"px-3 py-2.5 rounded-xl border text-[12.5px] transition-all " + (slot?.id === s.id ? "bg-amber-600/15 border-amber-600 text-amber-400 font-semibold" : "border-zinc-800 text-zinc-200 hover:border-amber-600/50")}>
                        {timeLabel(s.start)}
                    </button>
                ))}
            </div>
            {withNotes && (
                <label className="text-[12px] text-zinc-300">What would you like to discuss? (optional)
                    <textarea className={input + " mt-1.5 min-h-20"} value={notes} onChange={(e) => setNotes(e.target.value)} maxLength={1000} placeholder="Your business, goals, website or marketing questions…" />
                </label>
            )}
            <div className="flex gap-2.5 flex-wrap items-center">
                <button className={btn} disabled={!slot || busy} onClick={submit}>{busy && <Loader2 size={14} className="animate-spin" />} {slot ? `${submitLabel} · ${whenLabel(slot.start)}` : submitLabel}</button>
                {onCancel && <button className={ghost} onClick={onCancel} disabled={busy}>Back</button>}
            </div>
            {err && <p role="alert" className="text-[12.5px] text-red-400">{err}</p>}
        </div>
    );
}

function MyBookings({ title, rows, token, muted, onReschedule, onChanged, onError }: {
    title: string; rows: Booking[]; token: string; muted?: boolean;
    onReschedule: (b: Booking) => void; onChanged: (msg: string) => Promise<void>; onError: (m: string) => void;
}) {
    const [busy, setBusy] = useState<number | null>(null);
    async function cancel(b: Booking) {
        if (!confirm(`Cancel your Exploration Call on ${whenLabel(b.startsAt)}?`)) return;
        setBusy(b.id);
        try { await call("/api/bookings", { method: "PATCH", token, body: { id: b.id, action: "cancel" } }); await onChanged(`${ref(b.id)} is cancelled. You can book a new time anytime.`); }
        catch (x) { onError(errMsg(x)); } finally { setBusy(null); }
    }
    return (
        <section className="flex flex-col gap-2.5">
            <h2 className={muted ? "text-zinc-400 text-[13px] uppercase tracking-wider" : "text-zinc-100 text-lg font-medium"}>{title}</h2>
            {rows.map((b) => {
                const live = !muted && b.status !== "cancelled";
                return (
                    <article key={b.id} className={"rounded-xl border p-4 flex flex-col gap-2 " + (live ? "border-amber-600/30 bg-amber-600/5" : "border-zinc-800 bg-zinc-900/40")}>
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                            <b className="text-zinc-100 text-[13.5px] font-medium flex items-center gap-2">{live && <CheckCircle2 size={15} className="text-amber-500" />}{whenLabel(b.startsAt)}</b>
                            <span className="text-[11.5px] text-zinc-400 uppercase tracking-wider">{ref(b.id)} · {b.status}</span>
                        </div>
                        <p className="text-[12.5px] text-zinc-300">Free Exploration Call · {b.durationMinutes} min</p>
                        {live && (
                            <div className="flex gap-2 flex-wrap pt-1">
                                {b.meetLink && <a className={btn + " py-2.5!"} href={b.meetLink} target="_blank" rel="noopener noreferrer"><Video size={14} /> Join Google Meet</a>}
                                <button className={ghost} onClick={() => onReschedule(b)} disabled={busy === b.id}>Reschedule</button>
                                <button className={ghost + " hover:border-red-500/50"} onClick={() => cancel(b)} disabled={busy === b.id}>{busy === b.id && <Loader2 size={14} className="animate-spin" />} Cancel</button>
                            </div>
                        )}
                    </article>
                );
            })}
        </section>
    );
}

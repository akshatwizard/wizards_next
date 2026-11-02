// First-touch lead source (UTM + referrer + landing page), kept in sessionStorage.
// Plain browser JS, no dependencies. Captured once per session on the first page view.
const KEY = "wn_first_touch";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export type LeadSource = Partial<Record<(typeof UTM_KEYS)[number] | "referrer" | "landing_page", string>>;

export function captureFirstTouch(): void {
    if (typeof window === "undefined") return;
    try {
        if (window.sessionStorage.getItem(KEY)) return;
        const params = new URLSearchParams(window.location.search);
        const data: LeadSource = {};
        for (const k of UTM_KEYS) {
            const v = params.get(k);
            if (v) data[k] = v.slice(0, 200);
        }
        let ref = document.referrer || "";
        try {
            if (ref && new URL(ref).hostname === window.location.hostname) ref = "";
        } catch { ref = ""; }
        if (ref) data.referrer = ref.slice(0, 500);
        data.landing_page = window.location.href.slice(0, 500);
        window.sessionStorage.setItem(KEY, JSON.stringify(data));
    } catch {
        // storage blocked — tracking is best-effort
    }
}

export function getLeadSource(): LeadSource {
    if (typeof window === "undefined") return {};
    try {
        captureFirstTouch();
        const raw = window.sessionStorage.getItem(KEY);
        return raw ? (JSON.parse(raw) as LeadSource) : {};
    } catch {
        return {};
    }
}

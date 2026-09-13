// Invisible to real users (off-screen, not display:none — some bots skip
// display:none fields specifically) but present in the DOM and tab order
// removed, so a bot filling every input on the page catches itself here.
export function HoneypotField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <input
            type="text"
            name="company_website"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />
    );
}

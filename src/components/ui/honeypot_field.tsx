// Invisible to real users (off-screen, not display:none — some bots skip
// display:none fields specifically) but present in the DOM and tab order
// removed, so a bot filling every input on the page catches itself here.
//
// The field name deliberately avoids anything resembling "website",
// "company", "url", etc. — those are exactly the categories Chrome's
// autofill aggressively pattern-matches on, which was filling this field
// for real users and getting them wrongly flagged as spam. autoComplete
// is set to "new-password" rather than "off" because Chrome specifically
// honors that value to disable autofill on arbitrary fields — plain "off"
// is well known to be ignored by Chrome for fields it thinks it recognizes.
export function HoneypotField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <input
            type="text"
            name="hp_field_9x2"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            tabIndex={-1}
            autoComplete="new-password"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />
    );
}

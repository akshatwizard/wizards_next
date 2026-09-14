import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Shared across any component that shows a client's initials as an avatar
// (hero trust badge, client marquee, etc.) so real client names are the
// only source — never hardcoded placeholder initials.
export function getInitials(name: string) {
  return name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

// Shortens a long client/business name to fit a title-tag budget (Google
// truncates title tags around 65 characters total). Used by the client
// case-study generateMetadata, so a long institution name never produces
// an over-length title — and so this doesn't need re-solving by hand for
// every new client as the roster grows toward 50.
//
// Order of preference, all working from the real name only — nothing here
// invents an abbreviation:
//   1. The full name, if it already fits.
//   2. A parenthetical short form the client's own name already contains
//      (e.g. "St. John's School DLW Alumni Association (SJSAA)" -> "SJSAA").
//   3. A clean truncation at the last whole word that fits.
export function shortenForTitle(name: string, maxLength: number): string {
  if (name.length <= maxLength) return name

  const parenMatch = name.match(/\(([^)]+)\)\s*$/)
  if (parenMatch && parenMatch[1].length <= maxLength) return parenMatch[1]

  const truncated = name.slice(0, maxLength).replace(/\s+\S*$/, "")
  return truncated || name.slice(0, maxLength)
}

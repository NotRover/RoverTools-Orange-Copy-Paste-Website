/**
 * The GitHub repo, and its live star count for the header.
 *
 * The count is baked in at build time and refreshed in the browser, the same way
 * the release links are (see releases.ts and the nav's script). Never throws: an
 * unauthenticated call is rate limited per address, and a missing count just
 * shows the plain Star button with no number.
 */
import { RELEASES_REPO } from './releases';

export const REPO = RELEASES_REPO;
export const REPO_URL = `https://github.com/${REPO}`;

const API = `https://api.github.com/repos/${REPO}`;

/** Compact star count: 1234 -> "1.2k". Small counts stay exact. */
export function formatStars(n: number): string {
	if (n < 1000) return String(n);
	const k = n / 1000;
	return `${k >= 10 ? Math.round(k) : k.toFixed(1)}k`;
}

export async function fetchStars(): Promise<number | null> {
	try {
		const response = await fetch(API, { headers: { accept: 'application/vnd.github+json' } });
		if (!response.ok) return null;
		const data = (await response.json()) as { stargazers_count?: number };
		return typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
	} catch {
		return null;
	}
}

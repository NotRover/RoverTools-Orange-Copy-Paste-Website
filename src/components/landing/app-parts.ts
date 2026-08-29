/**
 * Icon markup copied verbatim from the app (src/components/icons.tsx) so the
 * mockups draw the same glyphs the product does. Sizes match the app's call
 * sites: 9px on entry chips, 18px on sidebar nav, 8px on window buttons.
 */

const svg = (attrs: string, body: string) =>
	`<svg xmlns="http://www.w3.org/2000/svg" ${attrs}>${body}</svg>`;

const stroke = (size: number, width: number, body: string) =>
	svg(
		`width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"`,
		body,
	);

/* ---- entry type icons, 9px at stroke-width 2.2 on the cards ---- */
export const CHIP_ICONS: Record<string, string> = {
	text: stroke(
		9,
		2.2,
		'<line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/>',
	),
	url: stroke(
		9,
		2.2,
		'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
	),
	html: stroke(9, 2.2, '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
	image: stroke(
		9,
		2.2,
		'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
	),
	video: stroke(
		9,
		2.2,
		'<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
	),
	document: stroke(
		9,
		2.2,
		'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
	),
	file: stroke(
		9,
		2.2,
		'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',
	),
	folder: stroke(
		9,
		2.2,
		'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
	),
	clipboard: stroke(
		9,
		2.5,
		'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
	),
	pin: svg(
		'width="9" height="9" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"',
		'<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
	),
	saved: svg(
		'width="9" height="9" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"',
		'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
	),
	check: stroke(9, 2.8, '<polyline points="20 6 9 17 4 12"/>'),
};

/* the app's own labels, from TYPE_LABELS */
export const TYPE_LABELS: Record<string, string> = {
	text: 'Text',
	url: 'URL',
	html: 'Rich Text',
	image: 'Image',
	video: 'Video',
	document: 'Doc',
	file: 'File',
	folder: 'Folder',
};

/* chip tints, hard-coded per kind in EntryCard.css */
export const KIND_COLORS: Record<string, string> = {
	text: 'var(--accent)',
	image: '#3b82f6',
	file: '#8b5cf6',
	video: '#ef4444',
	url: '#10b981',
	html: '#a855f7',
	document: '#f97316',
	folder: '#0ea5e9',
	pinned: 'var(--accent)',
	saved: '#22c55e',
};

/* group tag colors, from GROUP_COLORS in the app's types.ts */
export const GROUP_COLORS: Record<string, string> = {
	amber: '#f59e0b',
	red: '#ef4444',
	rose: '#f43f5e',
	emerald: '#10b981',
	lime: '#84cc16',
	teal: '#14b8a6',
	cyan: '#06b6d4',
	blue: '#3b82f6',
	indigo: '#6366f1',
	purple: '#a855f7',
	pink: '#ec4899',
};

/* ---- sidebar nav icons, 18px at stroke-width 2 ---- */
export const NAV_ICONS = {
	clipboard: stroke(
		18,
		2,
		'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
	),
	notes: stroke(
		18,
		2,
		'<path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect x="4" y="4" width="16" height="18" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/>',
	),
	keyboard: stroke(
		18,
		2,
		'<rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M7 16h10"/>',
	),
	gear: stroke(
		18,
		2,
		'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
	),
	sun: stroke(
		17,
		2,
		'<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
	),
	/* Phosphor CloudCheck, duotone, 20px - the connected sync state */
	cloudCheck: svg(
		'width="20" height="20" fill="currentColor" viewBox="0 0 256 256"',
		'<path d="M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z" opacity="0.2"/><path d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Zm37.66-93.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L144,148.69l42.34-42.35A8,8,0,0,1,197.66,106.34Z"/>',
	),
	/* Phosphor CloudArrowUp, duotone, 20px - the sidebar's "syncing" state */
	cloudArrowUp: svg(
		'width="20" height="20" fill="currentColor" viewBox="0 0 256 256"',
		'<path d="M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z" opacity="0.2"/><path d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Zm37.66-93.66a8,8,0,0,1-11.32,11.32L168,123.31V172a8,8,0,0,1-16,0V123.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z"/>',
	),
	/* the same CloudCheck at 11px, as the filter's Cloud segment draws it */
	cloudCheck11: svg(
		'width="11" height="11" fill="currentColor" viewBox="0 0 256 256"',
		'<path d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Zm37.66-93.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L144,148.69l42.34-42.35A8,8,0,0,1,197.66,106.34Z"/>',
	),
	/* Phosphor BellSimple, regular, 21px */
	bell: svg(
		'width="21" height="21" fill="currentColor" viewBox="0 0 256 256"',
		'<path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.85-32A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z"/>',
	),
	/* Phosphor UserCircle, regular, 22px */
	user: svg(
		'width="22" height="22" fill="currentColor" viewBox="0 0 256 256"',
		'<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"/>',
	),
};

/* ---- window buttons: 8px glyphs on a 10 unit grid ---- */
/* Settings section marks, at the 15px the app draws them. The app uses Phosphor
   here; these are the same shapes in the stroke set the rest of the mock uses. */
export const SET_ICONS = {
	sliders: stroke(
		15,
		2,
		'<line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/><circle cx="9" cy="8" r="2.6"/><circle cx="16" cy="16" r="2.6"/>',
	),
	clipboardText: stroke(
		15,
		2,
		'<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9.5 4V2.8h5V4"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="13.5" y2="15"/>',
	),
	clock: stroke(
		15,
		2,
		'<circle cx="12" cy="12" r="8.5"/><polyline points="12 7.2 12 12 15.4 14"/>',
	),
};

export const WIN_ICONS = {
	min: svg(
		'width="8" height="8" viewBox="0 0 10 10" fill="none"',
		'<rect x="0" y="4.5" width="10" height="1" rx="0.5" fill="currentColor"/>',
	),
	max: svg(
		'width="8" height="8" viewBox="0 0 10 10" fill="none"',
		'<rect x="0.5" y="0.5" width="9" height="9" rx="1" stroke="currentColor" stroke-width="1.2"/>',
	),
	close: svg(
		'width="8" height="8" viewBox="0 0 10 10" fill="none"',
		'<line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
	),
};

/* ---- toolbar icons, at the sizes the top bar uses ---- */
export const TB_ICONS = {
	sortArrow: stroke(11, 2.2, '<polyline points="17 11 12 6 7 11"/><line x1="12" y1="18" x2="12" y2="6"/>'),
	chevron: stroke(8, 2.8, '<polyline points="6 9 12 15 18 9"/>'),
	filter: stroke(12, 2.2, '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>'),
	search: stroke(11, 2, '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
	tiles: stroke(
		12,
		2,
		'<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
	),
	columns: stroke(
		12,
		2,
		'<rect x="3" y="3" width="7.5" height="18" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="18" rx="1.5"/>',
	),
	single: stroke(
		12,
		2,
		'<rect x="4" y="3" width="16" height="8" rx="1.5"/><rect x="4" y="13" width="16" height="8" rx="1.5"/>',
	),
	select: stroke(13, 2.2, '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 12.5l2.5 2.5L16 9"/>'),
	groups: stroke(
		13,
		2,
		'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
	),
	trash: stroke(
		13,
		2.2,
		'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
	),
	dayChevron: stroke(10, 2.5, '<polyline points="6 9 12 15 18 9"/>'),
};

/* ---- Spaces glyphs: Phosphor paths lifted from @phosphor-icons/react, at the
   sizes and weights SpacesScreen.tsx asks for ---- */
const phos = (size: number, path: string) =>
	svg(`width="${size}" height="${size}" viewBox="0 0 256 256" fill="currentColor"`, `<path d="${path}"/>`);

const CLIPBOARD_BOLD =
	'M200,28H165.47a51.88,51.88,0,0,0-74.94,0H56A20,20,0,0,0,36,48V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28ZM155.71,60H100.29a28,28,0,0,1,55.42,0ZM196,212H60V52H77.41A52.13,52.13,0,0,0,76,64v8A12,12,0,0,0,88,84h80a12,12,0,0,0,12-12V64a52.13,52.13,0,0,0-1.41-12H196Z';
const CLIPBOARD_REG =
	'M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z';

export const SRC_ICONS = {
	/** note editor toolbar: bold, 13px bold */
	bold13: phos(
		13,
		'M185.08,114.46A48,48,0,0,0,148,36H80A12,12,0,0,0,68,48V200a12,12,0,0,0,12,12h80a52,52,0,0,0,25.08-97.54ZM92,60h56a24,24,0,0,1,0,48H92Zm68,128H92V132h68a28,28,0,0,1,0,56Z',
	),
	/** note editor toolbar: italic, 13px bold */
	italic13: phos(
		13,
		'M204,56a12,12,0,0,1-12,12H160.65l-40,120H144a12,12,0,0,1,0,24H64a12,12,0,0,1,0-24H95.35l40-120H112a12,12,0,0,1,0-24h80A12,12,0,0,1,204,56Z',
	),
	/** note editor toolbar: strike, 13px bold */
	strike13: phos(
		13,
		'M228,128a12,12,0,0,1-12,12H185.86A41.48,41.48,0,0,1,196,168c0,14.45-7.81,28.32-21.43,38.05C162,215.05,145.44,220,128,220s-34-4.95-46.57-13.95C67.81,196.32,60,182.45,60,168a12,12,0,0,1,24,0c0,15.18,20.15,28,44,28s44-12.82,44-28c0-12.76-9.3-20.18-35.35-28H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM75.11,100a12,12,0,0,0,12-12c0-16,17.58-28,40.89-28,17.36,0,31.37,6.65,37.48,17.78a12,12,0,0,0,21-11.56C176.13,47.3,154.25,36,128,36,91,36,63.11,58.35,63.11,88A12,12,0,0,0,75.11,100Z',
	),
	/** note editor toolbar: code, 13px bold */
	code13: phos(
		13,
		'M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z',
	),
	/** note editor toolbar: bullets, 13px bold */
	bullets13: phos(
		13,
		'M76,64A12,12,0,0,1,88,52H216a12,12,0,0,1,0,24H88A12,12,0,0,1,76,64Zm140,52H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,64H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM44,112a16,16,0,1,0,16,16A16,16,0,0,0,44,112Zm0-64A16,16,0,1,0,60,64,16,16,0,0,0,44,48Zm0,128a16,16,0,1,0,16,16A16,16,0,0,0,44,176Z',
	),
	/** note editor toolbar: checks, 13px bold */
	checks13: phos(
		13,
		'M228,128a12,12,0,0,1-12,12H128a12,12,0,0,1,0-24h88A12,12,0,0,1,228,128ZM128,76h88a12,12,0,0,0,0-24H128a12,12,0,0,0,0,24Zm88,104H128a12,12,0,0,0,0,24h88a12,12,0,0,0,0-24ZM79.51,39.51,56,63l-7.51-7.52a12,12,0,0,0-17,17l16,16a12,12,0,0,0,17,0l32-32a12,12,0,0,0-17-17Zm0,64L56,127l-7.51-7.52a12,12,0,1,0-17,17l16,16a12,12,0,0,0,17,0l32-32a12,12,0,0,0-17-17Zm0,64L56,191l-7.51-7.52a12,12,0,1,0-17,17l16,16a12,12,0,0,0,17,0l32-32a12,12,0,0,0-17-17Z',
	),
	/** note editor toolbar: alignLeft, 13px bold */
	alignLeft13: phos(
		13,
		'M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,52H168a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm176,16H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-48,40H40a12,12,0,0,0,0,24H168a12,12,0,0,0,0-24Z',
	),
	/** note editor toolbar: link, 13px bold */
	link13: phos(
		13,
		'M117.18,188.74a12,12,0,0,1,0,17l-5.12,5.12A58.26,58.26,0,0,1,70.6,228h0A58.62,58.62,0,0,1,29.14,127.92L63.89,93.17a58.64,58.64,0,0,1,98.56,28.11,12,12,0,1,1-23.37,5.44,34.65,34.65,0,0,0-58.22-16.58L46.11,144.89A34.62,34.62,0,0,0,70.57,204h0a34.41,34.41,0,0,0,24.49-10.14l5.11-5.12A12,12,0,0,1,117.18,188.74ZM226.83,45.17a58.65,58.65,0,0,0-82.93,0l-5.11,5.11a12,12,0,0,0,17,17l5.12-5.12a34.63,34.63,0,1,1,49,49L175.1,145.86A34.39,34.39,0,0,1,150.61,156h0a34.63,34.63,0,0,1-33.69-26.72,12,12,0,0,0-23.38,5.44A58.64,58.64,0,0,0,150.56,180h.05a58.28,58.28,0,0,0,41.47-17.17l34.75-34.75a58.62,58.62,0,0,0,0-82.91Z',
	),
	/** the shortcuts zone head: the app's keyboard glyph at 13px */
	keyboard13: stroke(
		13,
		2,
		'<rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M7 16h10"/>',
	),
	/** the storage zone head: Phosphor CloudCheck at 13px */
	cloud13: phos(
		13,
		'M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Zm37.66-93.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L144,148.69l42.34-42.35A8,8,0,0,1,197.66,106.34Z',
	),
	/** notification glyphs, from the popout's own icon set: UsersThree size 15 */
	usersThree15: phos(
		15,
		'M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z',
	),
	/** CheckCircle size 15 */
	checkCircle15: phos(
		15,
		'M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z',
	),
	/** WarningCircle size 15 */
	warningCircle15: phos(
		15,
		'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z',
	),
	/** the account screen's Devices zone head, and a Windows device row: Desktop size 13 */
	desktop13: phos(
		13,
		'M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z',
	),
	/** a mac device row: Laptop size 15 */
	laptop15: phos(
		15,
		'M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z',
	),
	/** a windows device row: Desktop size 15 */
	desktop15: phos(
		15,
		'M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z',
	),
	/** shared out from this account: ArrowUpRight size 11, weight bold */
	arrowUp10: phos(
		11,
		'M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z',
	),
	/** shared in by a member: ArrowDownLeft size 11, weight bold */
	arrowDown10: phos(
		11,
		'M200.49,72.48,93,180h75a12,12,0,0,1,0,24H64a12,12,0,0,1-12-12V88a12,12,0,0,1,24,0v75L183.51,55.51a12,12,0,0,1,17,17Z',
	),
	/** the removed-item placeholder's mark: Prohibit size 11, weight bold */
	prohibit11: phos(
		11,
		'M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.6,83.6,0,0,1-16.75,50.28L77.72,60.75A84,84,0,0,1,212,128ZM44,128A83.6,83.6,0,0,1,60.75,77.72L178.28,195.25A84,84,0,0,1,44,128Z',
	),
	/** the feed segment's clipboard-only button: Clipboard size 11 */
	clipboard11: phos(11, CLIPBOARD_REG),
	/** the feed segment's notes-only button: Note size 11 */
	note11: phos(
		11,
		'M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z',
	),
	/** the spaces toolbar's All-items button: SquaresFour size 12 */
	squares12: phos(
		12,
		'M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z',
	),
	/** the spaces toolbar's Rows layout button: Rows size 12 */
	rows12: phos(
		12,
		'M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z',
	),
	/** comment count on a shared item: ChatCircle size 10 */
	chat10: phos(
		10,
		'M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z',
	),
	/** source chip on a shared clipboard item: Clipboard size 9, weight bold */
	clipboard: phos(9, CLIPBOARD_BOLD),
	/** source chip on a shared note: Note size 9 */
	note: phos(
		9,
		'M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z',
	),
	/** auto-copy flag on a space row: Clipboard size 9 */
	clipboard9: phos(9, CLIPBOARD_REG),
	/** share-rule flag on a space row: Funnel size 9 */
	funnel9: phos(
		9,
		'M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm106.18,74.58A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.47L40,56H216Z',
	),
	/** Local segment in the Cloud filter: CloudSlash size 11 */
	cloudSlash11: phos(11, 'M53.92,34.62A8,8,0,1,0,42.08,45.38L81.32,88.55l-.06.12A65,65,0,0,0,72,88a64,64,0,0,0,0,128h88a87.34,87.34,0,0,0,31.8-5.93l10.28,11.31a8,8,0,1,0,11.84-10.76ZM160,200H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.3.12A88.4,88.4,0,0,0,72,128a8,8,0,0,0,16,0,72.25,72.25,0,0,1,5.06-26.54l87,95.7A71.66,71.66,0,0,1,160,200Zm88-72a87.89,87.89,0,0,1-22.35,58.61A8,8,0,0,1,213.71,176,72,72,0,0,0,117.37,70a8,8,0,0,1-9.48-12.89A88,88,0,0,1,248,128Z'),
	/** In-a-space segment in the sharing filter: ShareNetwork size 11 */
	shareNetwork11: phos(11, 'M176,160a39.89,39.89,0,0,0-28.62,12.09l-46.1-29.63a39.8,39.8,0,0,0,0-28.92l46.1-29.63a40,40,0,1,0-8.66-13.45l-46.1,29.63a40,40,0,1,0,0,55.82l46.1,29.63A40,40,0,1,0,176,160Zm0-128a24,24,0,1,1-24,24A24,24,0,0,1,176,32ZM64,152a24,24,0,1,1,24-24A24,24,0,0,1,64,152Zm112,72a24,24,0,1,1,24-24A24,24,0,0,1,176,224Z'),
	/** the filter card's own head icon: Funnel size 12 */
	funnel12: phos(12, 'M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm106.18,74.58A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.47L40,56H216Z'),
	/** Create button: Plus size 11 */
	plus11: phos(11, 'M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z'),
	/** Join button: Key size 11 */
	key11: phos(
		11,
		'M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM224,98.1c-1.09,34.09-29.75,61.86-63.89,61.9H160a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A63.72,63.72,0,0,1,96,95.92c0-34.14,27.81-62.8,61.9-63.89A64,64,0,0,1,224,98.1ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z',
	),
};

/* ---- the capture popup's action row: pin and star unfilled at 13px, trash 13px,
   exactly as CopyPopup.tsx calls them ---- */
export const MENU_ICONS = {
	/** CopyIcon at its 13px menu size */
	copy: stroke(
		13,
		2,
		'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
	),
	/** ExpandIcon: arrows out */
	expand: stroke(
		13,
		2,
		'<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>',
	),
	/** Phosphor CloudArrowUp, size 13 */
	cloudUp: phos(
		13,
		'M196.49,151.51a12,12,0,0,1-17,17L168,157v51a12,12,0,0,1-24,0V157l-11.51,11.52a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0ZM160,36A92.08,92.08,0,0,0,79,84.37,68,68,0,1,0,72,220h28a12,12,0,0,0,0-24H72a44,44,0,0,1-1.81-87.95A91.7,91.7,0,0,0,68,128a12,12,0,0,0,24,0,68,68,0,1,1,132.6,21.29,12,12,0,1,0,22.8,7.51A92.06,92.06,0,0,0,160,36Z',
	),
	/** Phosphor ShareNetwork, size 13 */
	share: phos(
		13,
		'M176,156a43.78,43.78,0,0,0-29.09,11L106.1,140.8a44.07,44.07,0,0,0,0-25.6L146.91,89a43.83,43.83,0,1,0-13-20.17L93.09,95a44,44,0,1,0,0,65.94L133.9,187.2A44,44,0,1,0,176,156Zm0-120a20,20,0,1,1-20,20A20,20,0,0,1,176,36ZM64,148a20,20,0,1,1,20-20A20,20,0,0,1,64,148Zm112,72a20,20,0,1,1,20-20A20,20,0,0,1,176,220Z',
	),
	/** Phosphor Tag, size 13 - the Groups row */
	tag: phos(
		13,
		'M246.15,133.18,146.83,33.86A19.85,19.85,0,0,0,132.69,28H40A12,12,0,0,0,28,40v92.69a19.85,19.85,0,0,0,5.86,14.14l99.32,99.32a20,20,0,0,0,28.28,0l84.69-84.69A20,20,0,0,0,246.15,133.18Zm-98.83,93.17L52,131V52h79l95.32,95.32ZM104,88A16,16,0,1,1,88,72,16,16,0,0,1,104,88Z',
	),
	/** Phosphor CaretDown, size 11 - the submenu chevron */
	caret: phos(
		11,
		'M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z',
	),
	pin: stroke(
		13,
		2,
		'<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
	),
	star: svg(
		'width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"',
		'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
	),
	trash: stroke(
		13,
		2.2,
		'<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
	),
};

/* ---- stand-in thumbnails for image, video and multi-file entries.

   The app draws whatever the person actually copied. There is no such thing here,
   so these are small SVGs that read as the kind of thing you copy at work: a chart,
   a screenshot of a UI, a photo. They are inlined as data URIs so the page stays
   self-contained and nothing extra is fetched. ---- */
const dataUri = (svg: string) =>
	`data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" ${svg}</svg>`)}`;

export const THUMBS = {
	/* a bar chart on a light card, the way a copied dashboard crop looks */
	chart: dataUri(
		`viewBox="0 0 240 132" width="240" height="132">
		<rect width="240" height="132" fill="#f6f7f9"/>
		<rect x="16" y="14" width="62" height="6" rx="3" fill="#c3c9d2"/>
		<rect x="16" y="102" width="208" height="1" fill="#d8dde4"/>
		<rect x="22" y="62" width="20" height="40" rx="2" fill="#93a3b5"/>
		<rect x="52" y="46" width="20" height="56" rx="2" fill="#93a3b5"/>
		<rect x="82" y="72" width="20" height="30" rx="2" fill="#93a3b5"/>
		<rect x="112" y="34" width="20" height="68" rx="2" fill="#ff6a45"/>
		<rect x="142" y="54" width="20" height="48" rx="2" fill="#93a3b5"/>
		<rect x="172" y="26" width="20" height="76" rx="2" fill="#ff6a45"/>
		<rect x="202" y="66" width="20" height="36" rx="2" fill="#93a3b5"/>
		<rect x="16" y="112" width="34" height="5" rx="2" fill="#d8dde4"/>
		<rect x="58" y="112" width="34" height="5" rx="2" fill="#d8dde4"/>
		<rect x="100" y="112" width="34" height="5" rx="2" fill="#d8dde4"/>`,
	),
	/* a dark UI screenshot: sidebar, toolbar, a couple of rows */
	ui: dataUri(
		`viewBox="0 0 240 132" width="240" height="132">
		<rect width="240" height="132" fill="#141821"/>
		<rect width="34" height="132" fill="#0f1319"/>
		<circle cx="17" cy="18" r="6" fill="#ff6a45"/>
		<rect x="10" y="36" width="14" height="14" rx="4" fill="#2a3240"/>
		<rect x="10" y="56" width="14" height="14" rx="4" fill="#1e2530"/>
		<rect x="10" y="76" width="14" height="14" rx="4" fill="#1e2530"/>
		<rect x="46" y="12" width="90" height="8" rx="4" fill="#333d4c"/>
		<rect x="188" y="10" width="40" height="12" rx="6" fill="#ff6a45"/>
		<rect x="46" y="32" width="182" height="28" rx="5" fill="#1b2129"/>
		<rect x="54" y="42" width="104" height="7" rx="3" fill="#3b4553"/>
		<rect x="46" y="66" width="182" height="28" rx="5" fill="#1b2129"/>
		<rect x="54" y="76" width="76" height="7" rx="3" fill="#3b4553"/>
		<rect x="46" y="100" width="182" height="22" rx="5" fill="#171d24"/>`,
	),
	/* a photo: hills at dusk, enough shape to read as a picture and not a swatch */
	photo: dataUri(
		`viewBox="0 0 240 132" width="240" height="132">
		<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1">
		<stop offset="0" stop-color="#2b3b57"/><stop offset="1" stop-color="#7c5b74"/>
		</linearGradient></defs>
		<rect width="240" height="132" fill="url(#s)"/>
		<circle cx="182" cy="42" r="15" fill="#ffcf9e" opacity="0.9"/>
		<path d="M0 104 L58 66 L104 104 Z" fill="#22304a"/>
		<path d="M78 104 L142 58 L206 104 Z" fill="#1a2438"/>
		<path d="M170 104 L216 76 L240 104 Z" fill="#141c2c"/>
		<rect y="104" width="240" height="28" fill="#101827"/>`,
	),
	/* small square crops for the multi-file thumbnail strip */
	swatchA: dataUri(
		`viewBox="0 0 60 60" width="60" height="60">
		<rect width="60" height="60" fill="#1d2530"/>
		<circle cx="30" cy="24" r="11" fill="#ff6a45"/>
		<rect x="12" y="42" width="36" height="6" rx="3" fill="#333d4c"/>`,
	),
	swatchB: dataUri(
		`viewBox="0 0 60 60" width="60" height="60">
		<rect width="60" height="60" fill="#f2f3f6"/>
		<rect x="10" y="12" width="40" height="4" rx="2" fill="#c3c9d2"/>
		<rect x="10" y="24" width="28" height="4" rx="2" fill="#d8dde4"/>
		<rect x="10" y="36" width="34" height="12" rx="3" fill="#93a3b5"/>`,
	),
};

/* ---- the toolbar's sort options, 11px, from icons.tsx. Order matches
   SORT_OPTIONS: Newest, Oldest, A to Z, Z to A, Type. ---- */
export const SORT_ICONS: string[] = [
	stroke(11, 2.2, '<polyline points="17 11 12 6 7 11"/><line x1="12" y1="18" x2="12" y2="6"/>'),
	stroke(11, 2.2, '<polyline points="7 13 12 18 17 13"/><line x1="12" y1="6" x2="12" y2="18"/>'),
	stroke(11, 2.4, '<line x1="4" y1="6" x2="10" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>'),
	stroke(11, 2.4, '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="10" y2="18"/>'),
	stroke(
		11,
		2.2,
		'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
	),
];

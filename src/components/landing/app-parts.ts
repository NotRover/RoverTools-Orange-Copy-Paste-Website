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

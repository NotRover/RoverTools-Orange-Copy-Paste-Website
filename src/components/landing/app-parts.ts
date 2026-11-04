/**
 * Icon markup copied verbatim from the app so the mockups draw the same glyphs
 * the product does: the app's own icons (src/components/icons.tsx) and the
 * Tabler icons it imports from @tabler/icons-react. Sizes and stroke widths
 * match the app's call sites: 9px on entry chips, 18px on sidebar nav, 8px on
 * window buttons.
 */

const svg = (attrs: string, body: string) =>
	`<svg xmlns="http://www.w3.org/2000/svg" ${attrs}>${body}</svg>`;

const stroke = (size: number, width: number, body: string) =>
	svg(
		`width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"`,
		body,
	);

/* Tabler bodies, copied from @tabler/icons 3.50.0 (the version the app's
   @tabler/icons-react pins). Outline icons draw on a 24 grid at stroke 2
   unless the app passes another `stroke`; `playFilled` is a filled variant. */
const T = {
	cloudCheck: '<path d="M11 18.004h-4.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.388 0 2.585 .82 3.138 2.007"/><path d="M15 19l2 2l4 -4"/>',
	cloudUp: '<path d="M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986"/><path d="M19 22v-6"/><path d="M22 19l-3 -3l-3 3"/>',
	cloud: '<path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"/>',
	cloudOff: '<path d="M9.58 5.548c.24 -.11 .492 -.207 .752 -.286c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 .957 -.383 1.824 -1.003 2.454m-2.997 1.033h-11.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.13 -.582 .37 -1.128 .7 -1.62"/><path d="M3 3l18 18"/>',
	userCircle: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"/>',
	adjustments: '<path d="M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/>',
	clipboardText: '<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"/><path d="M9 12h6"/><path d="M9 16h6"/>',
	history: '<path d="M12 8l0 4l2 2"/><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"/>',
	volume: '<path d="M15 8a5 5 0 0 1 0 8"/><path d="M17.7 5a9 9 0 0 1 0 14"/><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"/>',
	folderOpen: '<path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"/>',
	download: '<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 11l5 5l5 -5"/><path d="M12 4l0 12"/>',
	refresh: '<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>',
	playFilled: '<path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"/>',
	bold: '<path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6l0 -7"/><path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"/>',
	italic: '<path d="M11 5l6 0"/><path d="M7 19l6 0"/><path d="M14 5l-4 14"/>',
	strikethrough: '<path d="M5 12l14 0"/><path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5"/>',
	code: '<path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M14 4l-4 16"/>',
	list: '<path d="M9 6l11 0"/><path d="M9 12l11 0"/><path d="M9 18l11 0"/><path d="M5 6l0 .01"/><path d="M5 12l0 .01"/><path d="M5 18l0 .01"/>',
	listCheck: '<path d="M3.5 5.5l1.5 1.5l2.5 -2.5"/><path d="M3.5 11.5l1.5 1.5l2.5 -2.5"/><path d="M3.5 17.5l1.5 1.5l2.5 -2.5"/><path d="M11 6l9 0"/><path d="M11 12l9 0"/><path d="M11 18l9 0"/>',
	alignLeft: '<path d="M4 6l16 0"/><path d="M4 12l10 0"/><path d="M4 18l14 0"/>',
	link: '<path d="M9 15l6 -6"/><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>',
	users: '<path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>',
	circleCheck: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/>',
	alertCircle: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
	copy: '<path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"/><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/>',
	share: '<path d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M8.7 10.7l6.6 -3.4"/><path d="M8.7 13.3l6.6 3.4"/>',
	chartBar: '<path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6"/><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10"/><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14"/><path d="M4 20h14"/>',
	server: '<path d="M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2"/><path d="M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2"/><path d="M7 8l0 .01"/><path d="M7 16l0 .01"/>',
	stack2: '<path d="M12 4l-8 4l8 4l8 -4l-8 -4"/><path d="M4 12l8 4l8 -4"/><path d="M4 16l8 4l8 -4"/>',
	deviceDesktop: '<path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/>',
	deviceLaptop: '<path d="M3 19l18 0"/><path d="M5 7a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8"/>',
	arrowUpRight: '<path d="M17 7l-10 10"/><path d="M8 7l9 0l0 9"/>',
	arrowDownLeft: '<path d="M17 7l-10 10"/><path d="M16 17l-9 0l0 -9"/>',
	arrowUp: '<path d="M12 5l0 14"/><path d="M18 11l-6 -6"/><path d="M6 11l6 -6"/>',
	arrowDown: '<path d="M12 5l0 14"/><path d="M18 13l-6 6"/><path d="M6 13l6 6"/>',
	ban: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M5.7 5.7l12.6 12.6"/>',
	clipboard: '<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"/>',
	note: '<path d="M13 20l7 -7"/><path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7"/>',
	layoutGrid: '<path d="M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"/><path d="M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"/><path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"/><path d="M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4"/>',
	messageCircle: '<path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1"/>',
	filter: '<path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227"/>',
	plus: '<path d="M12 5l0 14"/><path d="M5 12l14 0"/>',
	key: '<path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0"/><path d="M15 9h.01"/>',
	chevronDown: '<path d="M6 9l6 6l6 -6"/>',
	shieldCheck: '<path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06"/><path d="M15 19l2 2l4 -4"/>',
	search: '<path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/>',
};

/* the app's own rounded bell (icons.tsx BellIcon): Tabler has no rounded one */
const BELL =
	'<path d="M12 3.5a6.5 6.5 0 0 1 6.5 6.5v3.2c0 1.5.6 2.6 1.6 3.6.4.4.1 1.2-.5 1.2H4.4c-.6 0-.9-.8-.5-1.2 1-1 1.6-2.1 1.6-3.6V10A6.5 6.5 0 0 1 12 3.5z"/><path d="M9.5 20.5a2.5 2.5 0 0 0 5 0"/>';

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
	/* not a clipboard kind - notes only ever appear as a tint, on the account
	   screen's composition bar (entryTypes.css) */
	notes: '#eab308',
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
	/** IconCloudCheck, 20px - the connected sync state (Sidebar.tsx) */
	cloudCheck: stroke(20, 2, T.cloudCheck),
	/** IconCloudUp, 20px - the sidebar's "syncing" state */
	cloudArrowUp: stroke(20, 2, T.cloudUp),
	/** IconCloudCheck at 11px, as the filter's In cloud segment draws it */
	cloudCheck11: stroke(11, 2, T.cloudCheck),
	/** the app's own rounded BellIcon (icons.tsx), 21px - Tabler has no rounded bell */
	bell: stroke(21, 2, BELL),
	/** IconUserCircle, 22px */
	user: stroke(22, 2, T.userCircle),
};

/* Settings section marks, at the 15px the app draws them (SettingsScreen.tsx
   SECTIONS) */
export const SET_ICONS = {
	/** General: IconAdjustmentsHorizontal */
	sliders: stroke(15, 2, T.adjustments),
	/** Quick Paste: IconClipboardText */
	clipboardText: stroke(15, 2, T.clipboardText),
	/** History: IconHistory */
	clock: stroke(15, 2, T.history),
	/** Notifications: the app's BellIcon */
	bell: stroke(15, 2, BELL),
	/** Sounds: IconVolume */
	speaker: stroke(15, 2, T.volume),
	/** Data: IconFolderOpen */
	folderOpen: stroke(15, 2, T.folderOpen),
	/** Updates: IconDownload */
	download: stroke(15, 2, T.download),
	/** the 14px IconFolderOpen on the Data section's Open buttons */
	folder14: stroke(14, 2, T.folderOpen),
	/** the 14px IconRefresh on the Updates button */
	refresh14: stroke(14, 2, T.refresh),
	/** the 8px IconPlayerPlayFilled on each sound test */
	play8: svg('width="8" height="8" viewBox="0 0 24 24" fill="currentColor"', T.playFilled),
	/** Confirmations: IconShieldCheck */
	shieldCheck: stroke(15, 2, T.shieldCheck),
	/** Developer: IconCode */
	code: stroke(15, 2, T.code),
	/** the contents list's search box: IconSearch, 13px (SettingsNav.tsx) */
	search13: stroke(13, 2, T.search),
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
	/* the notes screen's section headings: drawn pointing right and turned a
	   quarter when the section is open, which is how the app draws it */
	chevronRight: stroke(10, 2.5, '<polyline points="9 6 15 12 9 18"/>'),
	/* the search box's clear button */
	close: stroke(9, 3, '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
};

/* ---- glyphs for the other screens, at the sizes SpacesScreen.tsx,
   AccountScreen.tsx, NoteEditor.tsx and the rest ask for ---- */
export const SRC_ICONS = {
	/** note editor toolbar: IconBold, 13px */
	bold13: stroke(13, 2, T.bold),
	/** note editor toolbar: IconItalic, 13px */
	italic13: stroke(13, 2, T.italic),
	/** note editor toolbar: IconStrikethrough, 13px */
	strike13: stroke(13, 2, T.strikethrough),
	/** note editor toolbar: IconCode, 13px */
	code13: stroke(13, 2, T.code),
	/** note editor toolbar: IconList, 13px */
	bullets13: stroke(13, 2, T.list),
	/** note editor toolbar: IconListCheck, 13px */
	checks13: stroke(13, 2, T.listCheck),
	/** note editor toolbar: IconAlignLeft, 13px */
	alignLeft13: stroke(13, 2, T.alignLeft),
	/** note editor toolbar: IconLink, which the app draws at 12px */
	link13: stroke(12, 2, T.link),
	/** the shortcuts zone head: the app's keyboard glyph at 13px */
	keyboard13: stroke(
		13,
		2,
		'<rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M7 16h10"/>',
	),
	/** the Cloud sync zone head: IconCloud, 13px */
	cloud13: stroke(13, 2, T.cloud),
	/** notification glyphs (NotificationsPopout.tsx): IconUsers, 15px */
	usersThree15: stroke(15, 2, T.users),
	/** IconCircleCheck, 15px */
	checkCircle15: stroke(15, 2, T.circleCheck),
	/** IconAlertCircle, 15px */
	warningCircle15: stroke(15, 2, T.alertCircle),
	/* the popups' CloseIcon at 10px, stroke 2.5 */
	close10: stroke(10, 2.5, '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
	/** IconCopy at 12, as the invite and member rows call it */
	copy12: stroke(12, 2, T.copy),
	/** IconShare at 12 */
	shareNetwork12: stroke(12, 2, T.share),
	/** IconDownload, the update card's section mark at 15px */
	download15: stroke(15, 2, T.download),
	/** IconDownload, the update card's button at 14px */
	download14: stroke(14, 2, T.download),
	/** the Storage zone head: IconChartBar, 13px */
	chartBar13: stroke(13, 2, T.chartBar),
	/** storage breakdown, cloud: IconServer, 13px */
	hardDrives13: stroke(13, 2, T.server),
	/** storage breakdown, items: IconStack2, 13px */
	stack13: stroke(13, 2, T.stack2),
	/** the Devices zone head: IconDeviceDesktop, 13px */
	desktop13: stroke(13, 2, T.deviceDesktop),
	/** IconDeviceLaptop, 15px (device rows now show the OS logo instead) */
	laptop15: stroke(15, 2, T.deviceLaptop),
	/** IconDeviceDesktop, 15px (device rows now show the OS logo instead) */
	desktop15: stroke(15, 2, T.deviceDesktop),
	/** the Spaces rows direction badge, shared out: IconArrowUpRight, 11px */
	arrowUpRight11: stroke(11, 2, T.arrowUpRight),
	/** the Spaces rows direction badge, shared in: IconArrowDownLeft, 11px */
	arrowDownLeft11: stroke(11, 2, T.arrowDownLeft),
	/** the share mark on a note card (NoteCard.tsx): IconShare, 15px */
	shareNetwork15: stroke(15, 2, T.share),
	/** the synced tick on a note card: IconCloudCheck, 15px */
	cloudCheck15: stroke(15, 2, T.cloudCheck),
	/** the waiting-to-upload mark on a note card: IconCloudUp, 15px */
	cloudArrowUp15: stroke(15, 2, T.cloudUp),
	/** the filter card's Mine chip: IconArrowUp, 10px (FilterParts.tsx OwnerChips) */
	arrowUp10: stroke(10, 2, T.arrowUp),
	/** the filter card's From others chip: IconArrowDown, 10px */
	arrowDown10: stroke(10, 2, T.arrowDown),
	/** the removed-item placeholder's mark: IconBan, 11px */
	prohibit11: stroke(11, 2, T.ban),
	/** the feed segment's clipboard-only button: IconClipboard, 11px */
	clipboard11: stroke(11, 2, T.clipboard),
	/** the feed segment's notes-only button: IconNote, 11px */
	note11: stroke(11, 2, T.note),
	/** the spaces toolbar's All-items button: IconLayoutGrid, 12px */
	squares12: stroke(12, 2, T.layoutGrid),
	/** the spaces toolbar's Rows layout button: the app's own RowsIcon (icons.tsx), 12px */
	rows12: stroke(12, 2, '<rect x="3" y="4" width="18" height="5" rx="1.5"/><rect x="3" y="12.5" width="18" height="5" rx="1.5"/>'),
	/** comment count on a shared item: IconMessageCircle, 10px */
	chat10: stroke(10, 2, T.messageCircle),
	/** source chip on a shared clipboard item: IconClipboard, 9px */
	clipboard: stroke(9, 2, T.clipboard),
	/** source chip on a shared note: IconNote, 9px */
	note: stroke(9, 2, T.note),
	/** auto-copy flag on a space row: IconClipboard, 9px */
	clipboard9: stroke(9, 2, T.clipboard),
	/** share-rule flag on a space row: IconFilter, 9px */
	funnel9: stroke(9, 2, T.filter),
	/** Local segment in the Cloud filter: IconCloudOff, 11px */
	cloudSlash11: stroke(11, 2, T.cloudOff),
	/** In-a-space segment in the sharing filter: IconShare, 11px */
	shareNetwork11: stroke(11, 2, T.share),
	/** the filter card's own head icon: IconFilter, 12px */
	funnel12: stroke(12, 2, T.filter),
	/** Create button: IconPlus, 11px */
	plus11: stroke(11, 2, T.plus),
	/** Join button: IconKey, 11px */
	key11: stroke(11, 2, T.key),
	/** Recovery-card brand badge: IconKey, 20px (AccountScreen.tsx recovery stage) */
	key20: stroke(20, 2, T.key),
	/** the recovery-code row on the Account screen: IconKey, 15px */
	key15: stroke(15, 2, T.key),
	/** the bulk bar's Cloud button: IconCloud, 11px (BulkActionsBar.tsx) */
	cloud11: stroke(11, 2, T.cloud),
	/** the footer marks on a clipboard card (ChipBar.tsx): 14px at stroke 2.5,
	 *  thicker than the note card's so they read at that size */
	share14: stroke(14, 2.5, T.share),
	cloudCheck14: stroke(14, 2.5, T.cloudCheck),
	cloudUp14: stroke(14, 2.5, T.cloudUp),
	/** shortcuts screen section marks, the app's own icons (icons.tsx) at 13px:
	 *  ClipboardPasteIcon, ClipboardIcon and SystemGroupsIcon */
	clipboardPaste13: stroke(
		13,
		2,
		'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><polyline points="16 12 12 16 8 12"/>',
	),
	clipboard13: stroke(
		13,
		2,
		'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
	),
	systemGroups13: stroke(13, 2, '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>'),
};

/* ---- the capture popup's action row: pin and star unfilled at 13px, trash 13px,
   exactly as CopyPopup.tsx calls them ---- */
/**
 * The OS marks the app shows beside a device on the Account screen
 * (`icons.tsx`: WindowsIcon, AppleIcon, LinuxIcon, AndroidIcon), with the same
 * flat brand colours. 24x24 viewBox; `osLogo(name, size)` sizes one.
 */
const OS_LOGO_PATHS = {
	windows: ['#0078D4', 'M2 2h9.3v9.3H2zM12.7 2H22v9.3h-9.3zM2 12.7h9.3V22H2zM12.7 12.7H22V22h-9.3z'],
	apple: [
		'#A2AAAD',
		'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701',
	],
	android: [
		'#3DDC84',
		'M17.523 15.341a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-11.046 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m11.405-6.02 1.997-3.459a.416.416 0 0 0-.72-.416l-2.022 3.503C15.59 8.244 13.853 7.851 12 7.851s-3.59.393-5.137 1.099L4.841 5.447a.416.416 0 0 0-.72.415l1.997 3.46C2.689 11.187.343 14.659 0 18.761h24c-.344-4.102-2.689-7.574-6.118-9.44',
	],
	linux: [
		'#A2AAAD',
		'M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z',
	],
} as const;

export type OsLogo = keyof typeof OS_LOGO_PATHS;

/** One OS mark as inline SVG, `size` pixels square, in its brand colour or
 *  in `fill` (such as `currentColor` on a coloured button). */
export function osLogo(name: OsLogo, size: number, fill?: string): string {
	const [brand, d] = OS_LOGO_PATHS[name];
	return svg(
		`width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true"`,
		`<path fill="${fill ?? brand}" d="${d}"/>`,
	);
}

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
	/** IconCloudUp, 13px */
	cloudUp: stroke(13, 2, T.cloudUp),
	/** IconShare, 13px */
	share: stroke(13, 2, T.share),
	/** the app's own TagIcon (icons.tsx) at 13px, as the copy popup draws it - the Groups row */
	tag: stroke(13, 2.2, '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>'),
	/** IconChevronDown, 11px - the note editor's menu caret */
	caret: stroke(11, 2, T.chevronDown),
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

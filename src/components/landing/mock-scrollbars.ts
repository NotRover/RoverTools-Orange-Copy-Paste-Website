/**
 * The window mocks draw their own scrollbar.
 *
 * The app can style the real one because it ships in a webview: `App.css` sets
 * `::-webkit-scrollbar` and never thinks about it again. On the web that only
 * covers Chromium and Safari. Firefox has no scrollbar pseudo-elements at all,
 * offers `scrollbar-width` and `scrollbar-color` instead, and takes neither a
 * width nor a corner radius - and in Chromium 121 and later, specifying either
 * of those two properties switches the element to standard scrollbars and drops
 * every pseudo-element rule. So the two engines cannot both be given the app's
 * bar, and one of them was always going to show a grey box.
 *
 * A mock is a picture of an application, so drawing the bar rather than asking
 * for it is honest here in a way it would not be on the page itself, which keeps
 * the browser's own. The surfaces still scroll natively - wheel, trackpad, keys,
 * touch all work, and only the indicator is ours.
 *
 * It is an indicator and nothing more: it reports where the surface is and does
 * not take a drag. Rebuilding that would mean rebuilding the rest of what a real
 * scrollbar does with a pointer - the track click, the page jump, the shift
 * modifier - and a half-built control is worse than an honest readout.
 *
 * Sizes are the app's, from `App.css` and `SpacesScreen.css`.
 */

/* The surfaces the app scrolls, and the bar each one gets. A hair under the
   app's own 12 and 8: this one is read rather than used, so it can afford to be
   quieter than the bar it stands in for. */
const SIZES: Record<string, number> = {
	'oc-viewport': 8,
	'ns-viewport': 8,
	'sp-feed-scroll': 8,
	'sp-rules-body': 8,
	'set-screen': 8,
	/* the one surface with a thinner bar in the app: the gutter is the floor on
	   how tight its cards can sit */
	'sp-panel-scroll': 6,
};

const SELECTOR = Object.keys(SIZES)
	.map((c) => `.${c}`)
	.join(', ');

/** below this the thumb stops being a handle and starts being a dot */
const MIN_THUMB = 20;

interface Bound {
	el: HTMLElement;
	win: HTMLElement;
	bar: HTMLElement;
	thumb: HTMLElement;
	base: number;
}

/**
 * Where `el` sits inside `win`, in the window's own layout pixels.
 *
 * Rects would need the window's zoom divided back out of them, and would land
 * wherever that guess was wrong. Offsets never leave the layout, which is the
 * same space `clientHeight` and `scrollTop` are already reported in - and the
 * bar is an absolutely positioned child of the window, so it is what it wants.
 */
function offsetWithin(el: HTMLElement, win: HTMLElement) {
	let x = 0;
	let y = 0;
	let node: HTMLElement | null = el;

	while (node && node !== win) {
		x += node.offsetLeft;
		y += node.offsetTop;
		node = node.offsetParent as HTMLElement | null;
	}

	/* The walk climbs offset parents, so it only reaches the window if the window
	   is positioned. It is, and the overlay slot depends on the same thing, but a
	   bar placed against the page instead would be worse than no bar. */
	return node === win ? { x, y } : null;
}

function draw(b: Bound) {
	const track = b.el.clientHeight;
	const total = b.el.scrollHeight;
	const at = track ? offsetWithin(b.el, b.win) : null;

	if (!at || total <= track + 1) {
		b.bar.style.display = 'none';
		return;
	}

	/* A window drawn small scales its bar down with everything else, and past a
	   point that is a hairline rather than a small scrollbar. Holding it near the
	   size it was drawn at is what the app does for its note editor's zoom; the
	   cap is where that stops paying and it would become a stripe down the side.
	   Only the width asks about the zoom - the position never does. */
	const zoom = b.win.getBoundingClientRect().width / b.win.offsetWidth || 1;
	const size = Math.min(b.base * 2, Math.max(b.base, b.base / zoom));

	b.bar.style.display = 'block';
	b.bar.style.width = `${size}px`;
	b.bar.style.height = `${track}px`;
	b.bar.style.transform = `translate(${at.x + b.el.clientWidth - size}px, ${at.y}px)`;

	const height = Math.max(MIN_THUMB, (track * track) / total);
	const travel = track - height;
	const progress = b.el.scrollTop / (total - track);

	b.thumb.style.height = `${height}px`;
	b.thumb.style.borderWidth = `${size / 6}px`;
	b.thumb.style.transform = `translateY(${travel * progress}px)`;
}


/* Every bar mounted on the page, so a caller that scrolls a surface itself can
   ask them all to catch up without holding a handle to any one of them. */
const mounted: Bound[] = [];
let chasing = 0;

/**
 * Redraw every bar, and keep redrawing while anything is still moving.
 *
 * A surface set to `overflow: hidden` is still scrollable from script, but it
 * fires no `scroll` event when it moves - so a bar over one of those would stay
 * where it was while the content slid out from under it. The demo scrolls its
 * own panes, and this is how it says so. The frame loop is for the smooth
 * behaviour those scrolls inherit: the call lands when the animation starts, not
 * when it ends.
 */
export function refreshMockScrollbars() {
	for (const bound of mounted) draw(bound);
	if (chasing) return;

	let last = mounted.map((b) => b.el.scrollTop);
	let still = 0;

	const chase = () => {
		for (const bound of mounted) draw(bound);
		const now = mounted.map((b) => b.el.scrollTop);
		still = now.every((top, i) => top === last[i]) ? still + 1 : 0;
		last = now;
		chasing = still < 3 ? requestAnimationFrame(chase) : 0;
	};

	chasing = requestAnimationFrame(chase);
}

export function mountMockScrollbars(root: ParentNode = document) {
	const surfaces = root.querySelectorAll<HTMLElement>(SELECTOR);
	if (!surfaces.length) return;

	const bounds: Bound[] = [];
	const redraw = () => {
		for (const bound of bounds) draw(bound);
	};
	/* One callback for every surface rather than one each: a window entry has no
	   bound of its own, and a surface that did not change size can still need
	   redrawing because the window around it was rescaled. */
	const observer = 'ResizeObserver' in window ? new ResizeObserver(redraw) : null;

	for (const el of surfaces) {
		const win = el.closest<HTMLElement>('.oc-window');
		if (!win) continue;

		const base = SIZES[[...el.classList].find((c) => c in SIZES) ?? ''] ?? 12;
		const bar = document.createElement('div');
		bar.className = 'oc-sb';
		const thumb = document.createElement('div');
		thumb.className = 'oc-sb-thumb';
		bar.appendChild(thumb);
		win.appendChild(bar);

		const bound: Bound = { el, win, bar, thumb, base };
		bounds.push(bound);
		mounted.push(bound);

		el.addEventListener('scroll', () => draw(bound), { passive: true });
		observer?.observe(el);
		observer?.observe(win);
		draw(bound);
	}

	window.addEventListener('resize', redraw);

	/* The first pass runs the moment the module does, which can be before the
	   layout it is measuring has settled - and a bar measured against a surface
	   that does not overflow yet hides itself and waits for a resize that may
	   never come. Web fonts are the usual culprit: they land after this, and they
	   change how tall the content is. */
	requestAnimationFrame(redraw);
	window.addEventListener('load', redraw);
	document.fonts?.ready.then(redraw);
}

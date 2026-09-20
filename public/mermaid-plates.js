// Global Mermaid renderer for every .mermaid-figure on the site: the
// hand-authored inline diagrams (Mermaid.astro) and the generated .md reference
// mirrors both converge on this markup, so one renderer draws them all. Loaded
// as a module from Starlight's head config; mermaid comes from the CDN so the
// site carries no npm mermaid dependency.
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

// AMOLED monochrome matching the dark docs background (#0e0e0e). Fixed-dark in
// both site themes on purpose: one Mermaid config renders crisply in light and
// dark, and the plate underneath it is dark either way.
const themeVariables = {
	background: '#0e0e0e',
	primaryColor: '#1b1b1b',
	primaryTextColor: '#fafafa',
	primaryBorderColor: '#3a3a3a',
	lineColor: '#8c8c8c',
	textColor: '#e4e4e4',
	fontFamily: 'Fira Code, ui-monospace, monospace',
	fontSize: '15px',
	mainBkg: '#1b1b1b',
	nodeBorder: '#3a3a3a',
	nodeTextColor: '#fafafa',
	clusterBkg: '#131313',
	clusterBorder: '#282828',
	edgeLabelBackground: '#0e0e0e',
	titleColor: '#fafafa',
	actorBkg: '#1b1b1b',
	actorBorder: '#3a3a3a',
	actorTextColor: '#fafafa',
	actorLineColor: '#333333',
	signalColor: '#9a9a9a',
	signalTextColor: '#e4e4e4',
	labelBoxBkgColor: '#1b1b1b',
	labelBoxBorderColor: '#3a3a3a',
	labelTextColor: '#fafafa',
	loopTextColor: '#e4e4e4',
	noteBkgColor: '#232323',
	noteTextColor: '#f2f2f2',
	noteBorderColor: '#4d4d4d',
	altBackground: '#141414',
	activationBkgColor: '#262626',
	activationBorderColor: '#4d4d4d',
	sequenceNumberColor: '#0e0e0e',
};

let seq = 0;

function initMermaid() {
	mermaid.initialize({
		startOnLoad: false,
		securityLevel: 'loose',
		theme: 'base',
		themeVariables,
		fontFamily: 'Fira Code, ui-monospace, monospace',
		flowchart: { htmlLabels: true, curve: 'basis', useMaxWidth: true, padding: 14 },
		sequence: {
			useMaxWidth: true,
			diagramMarginX: 14,
			diagramMarginY: 12,
			actorMargin: 46,
			boxMargin: 10,
			noteMargin: 12,
			messageMargin: 38,
			mirrorActors: false,
		},
	});
}

async function renderAll() {
	initMermaid();
	for (const fig of document.querySelectorAll('.mermaid-figure')) {
		const src = fig.querySelector('.mermaid-src')?.textContent?.trim();
		const out = fig.querySelector('.mermaid-out');
		if (!src || !out || out.querySelector('svg')) continue;
		try {
			const { svg } = await mermaid.render('mmd-' + seq++, src);
			out.innerHTML = svg;
		} catch (err) {
			out.innerHTML =
				'<p style="color:var(--sl-color-red);font-size:.85em">Diagram failed to render.</p>';
			console.error('mermaid render failed', err);
		}
	}
}

function reset() {
	document.querySelectorAll('.mermaid-out').forEach((o) => (o.innerHTML = ''));
	renderAll();
}

renderAll();
if (document.fonts?.ready) document.fonts.ready.then(reset);
document.addEventListener('astro:after-swap', reset);

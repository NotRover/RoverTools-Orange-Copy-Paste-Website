#!/usr/bin/env node
/*
 * Pull the developer reference docs into the site as a BUILD ARTIFACT.
 *
 * Single source of truth: the docs live in their own repos, next to the code
 * they describe, and are edited there. This step only makes styled copies for
 * the site to render. The output directory is git-ignored - nothing generated is
 * ever committed, so there is no second copy in version control and nothing to
 * drift. It runs automatically from the `dev` and `build` npm scripts.
 *
 * Where it reads from, per doc:
 *   1. the local sibling repo if it's checked out (your machine: offline, and
 *      shows your current working copy), else
 *   2. the raw file from GitHub `main` (Cloudflare's isolated build).
 *
 * DEPLOY.md is deliberately NOT pulled (host access + recovery detail). The
 * public self-hosting page is hand-written and sanitized.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const WEBSITE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const WORKSPACE_ROOT = resolve(WEBSITE_ROOT, '..');
const OUT_DIR = resolve(WEBSITE_ROOT, 'src/content/docs/docs/developers/reference');

const RUST_BLOB = 'https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App/blob/main/';
const RUST_RAW = 'https://raw.githubusercontent.com/NotRover/RoverTools-Orange-Copy-Paste-App/main/';
const BE_BLOB = 'https://github.com/NotRover/RoverTools-Orange-Copy-Paste-Backend/blob/main/';
const BE_RAW = 'https://raw.githubusercontent.com/NotRover/RoverTools-Orange-Copy-Paste-Backend/main/';

/** @type {Array<{src:string,out:string,title:string,description:string,repo:string,blob:string,raw:string}>} */
const DOCS = [
	{
		src: 'orange-copy-paste-clipboard-backend/docs/architecture.md',
		out: 'wire-contract',
		title: 'Backend architecture (wire contract)',
		description:
			'The API contract: routes, payloads, DDL, socket events, and the encryption envelope. Mirrored from the backend repo.',
		repo: 'backend',
		blob: BE_BLOB + 'docs/architecture.md',
		raw: BE_RAW + 'docs/architecture.md',
	},
	{
		src: 'orange-copy-paste-clipboard-app-rust/docs/architecture.md',
		out: 'client-internals',
		title: 'Client architecture',
		description:
			'How the desktop app works inside: state, Tauri commands, events, persistence, and the sync engine. Mirrored from the client repo.',
		repo: 'client',
		blob: RUST_BLOB + 'orange-copy-paste-clipboard-app-rust/docs/architecture.md',
		raw: RUST_RAW + 'orange-copy-paste-clipboard-app-rust/docs/architecture.md',
	},
	{
		src: 'orange-copy-paste-clipboard-app-rust/docs/bugfix-history.md',
		out: 'bugfix-history',
		title: 'Bug fix history',
		description: 'Notable regressions and their root causes. Mirrored from the client repo.',
		repo: 'client',
		blob: RUST_BLOB + 'orange-copy-paste-clipboard-app-rust/docs/bugfix-history.md',
		raw: RUST_RAW + 'orange-copy-paste-clipboard-app-rust/docs/bugfix-history.md',
	},
	{
		src: 'docs/permissions.md',
		out: 'permissions',
		title: 'Permissions',
		description:
			'Who may do what to an entry or inside a space, and where it is enforced. Mirrored from the workspace repo.',
		repo: 'workspace',
		blob: RUST_BLOB + 'docs/permissions.md',
		raw: RUST_RAW + 'docs/permissions.md',
	},
	{
		src: 'docs/releasing.md',
		out: 'releasing',
		title: 'Releasing',
		description: 'How a client release gets cut. Mirrored from the workspace repo.',
		repo: 'workspace',
		blob: RUST_BLOB + 'docs/releasing.md',
		raw: RUST_RAW + 'docs/releasing.md',
	},
	{
		src: 'docs/architecture.md',
		out: 'architecture-map',
		title: 'Architecture map',
		description:
			'Where everything lives, and the cross-component invariants neither half can keep alone. Mirrored from the workspace repo.',
		repo: 'workspace',
		blob: RUST_BLOB + 'docs/architecture.md',
		raw: RUST_RAW + 'docs/architecture.md',
	},
];

async function readSource(doc) {
	const local = resolve(WORKSPACE_ROOT, doc.src);
	if (existsSync(local)) return { text: readFileSync(local, 'utf8'), from: 'local' };
	const res = await fetch(doc.raw);
	if (!res.ok) {
		throw new Error(
			`pull-dev-docs: ${doc.src} not found locally and GitHub returned ${res.status} for ${doc.raw}. ` +
				'If the source repos are private, make them public or provide a read token in the build env.'
		);
	}
	return { text: await res.text(), from: 'github' };
}

function rewriteLinks(body, blobFileUrl) {
	return body.replace(/\]\(([^)]+)\)/g, (whole, target) => {
		const t = target.trim();
		if (/^(https?:|mailto:|#|\/)/.test(t)) return whole;
		try {
			return `](${new URL(t, blobFileUrl).href})`;
		} catch {
			return whole;
		}
	});
}

function stripLeadingH1(body) {
	return body.replace(/^\s*#\s+.*\n+/, '');
}

function escapeHtml(s) {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ```mermaid -> raw .mermaid-figure HTML (drawn by public/mermaid-plates.js).
// Blank lines are collapsed so the raw-HTML block isn't split by Markdown.
// In MDX the diagram source can't sit in the DOM as text: braces read as JS
// expressions and the typographer curls its quotes and fuses `--`. So MDX pages
// carry it base64-encoded in data-src, which the renderer decodes; plain .md
// pages keep it as escaped text.
function mermaidToFigures(body, mdx) {
	return body.replace(/```mermaid\n([\s\S]*?)```/g, (_whole, code) => {
		const clean = code.replace(/\n{2,}/g, '\n').trim();
		const pre = mdx
			? `<pre class="mermaid-src" hidden data-src="${Buffer.from(clean, 'utf8').toString('base64')}"></pre>`
			: `<pre class="mermaid-src" hidden>${escapeHtml(clean)}</pre>`;
		return (
			'\n<figure class="mermaid-figure"><div class="mermaid-plate">' +
			pre +
			'<div class="mermaid-out not-content" role="img" aria-label="diagram"></div>' +
			'</div></figure>\n'
		);
	});
}

// ```filetree -> Starlight <FileTree> component. The source keeps an ASCII tree
// (readable on GitHub); here it becomes a nested Markdown list the component
// renders with folder/file icons and collapsible directories. A trailing slash
// marks a directory; text after `#` becomes the entry's comment. Forces the
// page to MDX, since <FileTree> is a component.
function filetreeToComponent(body) {
	return body.replace(/```filetree\n([\s\S]*?)```/g, (_whole, block) => {
		const items = [];
		for (const line of block.split('\n')) {
			if (!line.trim()) continue;
			const hash = line.indexOf('#');
			const left = hash === -1 ? line : line.slice(0, hash);
			const comment = hash === -1 ? '' : line.slice(hash + 1).trim();
			const name = left.replace(/[│├└─]/g, ' ').replace(/\s+$/, '').replace(/^\s+/, '');
			if (!name) continue;
			const nameStart = left.length - left.replace(/^[│\s├└─]+/, '').length;
			const depth = Math.floor(nameStart / 4);
			items.push('  '.repeat(depth) + '- ' + name + (comment ? ' ' + comment : ''));
		}
		return '\n<FileTree>\n\n' + items.join('\n') + '\n\n</FileTree>\n';
	});
}

function yamlString(s) {
	return JSON.stringify(s);
}

async function generate(doc) {
	const { text, from } = await readSource(doc);
	const raw = text.replace(/^﻿/, '').replace(/\r\n/g, '\n');
	// A file tree needs the <FileTree> component, which means MDX. The braces in
	// mermaid shapes have to be escaped in MDX, so the two decisions are linked.
	const mdx = raw.includes('```filetree');
	const body = filetreeToComponent(mermaidToFigures(rewriteLinks(stripLeadingH1(raw), doc.blob), mdx));
	const frontmatter =
		'---\n' +
		`title: ${yamlString(doc.title)}\n` +
		`description: ${yamlString(doc.description)}\n` +
		'---\n\n';
	const imports = mdx ? "import { FileTree } from '@astrojs/starlight/components';\n\n" : '';
	const banner =
		':::note[Generated mirror]\n' +
		`This page mirrors [\`${doc.src}\`](${doc.blob}) in the ${doc.repo} repository, where it ` +
		'is edited. It is read-only here.\n' +
		':::\n\n';
	const ext = mdx ? 'mdx' : 'md';
	const stale = resolve(OUT_DIR, `${doc.out}.${mdx ? 'md' : 'mdx'}`);
	if (existsSync(stale)) unlinkSync(stale);
	writeFileSync(resolve(OUT_DIR, `${doc.out}.${ext}`), frontmatter + imports + banner + body, 'utf8');
	return `${doc.out} (${from}, ${ext})`;
}

mkdirSync(OUT_DIR, { recursive: true });
const written = [];
for (const doc of DOCS) written.push(await generate(doc));
console.log(`pull-dev-docs: wrote ${written.length} mirror(s): ${written.join(', ')}`);

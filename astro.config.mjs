// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// Canonical origin, used for canonical links and the sitemap. Set SITE_URL in the
// Cloudflare project once a custom domain is attached; until then Pages hands the
// build CF_PAGES_URL, which is the per-deploy host and the right answer for a
// preview. The literal is the production pages.dev host, for local builds.
const site =
	process.env.SITE_URL ?? process.env.CF_PAGES_URL ?? 'https://orange-copy-paste-app.pages.dev';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			title: 'Orange Copy Paste',
			description:
				'Cross-device smart clipboard with history, notes and end-to-end encrypted sync.',
			logo: { src: './src/assets/app-icon.png', alt: 'Orange Copy Paste' },
			favicon: '/favicon-32.png',
			social: [
				{
					icon: 'github',
					label: 'Releases',
					href: 'https://github.com/NotRover/RoverTools-Releases',
				},
			],
			customCss: ['./src/styles/starlight-theme.css', './src/styles/mermaid.css'],
			// Fira Code (the app's mono) for the Mermaid plates, plus the global
			// renderer that draws every .mermaid-figure (inline design diagrams and
			// generated reference mirrors alike).
			head: [
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				},
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap',
					},
				},
				{
					tag: 'script',
					attrs: { type: 'module', src: '/mermaid-plates.js' },
				},
			],
			// src/pages/404.astro serves the whole site, docs included, so Starlight's
			// own /404 would only collide with it.
			disable404Route: true,
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'What is Orange Copy Paste?', link: '/docs/' },
						{ label: 'Install and first run', slug: 'docs/getting-started' },
					],
				},
				{
					label: 'Using the app',
					items: [
						{ label: 'Clipboard history', slug: 'docs/clipboard-history' },
						{ label: 'Quick paste and capture', slug: 'docs/quick-paste' },
						{ label: 'Notes', slug: 'docs/notes' },
						{ label: 'Settings', slug: 'docs/settings' },
						{ label: 'Shortcuts reference', slug: 'docs/shortcuts' },
					],
				},
				{
					label: 'Sync and sharing',
					items: [
						{ label: 'Cloud sync', slug: 'docs/cloud-sync' },
						{ label: 'Spaces and sharing', slug: 'docs/spaces' },
						{ label: 'Security model', slug: 'docs/security' },
					],
				},
				{
					label: 'More',
					items: [
						{ label: 'Linux notes', slug: 'docs/linux' },
						{ label: 'Updates and releases', slug: 'docs/updates' },
						{ label: 'FAQ', slug: 'docs/faq' },
					],
				},
				{
					label: 'Developers',
					items: [
						{ label: 'Overview', slug: 'docs/developers' },
						{
							label: 'Concepts',
							items: [
								{ label: 'Architecture', slug: 'docs/developers/architecture' },
								{ label: 'Security model', slug: 'docs/developers/security' },
							],
						},
						{
							label: 'Guides',
							items: [
								{ label: 'Self-hosting', slug: 'docs/developers/self-hosting' },
								{ label: 'Contributing', slug: 'docs/developers/contributing' },
							],
						},
						{
							label: 'Reference',
							items: [
								{
									label: 'Backend architecture (wire contract)',
									slug: 'docs/developers/reference/wire-contract',
								},
								{ label: 'Client architecture', slug: 'docs/developers/reference/client-internals' },
								{ label: 'Architecture map', slug: 'docs/developers/reference/architecture-map' },
								{ label: 'Permissions', slug: 'docs/developers/reference/permissions' },
								{ label: 'Releasing', slug: 'docs/developers/reference/releasing' },
								{ label: 'Bug fix history', slug: 'docs/developers/reference/bugfix-history' },
								{ label: 'Space key handover', slug: 'docs/developers/design/space-access' },
								{ label: 'Join approval', slug: 'docs/developers/design/space-join-approval' },
							],
						},
					],
				},
			],
		}),
		mdx(),
	],
});

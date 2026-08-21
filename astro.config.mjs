// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Canonical origin, used for canonical links and the sitemap. Workers Builds does
// not hand the build its own URL, so SITE_URL is the only real knob - set it in the
// Cloudflare project. CF_PAGES_URL is kept for a Pages deploy, where it is the right
// answer for a preview. The literal is a placeholder, not a domain anyone owns.
const site =
	process.env.SITE_URL ??
	process.env.CF_PAGES_URL ??
	'https://rovertools-orangecp-website.workers.dev';

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
					href: 'https://github.com/Spectrewolf8/RoverTools-Releases',
				},
			],
			customCss: ['./src/styles/starlight-theme.css'],
			// src/pages/404.astro serves the whole site, docs included, so Starlight's
			// own /404 would only collide with it.
			disable404Route: true,
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'What is Orange Copy Paste?', link: '/docs/' },
						{ label: 'Install and first run', slug: 'docs/getting-started' },
						{ label: 'Shortcuts reference', slug: 'docs/shortcuts' },
					],
				},
				{
					label: 'Using the app',
					items: [
						{ label: 'Clipboard history', slug: 'docs/clipboard-history' },
						{ label: 'Quick paste and capture', slug: 'docs/quick-paste' },
						{ label: 'Notes', slug: 'docs/notes' },
						{ label: 'Settings', slug: 'docs/settings' },
					],
				},
				{
					label: 'Cloud',
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
			],
		}),
	],
});

import type { APIRoute } from 'astro';

// A route rather than a static file, so the sitemap line follows whatever origin
// the build was given (SITE_URL in production, CF_PAGES_URL on a preview deploy).
export const GET: APIRoute = ({ site }) => {
	const sitemap = new URL('sitemap-index.xml', site).href;

	return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};

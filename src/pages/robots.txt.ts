import type { APIRoute } from 'astro';

// Served at /robots.txt. Everything is public and crawlable; the one thing worth
// stating is where the sitemap is, built from the same `site` the rest of the
// canonical/OG URLs use so it always points at the host actually being served.
export const GET: APIRoute = ({ site }) => {
	const sitemap = new URL('sitemap-index.xml', site).href;
	const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;
	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};

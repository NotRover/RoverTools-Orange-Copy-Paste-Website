/**
 * Where the installers actually are.
 *
 * The site used to hand people the releases page and let them find the right
 * file. This turns that into a link straight at the installer.
 *
 * The asset names are the release workflow's, built from ASSET_PREFIX and the
 * version (release.yml, "Rename bundles"): a space in an uploaded name becomes a
 * dot on GitHub, so the bundles are renamed before upload and every URL is built
 * from the new name. They are read here rather than guessed - a guessed name is
 * a 404 the moment the convention moves.
 *
 * `releases/latest` is deliberately not used. It resolves to the newest
 * NON-prerelease, and every release published so far is a prerelease - so
 * rather than 404 it quietly redirects to the releases index, which is how a
 * link meant to open the newest build ends up dropping people on a list of all
 * of them. The API is asked for the newest release instead, prereleases and all.
 */

export const RELEASES_REPO = 'NotRover/RoverTools-Releases';
export const RELEASES_PAGE = `https://github.com/${RELEASES_REPO}/releases`;

const API = `https://api.github.com/repos/${RELEASES_REPO}/releases?per_page=10`;

export interface Build {
	version: string;
	/** the GitHub release page for this version, for anyone who wants the rest */
	page: string;
	windows?: string;
	appImage?: string;
	deb?: string;
}

interface Asset {
	name: string;
	browser_download_url: string;
}

interface Release {
	tag_name?: string;
	draft?: boolean;
	html_url?: string;
	assets?: Asset[];
}

/** the newest release that actually carries an installer */
export function pickBuild(releases: Release[]): Build | null {
	for (const release of releases) {
		if (release.draft || !release.assets?.length) continue;

		const find = (suffix: string) =>
			release.assets!.find((a) => a.name.endsWith(suffix) && !a.name.endsWith('.sig'))
				?.browser_download_url;

		const windows = find('x64-setup.exe');
		const appImage = find('amd64.AppImage');
		const deb = find('amd64.deb');
		if (!windows && !appImage && !deb) continue;

		return {
			version: (release.tag_name ?? '').replace(/^v/, ''),
			page: release.html_url ?? RELEASES_PAGE,
			windows,
			appImage,
			deb,
		};
	}

	return null;
}

/**
 * Ask GitHub what the newest build is.
 *
 * Used at build time to bake the links into the page, and again in the browser
 * to catch a release published since that build. Never throws: a page that lists
 * no version and links to the releases page is worse than one with the real
 * links, but it is a great deal better than a build that fails because GitHub
 * was briefly unreachable.
 */
export async function fetchBuild(): Promise<Build | null> {
	try {
		const response = await fetch(API, {
			headers: { accept: 'application/vnd.github+json' },
		});
		if (!response.ok) return null;
		return pickBuild((await response.json()) as Release[]);
	} catch {
		return null;
	}
}

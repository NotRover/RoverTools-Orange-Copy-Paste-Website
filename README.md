# Orange Copy Paste: website

The public site for Orange Copy Paste, a clipboard manager for Windows and Linux with end-to-end encrypted sync. It holds the landing page, the user guide, and the developer docs. It is live at [orange-copy-paste-app.pages.dev](https://orange-copy-paste-app.pages.dev), built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), and deployed on Cloudflare Pages.

![The app mockup the docs use in place of screenshots](https://raw.githubusercontent.com/NotRover/RoverTools-Orange-Copy-Paste-App/main/docs/images/clipboard-history.png)

The app pictures on the site are mockups, not screenshots: HTML drawn in the app's own styles with invented content, so no real clipboard ever ends up on a page. The image above is one of them.

| Path on the site | What it is | Source |
|---|---|---|
| `/` | The landing page | `src/pages/index.astro`, one component per section in `src/components/landing/` |
| `/docs/` | The user guide | `src/content/docs/docs/`, sidebar order in `astro.config.mjs` |
| `/docs/developers/` | Architecture and security overviews, self-hosting, design records, and the Reference pages | Hand-written pages beside the generated Reference pages (below) |

## Run it

You need [Bun](https://bun.sh).

```bash
bun install
bun run dev
```

The site opens at `http://localhost:4321`, with the landing page at `/` and the docs at `/docs/`. Pages reload as you edit.

Before you commit, build it. The build type-checks and generates the whole static site into `dist/`, and it must pass:

```bash
bun run build
```

## Write or change a page

Every page follows the workspace [writing guide](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App/blob/main/docs/writing-docs.md). Decide which kind of page you are writing first, and run its checklist before you commit. Numbers, labels and shortcuts on a page must match the app's code.

The Developers > Reference pages are generated, not written here. `scripts/pull-dev-docs.mjs` renders them on every `dev` and `build` from the reference docs in the code repositories, into a folder git ignores. To change one, edit its source doc in the code repository and rebuild. The script reads a sibling checkout when there is one, and GitHub `main` otherwise.

## Deploy

The site is fully static: no adapter, functions or server. Cloudflare Pages builds `main` with these settings:

| Pages setting | Value |
|---|---|
| Project name | `orange-copy-paste-app`, which is also the `pages.dev` host |
| Build command | `bun run build` |
| Build output directory | `dist` |
| Root directory | the repository root |
| Production branch | `main` |

Pages installs with Bun from the committed `bun.lock`. `.node-version` pins Node 22, and `wrangler.toml` carries the project name and output folder.

Once a custom domain is attached, set `SITE_URL` to it (for example `https://orange-copy-paste-app.pages.dev`) in the Pages build settings; it is used for canonical links and the sitemap. Without it, a build uses `CF_PAGES_URL`, which is right for previews. Security headers and caching are in `public/_headers`.

## Related repositories

| Repository | What it is |
| --- | --- |
| [Orange-Copy-Paste-App](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App) | The desktop app and the workspace. Its GitHub Releases hold the downloads and the update feed. |
| [Orange-Copy-Paste-Backend](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-Backend) | The sync server |
| **Orange-Copy-Paste-Website** | This site |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Report vulnerabilities as described in [SECURITY.md](SECURITY.md), not in a public issue. Licensed under the [GNU AGPL v3.0](LICENSE).

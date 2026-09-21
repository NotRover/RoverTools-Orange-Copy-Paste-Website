# Orange Copy Paste — Website

The public site for **Orange Copy Paste**, the cross-device smart clipboard for Windows
and Linux. It serves the marketing landing page, the end-user documentation, and a
developer reference generated from the code repositories.

Live at **[orange-copy-paste-app.pages.dev](https://orange-copy-paste-app.pages.dev)**.
Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build),
managed with [bun](https://bun.sh), and deployed on Cloudflare Pages.

---

## Table of contents

- [What's on the site](#whats-on-the-site)
- [Run it](#run-it)
- [Build](#build)
- [Deploy (Cloudflare Pages)](#deploy-cloudflare-pages)
- [Developer docs mirror](#developer-docs-mirror)
- [Related repositories](#related-repositories)
- [Where facts live](#where-facts-live)
- [License](#license)

---

## What's on the site

- **Landing page** (`/`) — the product overview, feature tour, and download links. A plain
  Astro page that commits to the app's dark theme.
- **User guide** (`/docs/`) — install and first run, clipboard history, quick paste, notes,
  settings, shortcuts, cloud sync, spaces, and security, written for end users.
- **Developers** (`/docs/developers/`) — architecture and security overviews, self-hosting,
  contributing, shipped design records, and a **Reference** section generated from the code
  repositories' own docs (see [below](#developer-docs-mirror)).

---

## Run it

```bash
bun install
bun run dev
```

- `/` — landing page
- `/docs/` — documentation

Both `dev` and `build` regenerate the developer reference mirror first (see below).

## Build

```bash
bun run build
```

Static output lands in `dist/`. This is also the verification step — it typechecks and
generates the full static site.

## Deploy (Cloudflare Pages)

The site is fully static — no adapter, no Functions, no server runtime.

| Pages setting | Value |
| --- | --- |
| Project name | `orange-copy-paste-app`, which is also the `orange-copy-paste-app.pages.dev` host |
| Build command | `bun run build` |
| Build output directory | `dist` |
| Root directory | repo root |
| Production branch | `main` |

`bun.lock` is committed, so Pages installs with bun on its own. `.node-version` pins the
build image to Node 22. `wrangler.toml` carries the project name and the same output
directory, for the Git integration and for `wrangler pages deploy` alike.

One build environment variable, once a custom domain is attached:

- `SITE_URL` — the canonical origin, e.g. `https://orange-copy-paste-app.pages.dev`, used
  for canonical links and the sitemap. Without it the build falls back to `CF_PAGES_URL`,
  which is the per-deploy host and correct for previews, and to the production `pages.dev`
  host for a local build.

`public/_headers` sets the security headers and caches `/_astro/*` immutably. Pages serves
`404.html`, built from `src/pages/404.astro`, for unmatched paths.

---

## Developer docs mirror

The Developers > Reference pages are **generated**, not written here.
`scripts/pull-dev-docs.mjs` reads the reference docs from their homes in the code repos —
the backend and client architecture docs, permissions, releasing, and the bug-fix
history — and writes styled Starlight pages into
`src/content/docs/docs/developers/reference/`, which is **git-ignored**. It runs as the
first step of `dev` and `build`, so the copies are a build artifact: never committed,
nothing to drift.

- **Source of truth stays in the code repos.** To change what a Reference page says, edit
  its home (backend, client, or workspace repo) and rebuild. Never edit a file under
  `reference/` — it is overwritten on every build.
- **Where it reads from:** the local sibling repo if checked out, otherwise the raw file
  from GitHub `main`. A Cloudflare build (siblings absent) needs the source repos public or
  a read token in the build environment.

`DEPLOY.md` is deliberately not mirrored; the public self-hosting page is hand-written and
sanitized.

---

## Related repositories

Orange Copy Paste is built across three code repositories, plus a public feed for
downloads:

| Repository | What it is |
| --- | --- |
| [Orange-Copy-Paste-App](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App) | Desktop app — React + TypeScript + Tauri/Rust |
| [Orange-Copy-Paste-Backend](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-Backend) | Cloud-sync API — FastAPI + Supabase + Redis + S3/R2 |
| **Orange-Copy-Paste-Website** | Docs + marketing site (this repo) — Astro + Starlight |
| [Orange-Copy-Paste-Releases](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-Releases) | Public release feed the in-app updater reads |

---

## Where facts live

This site describes the product for users. Payloads, key derivation, and other contract
details belong to the backend and client architecture docs in the code repos; pages here
link to behavior, they do not restate the contract. The Developers > Reference section
renders those docs directly (see [Developer docs mirror](#developer-docs-mirror)).

---

## License

Licensed under the GNU Affero General Public License v3.0 — see [LICENSE](LICENSE).

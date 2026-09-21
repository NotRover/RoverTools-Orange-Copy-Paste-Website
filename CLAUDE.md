# CLAUDE.md - Orange Copy Paste Website

Public site for the Orange Copy Paste desktop app: a marketing landing page plus the
end-user documentation. Astro + Starlight, package manager **bun**. This is its own repo
(`RoverTools-Orange-Copy-Paste-Website`), mounted as a submodule of the RoverTools workspace; the
workspace root `CLAUDE.md` applies here too (copy rules, git rules, doc ownership).

**Owns:** end-user how-to and the marketing story.
**Not here:** the wire contract (backend `docs/architecture.md`), client internals (app
`docs/architecture.md`), permissions (`docs/permissions.md`). Link to those homes, never
restate them.

## Layout

- `src/pages/index.astro` - the landing page, composed from `src/components/landing/*.astro`.
  It is a plain Astro page, not a Starlight page, and commits to the app's dark theme.
- `src/components/landing/` - one component per section (nav, hero, how-it-works, features,
  showcase, sync, spaces, security, download, faq/footer). Scoped styles live in each.
- `src/styles/landing.css` - global tokens and the `oc-*` app-mock parts (see below).
- `src/styles/starlight-theme.css` - Starlight color/typography overrides for the docs.
- `src/content/docs/docs/*.md` - the documentation pages, served under `/docs/...`.
  Sidebar order lives in `astro.config.mjs`.
- `src/assets/app-icon.png`, `public/app-icon.png`, `public/favicon-32.png` - copies of the
  app's real icon (`src-tauri/icons/` in the app repo). Re-copy if the app icon changes.

## Design rules

- **The site wears the app's skin.** Every design token in `landing.css` (`--bg #0e0e0e`,
  `--accent #ff3e1c`, radii 12/10/7, entry-kind hues, chip metrics) is copied from the
  app's own stylesheets (`App.css`, `Sidebar.css`, `EntryCard.css`). If the app's theme
  changes, change these tokens to match - never invent new brand colors here.
- **UI mockups are `oc-*` parts** in `landing.css`: window shell, titlebar (30px), sidebar
  (58px, 38px nav buttons), entry cards (body 10/12/8px, 12px mono text, 18px chips at
  7px radius), status pills. Reuse these for any new mockup so all mockups stay
  pixel-consistent with the app. Wide window shots render at the app's native 920px.
- **No real app screenshots with real data.** A capture of a running instance embeds the
  user's actual clipboard content; mockups carry placeholder content instead.
- Fonts: Sora (display), Inter (body), Fira Code (mono - used for anything the product
  literally shows). Loaded from Google Fonts in both stylesheets.
- Animations respect `prefers-reduced-motion`, and `.reveal` hiding is gated behind the
  `html.js` class so the page works without JavaScript.
- All user-facing copy follows the workspace No-AI-Slop rules (ASCII punctuation only,
  no em dashes, no stock AI words).

## Content rules

- Docs state numbers and behavior that live in the app (100 entries, 10 pins, 4 MB
  clipboard entry cap, 5 MB synced file cap, 50 MB quota, hotkeys). **Verify against the
  app/backend code when editing** - the
  app is the source of truth, and stale numbers here mislead users.
- Download links point at the App repo's GitHub Releases:
  `https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App/releases`.

## Developer docs mirror

The Developers > Reference pages are **generated**, not written here. `scripts/pull-dev-docs.mjs`
reads the reference docs from their homes in the code repos and writes styled Starlight pages
to `src/content/docs/docs/developers/reference/`, which is **git-ignored**. It runs
automatically as the first step of `dev` and `build` (see `package.json`), so the copies are a
build artifact - never committed, nothing to drift.

- **Source of truth stays in the code repos.** To change what a Reference page says, edit its
  home (backend/client/workspace repo) and rebuild. Never edit or commit a file under
  `reference/` - it is overwritten on every build.
- **Where it reads from:** the local sibling repo if checked out (your machine), else the raw
  file from GitHub `main`. So a Cloudflare build (siblings absent) needs the source repos
  public, or a read token in the build env.
- **Mermaid is global.** `Mermaid.astro` and the generated mirrors both emit
  `.mermaid-figure` markup; `public/mermaid-plates.js` (CDN mermaid, fixed-dark AMOLED theme)
  renders them and `src/styles/mermaid.css` styles the plates. There is no npm `mermaid` dep.
- **File trees use Starlight's `<FileTree>`.** A source doc marks a tree with a ` ```filetree `
  fence (still a plain code block on GitHub); the generator converts it to a `<FileTree>` and
  emits that page as `.mdx` instead of `.md`. MDX would read `{` as JS and curl the mermaid
  quotes, so on an MDX page the diagram source rides in a base64 `data-src` the renderer
  decodes. All of this is automatic in `pull-dev-docs.mjs` - a source doc only needs the fence.
- DEPLOY.md is deliberately **not** mirrored (host access + recovery detail); the public
  self-hosting page is hand-written and sanitized.

## Commands

- Install: `bun install`
- Dev server: `bun run dev` (regenerates the reference mirrors first)
- Build (also the verification step): `bun run build`
- Preview built output: `bun run preview`
- Regenerate mirrors only: `bun run prep:docs`

## Verification

`bun run build` must pass for any change. For visual changes, eyeball the affected pages
(`/`, `/docs/...`) in a browser or with a headless screenshot before calling it done.

## Git

Work on a dedicated branch in this repo; PRs against `main` as drafts. Keep commits scoped
to this repo - never bundle a website change with a parent-repo commit except a deliberate
submodule-pointer bump.

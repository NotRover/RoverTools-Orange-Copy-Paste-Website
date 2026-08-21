# CLAUDE.md - Orange Copy Paste Website

Public site for the Orange Copy Paste desktop app: a marketing landing page plus the
end-user documentation. Astro + Starlight, package manager **bun**. This is its own repo
(`RoverTools-OrangeCP-Website`), mounted as a submodule of the RoverTools workspace; the
workspace root `CLAUDE.md` applies here too (copy rules, git rules, doc ownership).

**Owns:** end-user how-to and the marketing story.
**Not here:** the wire contract (backend `docs/ARCHITECTURE.md`), client internals (app
`docs/ARCHITECTURE.md`), permissions (`docs/PERMISSIONS.md`). Link to those homes, never
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

- Docs state numbers and behavior that live in the app (100 entries, 10 pins, 5 MB entry
  cap, 50 MB quota, hotkeys). **Verify against the app/backend code when editing** - the
  app is the source of truth, and stale numbers here mislead users.
- Download links point at the public releases repo:
  `https://github.com/Spectrewolf8/RoverTools-Releases`.

## Commands

- Install: `bun install`
- Dev server: `bun run dev`
- Build (also the verification step): `bun run build`
- Preview built output: `bun run preview`

## Verification

`bun run build` must pass for any change. For visual changes, eyeball the affected pages
(`/`, `/docs/...`) in a browser or with a headless screenshot before calling it done.

## Git

Work on a dedicated branch in this repo; PRs against `main` as drafts. Keep commits scoped
to this repo - never bundle a website change with a parent-repo commit except a deliberate
submodule-pointer bump.

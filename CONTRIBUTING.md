# Contributing to the RoverTools website

This repository is the public website for RoverTools, the cross-device Smart
Clipboard app: the marketing landing page and the user documentation, built with
[Astro](https://astro.build) and [Starlight](https://starlight.astro.build) and
managed with [Bun](https://bun.sh).

This is where the *user-facing* docs live (how to install and use the app). Deep
engineering reference lives in the client and backend repositories' `docs/`
folders, and this site links out to them.

## Ways to contribute

- Fix a typo, a broken link, or an out-of-date screenshot.
- Improve or expand a documentation page.
- Report a problem with the site by opening an issue.

## Project layout

| Path | What it is |
|------|------------|
| `src/content/docs/` | Documentation pages (Markdown / MDX) |
| `src/components/landing/` | Landing-page sections |
| `src/pages/` | Standalone pages (for example the password-reset page) |
| `astro.config.mjs` | Astro + Starlight configuration, nav, and site URL |

## Getting set up

Prerequisites: [Bun](https://bun.sh).

```bash
git clone https://github.com/NotRover/RoverTools-OrangeCP-Website.git
cd RoverTools-OrangeCP-Website
bun install
```

Run the site locally:

```bash
bun run dev
```

## Before you open a pull request

Build the site — this typechecks the content and generates the static output, so
it catches broken links and content errors:

```bash
bun run build
```

Please also:

- Branch off `main`; keep each pull request scoped to one change.
- Open pull requests as **drafts** until they are ready for review.
- Write documentation in plain, concrete language with ASCII punctuation.

## License

By contributing, you agree that your contributions are licensed under the
GNU Affero General Public License v3.0, the same license as the project (see
[LICENSE](LICENSE)).

# Contributing to the Orange Copy Paste website

This file is for people changing the website: the landing page, the user guide
and the hand-written developer pages. What the site is and how to run it is in
the [README](README.md). The Developers > Reference pages are generated from the
code repositories' docs, so change those at their source instead.

## Ways to contribute

- Fix a typo, a broken link, or a page that no longer matches the app.
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
git clone https://github.com/NotRover/RoverTools-Orange-Copy-Paste-Website.git
cd RoverTools-Orange-Copy-Paste-Website
bun install
```

Run the site locally:

```bash
bun run dev
```

## Before you open a pull request

Build the site. It type-checks the content and generates the static output, and
it must pass. It does not check links, so click through any you changed:

```bash
bun run build
```

Please also:

- Branch off `main`; keep each pull request scoped to one change.
- Open pull requests as **drafts** until they are ready for review.
- Follow the workspace
  [writing guide](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App/blob/main/docs/writing-docs.md)
  and run its checklist. Check every number, label and shortcut against the app's code.
- Mockups use invented but plausible content. Never add a screenshot of a real
  clipboard.

## License

By contributing, you agree that your contributions are licensed under the
GNU Affero General Public License v3.0, the same license as the project (see
[LICENSE](LICENSE)).

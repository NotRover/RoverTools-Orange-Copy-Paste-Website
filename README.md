# Orange Copy Paste - Website

The public site for [Orange Copy Paste](https://github.com/Spectrewolf8/RoverTools-Releases),
the smart clipboard for Windows and Linux: a marketing landing page and the end-user
documentation. Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build),
managed with [bun](https://bun.sh).

## Run it

```
bun install
bun run dev
```

- `/` - landing page
- `/docs/` - documentation

## Build

```
bun run build
```

Static output lands in `dist/`.

## Deploy (Cloudflare Pages)

The site is fully static - no adapter, no Functions, no server runtime.

| Pages setting | Value |
| --- | --- |
| Project name | `orange-copy-paste-app`, which is also the `orange-copy-paste-app.pages.dev` host |
| Build command | `bun run build` |
| Build output directory | `dist` |
| Root directory | repo root |
| Production branch | `main` |

`bun.lock` is committed, so Pages installs with bun on its own. `.node-version` pins
the build image to Node 22. `wrangler.toml` carries the project name and the same
output directory, for the Git integration and for `wrangler pages deploy` alike.

One build environment variable, once a custom domain is attached:

- `SITE_URL` - the canonical origin, e.g. `https://rovertools.app`, used for canonical
  links and the sitemap. Without it the build falls back to `CF_PAGES_URL`, which is
  the per-deploy host and correct for previews, and to the production `pages.dev` host
  for a local build.

`public/_headers` sets the security headers and caches `/_astro/*` immutably. Pages
serves `404.html`, built from `src/pages/404.astro`, for unmatched paths.

## Where facts live

This site describes the product for users. Payloads, key derivation and other contract
details belong to the backend and client architecture docs in the RoverTools workspace;
pages here link to behavior, they do not restate the contract.

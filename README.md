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
| Framework preset | Astro |
| Build command | `bun run build` |
| Build output directory | `dist` |
| Root directory | repo root |

`bun.lock` is committed, so Pages installs with bun on its own. `.node-version` pins
the build image to Node 22. `wrangler.toml` carries the same output directory for
`wrangler pages deploy` and for the Pages Git integration.

Set one environment variable on the production branch once a custom domain is
attached:

- `SITE_URL` - the canonical origin, e.g. `https://rovertools.app`. Without it the
  build falls back to `CF_PAGES_URL`, which is correct for preview deploys and gives
  the `*.pages.dev` host in production.

`public/_headers` sets the security headers and caches `/_astro/*` immutably.
`src/pages/404.astro` renders the not-found page Pages serves for unmatched paths.

## Where facts live

This site describes the product for users. Payloads, key derivation and other contract
details belong to the backend and client architecture docs in the RoverTools workspace;
pages here link to behavior, they do not restate the contract.

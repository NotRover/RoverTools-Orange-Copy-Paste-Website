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

## Deploy (Cloudflare Workers)

The site is fully static - no adapter, no server code. The Worker is a static asset
binding over `dist/`, configured in `wrangler.toml`.

| Workers Builds setting | Value |
| --- | --- |
| Project name | `rovertools-orangecp-website` (must match `name` in `wrangler.toml`) |
| Build command | `bun run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | repo root |

`bun.lock` is committed, so the build installs with bun on its own. `.node-version`
pins the build image to Node 22.

Set one build environment variable on the project:

- `SITE_URL` - the canonical origin, e.g. `https://rovertools.app`, used for canonical
  links and the sitemap. Workers Builds does not expose the deployment's own URL to the
  build, so without this the config falls back to a placeholder host.

`public/_headers` sets the security headers and caches `/_astro/*` immutably - Workers
static assets reads it from the output directory the same way Pages did.
`not_found_handling = "404-page"` sends unmatched paths to `src/pages/404.astro`.

## Where facts live

This site describes the product for users. Payloads, key derivation and other contract
details belong to the backend and client architecture docs in the RoverTools workspace;
pages here link to behavior, they do not restate the contract.

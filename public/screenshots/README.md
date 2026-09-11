# Docs screenshots

Most docs illustrations now embed the landing-page UI mockups directly (see
`src/components/docs/DocMock.astro` and the `.mdx` pages under
`src/content/docs/docs/`), so there is no real capture to keep in step and no
risk of shipping real clipboard data.

Only three images are still PNG placeholders, because they have no mockup yet:

- `tray-menu.png` - the OS tray icon and its right-click menu (native chrome).
- `recovery-code.png` - the one-time recovery-code screen.
- `sync-modes.png` - the Realtime / Passive / Manual selector.

If you replace one of these with a real capture, keep it at a consistent scale
and crop to the relevant region. Better still, build a mockup for it and embed
it with `DocMock` like the other pages, then delete the PNG.

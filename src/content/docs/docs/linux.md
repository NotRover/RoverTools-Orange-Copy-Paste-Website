---
title: Linux notes
description: What to install, what works where, and the Wayland setup step.
---

Linux builds ship as `.deb`, `.rpm` and AppImage. **X11 is the smoothest experience.** Wayland works, with the setup step below for hotkeys.

## Runtime packages

The app leans on standard tools for key injection and desktop integration:

| Package | Used for |
|---|---|
| `xdotool` | Key injection and cursor position on X11 and XWayland. |
| `wtype` | Key injection on wlroots Wayland compositors (Sway, Hyprland, River). |
| `ydotool` + `ydotoold` | Fallback for GNOME and KDE Wayland. Needs access to `/dev/uinput`. |
| `x11-utils` (`xdpyinfo`) | Monitor work area for popup placement. |
| `xdg-utils` | The *Open data folder* button. |
| GNOME Keyring or KWallet | Storage for sync keys. |
| A tray host | The tray icon. |

The `.deb` declares `xdotool | wtype` as a dependency and recommends the rest.

## Wayland and global hotkeys

Built-in global hotkeys rely on X11 grabs, so they do not fire on native Wayland. The fix is one keybinding in your compositor that runs the app with a `--trigger` flag:

```bash
orange-copy-paste --trigger paste
```

```bash
orange-copy-paste --trigger copy
```

Use the app's own binary name in place of `orange-copy-paste`: it is whatever the `Exec=` line points at in the installed `.desktop` file (for a `.deb` or `.rpm`), or the AppImage's own filename. Bind those to whatever keys you like. The running app picks the trigger up and shows the same popup the hotkey would. Cursor-anchored placement, always-on-top and transparency vary by compositor; where they are unavailable, popups center on the active monitor instead.

## Known gaps on Linux

These degrade gracefully rather than break, but they are real:

- Copying file lists and rich HTML **back to** the clipboard is Windows-only today; those entries error on Linux.
- File-drop and HTML sources are not captured into history on Linux (text and images are).
- Image entries are labelled with a raw timestamp instead of a localized date.

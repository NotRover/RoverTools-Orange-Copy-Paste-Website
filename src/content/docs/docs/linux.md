---
title: Linux notes
description: What to install, what works where, and the Wayland setup step.
---

What to install for Linux, the one setup step Wayland needs, and what does not work on Linux yet. Builds ship as `.deb` and AppImage. **X11 is the smoothest experience.** Wayland works once you set up the hotkeys.

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

The `.deb` requires `xdotool` or `wtype`, and recommends `x11-utils` and `ydotool`. The AppImage brings none of them. Install the other packages in the table yourself if your desktop does not already have them.

Install the `.deb` with apt, so it pulls in what it requires:

```bash
sudo apt install ./Orange.Copy.Paste_*.deb
```

On GNOME or KDE with Wayland, `ydotool` only works while its service runs:

```bash
sudo apt install -y ydotool
sudo systemctl enable --now ydotool
```

Without `x11-utils`, the app cannot read your monitor's work area and assumes a 1920x1080 screen when placing popups.

## How to set up hotkeys on Wayland

The built-in hotkeys rely on X11, so on native Wayland they do not fire. Instead, bind two keys in your compositor that run the app with a `--trigger` flag. The running app picks the trigger up and opens the same popup the hotkey would.

1. Find the app's command. For the `.deb`, it is what the `Exec=` line points at in the installed `.desktop` file. For an AppImage, it is the AppImage's own path. The examples below use `orange-copy-paste`.
2. Bind one key to `orange-copy-paste --trigger paste` (the quick-paste popup) and one to `orange-copy-paste --trigger copy` (capture the selection). Use any keys you like.
   - **Sway:** in your config, `bindsym Ctrl+Shift+v exec orange-copy-paste --trigger paste`, and the same with `c` and `copy`.
   - **Hyprland:** `bind = CTRL SHIFT, V, exec, orange-copy-paste --trigger paste`, and the same with `C` and `copy`.
   - **GNOME:** Settings, then Keyboard, then **View and Customize Shortcuts**, then **Custom Shortcuts**. Add one shortcut per command.
   - **KDE Plasma:** System Settings, then Shortcuts, then **Add New**, then **Command or Script**. Add one per command.
3. Press your paste key with the app running. The quick-paste popup should open.

Where the compositor does not allow cursor placement, always-on-top or transparency, popups open centered on the active monitor instead.

## Known gaps on Linux

These degrade gracefully rather than break, but they are real:

- Copying file lists and rich HTML **back to** the clipboard is Windows-only today; those entries error on Linux.
- File-drop and HTML sources are not captured into history on Linux (text and images are).
- Image entries are labelled with a raw timestamp instead of a localized date.

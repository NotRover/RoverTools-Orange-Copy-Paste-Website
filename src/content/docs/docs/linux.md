---
title: Linux notes
description: What to install, what works where, and the Wayland setup step.
---

What to install for Linux, the one setup step Wayland needs, and what does not work on Linux yet. The Linux app is in beta: it came later than the Windows app, and the [Known gaps](#known-gaps-on-linux) below are real. The app ships as a `.deb` package. **X11 has the best support.** Wayland works once you set up the hotkeys.

## Runtime packages

The app leans on standard tools for key injection and desktop integration:

| Package | Used for |
|---|---|
| `xdotool` | Key injection and cursor position on X11 and XWayland. |
| `wtype` | Key injection on wlroots Wayland compositors (Sway, Hyprland, River). |
| `ydotool` + `ydotoold` | Fallback for GNOME and KDE Wayland. Needs access to `/dev/uinput`. |
| `xdg-utils` | The *Open data folder* and *Open log folder* buttons. |
| GNOME Keyring or KWallet | Storage for sync keys. |
| A tray host | The tray icon. |

The `.deb` requires `xdotool` or `wtype`, and recommends `ydotool` and `pkexec`. Install the other packages in the table yourself if your desktop does not already have them.

Install the `.deb` with apt, so it pulls in what it requires:

```bash
sudo apt install ./RoverTools_*_amd64.deb
```

Moving from the AppImage? It no longer gets updates. Install the `.deb` once as above and delete the AppImage. Your history, notes and settings stay, because both read the same data folder.

On GNOME or KDE with Wayland, `ydotool` only works while its service runs:

```bash
sudo apt install -y ydotool
sudo systemctl enable --now ydotool
```

## How to set up hotkeys on Wayland

The built-in hotkeys rely on X11, so on a Wayland desktop they only fire while another X11 app has the focus, and on native Wayland not at all. Instead, bind two keys in your compositor that run the app with a `--trigger` flag. The running app picks the trigger up and opens the same popup the hotkey would.

1. Find the app's command. It is what the `Exec=` line points at in the installed `.desktop` file. The examples below use `orange-copy-paste`.
2. Bind one key to `orange-copy-paste --trigger paste` (the quick-paste popup) and one to `orange-copy-paste --trigger copy` (capture the selection). Use any keys you like.
   - **Sway:** in your config, `bindsym Ctrl+Shift+v exec orange-copy-paste --trigger paste`, and the same with `c` and `copy`.
   - **Hyprland:** `bind = CTRL SHIFT, V, exec, orange-copy-paste --trigger paste`, and the same with `C` and `copy`.
   - **GNOME:** Settings, then Keyboard, then **View and Customize Shortcuts**, then **Custom Shortcuts**. Add one shortcut per command.
   - **KDE Plasma:** System Settings, then Shortcuts, then **Add New**, then **Command or Script**. Add one per command.
3. Press your paste key with the app running. The quick-paste popup should open.

## What Linux leaves out

The Linux app has no startup notice and no copy and paste popup in the corner. Those are small floating windows, and not every Linux desktop lets an app place them. Their settings are hidden on Linux, along with **Install updates automatically**, which runs from the startup notice:

- **Updates** are still checked and offered in a banner in the app. Installing one asks for your password, because it replaces the installed package, then the app reopens.
- **A clip too large for history**, and the few seconds the app waits for sync when you quit, show as normal desktop notifications.

On Wayland, popups open centered on the active monitor, because Wayland does not tell apps where the cursor is.

## Known gaps on Linux

These degrade gracefully rather than break, but they are real:

- On Wayland the app reads the clipboard on a timer rather than being told about changes, so a copy that is replaced within about a fifth of a second may be missed. On X11 it is told.
- Rich HTML is captured only when the source app puts `text/html` on the clipboard alongside the text; most browsers and office apps do, some terminals and editors do not.

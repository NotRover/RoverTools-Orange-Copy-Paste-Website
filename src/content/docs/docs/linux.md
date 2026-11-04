---
title: Linux notes
description: What to install, what works where, and the Wayland setup step.
---

What to install for Linux, the one setup step Wayland needs, and what does not work on Linux yet. The Linux app is in beta: it came later than the Windows app, and the [Known gaps](#known-gaps-on-linux) below are real. Builds ship as `.deb` and AppImage. **X11 is the smoothest experience**, so on a Wayland desktop the app runs through XWayland by default (see [Running natively on Wayland](#running-natively-on-wayland)). Wayland works once you set up the hotkeys.

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

The `.deb` requires `xdotool` or `wtype`, and recommends `ydotool`. The AppImage brings none of them. Install the other packages in the table yourself if your desktop does not already have them.

Install the `.deb` with apt, so it pulls in what it requires:

```bash
sudo apt install ./Orange.Copy.Paste_*.deb
```

On GNOME or KDE with Wayland, `ydotool` only works while its service runs:

```bash
sudo apt install -y ydotool
sudo systemctl enable --now ydotool
```

## How to set up hotkeys on Wayland

The built-in hotkeys rely on X11, so on a Wayland desktop they only fire while another X11 app has the focus, and on native Wayland not at all. Instead, bind two keys in your compositor that run the app with a `--trigger` flag. The running app picks the trigger up and opens the same popup the hotkey would.

1. Find the app's command. For the `.deb`, it is what the `Exec=` line points at in the installed `.desktop` file. For an AppImage, it is the AppImage's own path. The examples below use `orange-copy-paste`.
2. Bind one key to `orange-copy-paste --trigger paste` (the quick-paste popup) and one to `orange-copy-paste --trigger copy` (capture the selection). Use any keys you like.
   - **Sway:** in your config, `bindsym Ctrl+Shift+v exec orange-copy-paste --trigger paste`, and the same with `c` and `copy`.
   - **Hyprland:** `bind = CTRL SHIFT, V, exec, orange-copy-paste --trigger paste`, and the same with `C` and `copy`.
   - **GNOME:** Settings, then Keyboard, then **View and Customize Shortcuts**, then **Custom Shortcuts**. Add one shortcut per command.
   - **KDE Plasma:** System Settings, then Shortcuts, then **Add New**, then **Command or Script**. Add one per command.
3. Press your paste key with the app running. The quick-paste popup should open.

## Running natively on Wayland

On a Wayland desktop the app asks for X11 first, which means XWayland, the X11 layer every Wayland desktop ships. That is deliberate: a native Wayland app cannot place its own windows or keep one above the others, so the copy and paste notification and the startup splash would open in the middle of the screen, behind the main window, and the app would only hear about clipboard changes while it has the focus. Through XWayland all of that works as on X11.

The one known cost is fractional display scaling, such as 125% or 150%, where some desktops render XWayland apps slightly blurry. If that bothers you, switch the app back to native Wayland by setting one variable in the environment it starts with:

```bash
GDK_BACKEND=wayland orange-copy-paste
```

To make it permanent, edit the installed `.desktop` file so its `Exec=` line starts with `env GDK_BACKEND=wayland `, or put the same prefix in front of the AppImage's path in your autostart entry. The app does not do this for you.

Natively on Wayland, popups open centered on the active monitor, the notification and the splash appear where the compositor places new windows rather than in the bottom-right corner, and the clipboard gap below applies.

## Known gaps on Linux

These degrade gracefully rather than break, but they are real:

- Natively on Wayland the app reads the clipboard on a timer rather than being told about changes, so a copy that is replaced within about a fifth of a second may be missed. On X11, and through XWayland, it is told.
- Rich HTML is captured only when the source app puts `text/html` on the clipboard alongside the text; most browsers and office apps do, some terminals and editors do not.

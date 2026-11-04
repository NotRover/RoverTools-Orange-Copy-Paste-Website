---
title: Mac notes
description: Which download to pick, the two prompts on first launch, and what differs from Windows.
---

Which download to pick, the two things macOS asks on first launch, and what differs from the Windows app. The Mac app is in beta: it came later than the Windows app, so expect a rough edge or two and [report](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App/issues) what you hit. It runs on macOS 10.15 and later, on Apple silicon and Intel.

## Which download

Each release has two Mac files. Pick the one for your chip:

| File | For |
|---|---|
| `RoverTools_<version>_aarch64.dmg` | Apple silicon (M1 and later) |
| `RoverTools_<version>_x64.dmg` | Intel |

Not sure which you have? Click the Apple menu, then **About This Mac**. A line that says **Chip** is Apple silicon; one that says **Processor** is Intel.

Open the `.dmg` and drag **Orange Copy Paste** into **Applications**. Updates after that happen inside the app and know which chip they are for.

## First launch

**"Orange Copy Paste is damaged and can't be opened" or "cannot be checked for malicious software".** The build is not yet signed with an Apple developer certificate, so macOS refuses it the first time. Remove the quarantine flag once, then open it as usual:

```bash
xattr -d com.apple.quarantine "/Applications/Orange Copy Paste.app"
```

Updates from inside the app never trigger this. It only applies to a file you downloaded in a browser.

**"Orange Copy Paste would like to control this computer using accessibility features."** Allow it. Pasting from the quick-paste popup works by pressing Cmd+V for you in the app you came from, and macOS only lets apps on the Accessibility list do that. If you dismissed the prompt, turn it on under **System Settings**, then **Privacy & Security**, then **Accessibility**. Until it is on, the popup still copies the item to your clipboard; you press Cmd+V yourself.

## What differs from Windows

- **Cmd instead of Ctrl.** The global hotkeys are <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> for quick paste and <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd> for capture, and every other shortcut swaps Ctrl for Cmd and Alt for Option. The [Shortcuts reference](/docs/shortcuts/) lists them.
- **No Dock icon.** The app lives in the menu bar, like it lives in the system tray on Windows. Click the orange icon to open the window. It is not in the Cmd+Tab switcher.
- **The window hides when a popup closes with nothing else open.** That is how focus goes back to the app you were in, so the paste lands there.
- **Run on startup** uses a Login Item under your account. Turn it on in Settings as on Windows.

Everything else, from history and notes to sync and spaces, works the same way.

---
title: Quick paste and capture
description: The two popups that make the clipboard fast - paste by number, capture with a receipt.
---

## The paste popup

Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> anywhere. A small popup opens at your cursor with two tabs:

- **Recent:** your latest 10 entries.
- **Pinned:** up to 10 pinned entries.

![The quick-paste popup open at the cursor, with the Recent and Pinned tabs and numbered slots.](/screenshots/quick-paste-popup.png)

Each row has a slot number. Press <kbd>1</kbd> through <kbd>9</kbd> (then <kbd>0</kbd>) and that entry is written to the clipboard and pasted into the app you came from. You can also arrow through the list and press <kbd>Enter</kbd>, or click a row.

The number of slots shown is configurable from 3 to 10 (default 3) in [Settings](/docs/settings/). If an entry points at files that no longer exist on disk, the app tells you instead of pasting a broken path.

## The capture popup

Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd> with something selected in any app. The selection is captured to history and a small receipt appears at your cursor showing what was grabbed: the type, a preview, and buttons to **Pin**, add to **Groups**, **Share**, or **Delete** it right there.

![The capture popup showing a preview of the grabbed item with Pin, Groups, Share, and Delete buttons.](/screenshots/capture-receipt.png) It dismisses on <kbd>Esc</kbd>, on losing focus, or with the close button.

Plain <kbd>Ctrl</kbd>+<kbd>C</kbd> still captures to history too, just without the receipt.

## Behavior details

- Both popups are toggles: the same hotkey closes them.
- Popups stay on top, skip the taskbar, and are clamped to your monitor's work area, so they never open half off-screen.
- A brief *Copied* / *Pasted* toast appears at the bottom right if you have the in-app popup notifications enabled.

Full key list: [Shortcuts reference](/docs/shortcuts/).

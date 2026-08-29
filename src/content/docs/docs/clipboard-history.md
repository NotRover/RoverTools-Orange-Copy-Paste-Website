---
title: Clipboard history
description: Capture, pin, save, group, search and filter everything you copy.
---

## What gets captured

A background watcher checks the clipboard a few times a second and records every new copy: plain text, links, rich HTML (with a plain-text fallback kept alongside), images, files and folders. Copies made by the app itself are never re-captured, and a copy identical to the newest entry is skipped, so the history stays duplicate-free.

Images are saved to disk at full quality the moment they arrive and previewed from there, which keeps the app light even with large screenshots. Copied videos play directly on the card with play, seek and mute controls. Multi-file copies show a thumbnail strip with a +N chip that expands to the full list.

The entry currently held by the operating system clipboard is marked with an accent border and an *In clipboard* chip.

## Limits

- History rolls at **100 entries**. Pinned and saved entries do not count against the trim.
- Up to **10 entries can be pinned**. The 11th pin shows a toast instead.

## Pin vs Save

These are two different promises:

- **Pin** puts an entry in the quick-paste popup's Pinned tab. Maximum 10.
- **Save** makes an entry survive app restarts, independent of pinning.

*Clear all* keeps everything pinned or saved. If you want every capture kept automatically, turn on *Auto-save copied entries* in [Settings](/docs/settings/).

## Groups

Groups are colored tags you define. Create, rename, recolor and delete them from the Group Manager, or assign them from an entry's right-click menu. A group keeps the same color everywhere (you can override it with the color swatches), and deleting a group gives you a 5 second undo toast.

`Pinned` and `Saved` are system groups; those names are reserved.

## Search and filters

Search matches entry content and group names. Filters stack on top:

- **Quick:** pinned, saved, and, once you are signed in, mine or from others.
- **Type:** text, url, html, image, video, document, file, folder.
- **Cloud:** in cloud, or local only.
- **Sharing:** shared, not shared, or per space.
- **Groups** and **date** (Any time, Today, 7 days, or a custom range).

Every filter option shows the number of items it would leave you *before* you apply it. Your last 8 searches are remembered.

## Bulk actions

Select multiple entries (with range select) to pin, save, assign groups, share with a space, upload to or remove from your account, remove from a space, or delete, all in one action. <kbd>Esc</kbd> exits selection mode.

## Sorting and layout

Sort by Newest, Oldest, A to Z, Z to A, or Type. View as tiles or a list. Entries group under collapsible day headers (Today, Yesterday, then dates), and long histories render progressively so scrolling stays smooth.

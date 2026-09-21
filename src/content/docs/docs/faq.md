---
title: FAQ
description: Short answers to the questions that come up.
---

## Do I need an account?

No. The app is fully functional offline and account-free. An account only exists to sync and share, and you can add one later without losing anything.

## Is it free?

Yes. Cloud accounts include 50 MB of encrypted storage for images and files; text and notes sync does not count against it.

## Can the server, or anyone at RoverTools, read my clips?

No. Content is encrypted on your device with keys the server never holds, and your password never leaves your machine. See the [security model](/docs/security/) for exactly what the server does and does not see.

## What if I forget my password?

Use the recovery code you were shown at setup. It restores access and keeps your synced data. If you have lost the password, the code, and every signed-in device, the encrypted data is unrecoverable by anyone. That is a feature with a sharp edge; store the code well.

## Why did my history disappear after a restart?

By default, unpinned history is memory-only. Turn on *Keep history across app restarts* in Settings, or save the entries that matter. Pinned and saved entries always survive, including *Clear all*.

## Why is there a 5 MB limit on synced files?

That is the per-entry cap for files riding through sync. Bigger copies still work locally; they just stay on the machine, and the app tells you when an entry was skipped rather than dropping it silently.

## Does someone I share with see my whole clipboard?

No. Sharing is per item, into a space you both belong to. Auto-share filters exist but are off by default, scoped to the types and groups you pick, and never apply retroactively.

## macOS?

Coming soon. A Mac build is on the way, for both Apple silicon and Intel. Today, Windows is the primary platform and Linux is supported with [notes](/docs/linux/).

## Where do I report a bug or ask for a feature?

In the [App repository's issues](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App/issues). The release builds live there too.

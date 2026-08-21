---
title: Updates and releases
description: How the in-app updater works, and where releases live.
---

## The updater

The app checks for updates shortly after launch and periodically while it runs, since it usually lives in the tray for weeks. A check is one small request that downloads nothing.

From there, everything is user-driven:

1. **Download** happens only when you ask, with progress shown.
2. **Install** sits behind a second confirmation, because it restarts the app. A background download will never take the window from you mid-paste.
3. Not interested? **Skip a version** and the banner stops; Settings still offers it if you change your mind.

Every bundle is verified against a signing key baked into the app before it installs. A bundle without a matching signature is refused, no matter where it came from.

## Channels

- **Stable** (default): you get releases when they are ready.
- **Beta:** flip *Get beta versions* in Settings to receive new features early, alongside every normal release. Betas are tested less. Turning the switch off stops future betas but cannot downgrade you.

## Release notes

Each release ships human-written notes sorted into **New**, **Improved** and **Fixed**. They show in the update banner, in Settings, and on the [releases page](https://github.com/Spectrewolf8/RoverTools-Releases/releases), which is also where all installers are published.

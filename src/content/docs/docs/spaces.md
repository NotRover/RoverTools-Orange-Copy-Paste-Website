---
title: Spaces and sharing
description: Live shared clipboards between people, end-to-end encrypted.
---

A **Space** is a live feed shared between any number of people. Share a clipboard entry or a note into it and every member sees it in seconds. You can be in several spaces at once, and one item can be in several spaces at once. Everything stays end-to-end encrypted; the server relays ciphertext it cannot read.

![A space's shared feed, with the space list on one side and shared cards in the feed.](/screenshots/spaces-feed.png)

## Creating and joining

- **Create** a space with a name. You become its owner.
- **Join** with an invite code or link. Links work in a browser, so you can send one to someone who does not have the app yet.
- **Invite** members by code, link, or email, and revoke invites you sent.
- **Request to join:** anyone with the code or link can knock, and any member may let them in.

New members can read the space's existing history: everyone in a space can see what was shared before they joined.

## Sharing into a space

- **By hand:** share any entry or selection from the clipboard or notes screen. This is the default and the only path until you opt into more.
- **Send filters (off by default):** per space, auto-share future items matching your choice of content (clipboard, notes, or both), clipboard types, and groups. Changing a filter affects future items only; your history is never shared retroactively.
- Only the author of a shared item can edit it. Either the author or the space owner can remove it, which takes it out of the feed for everyone; whoever removes it gets a brief undo window.

## Receiving

- The space feed uses the same cards, search and sorting as your clipboard screen.
- **Auto-copy incoming**, per space and per device: anything shared into the space lands directly on your clipboard as it arrives. Only live arrivals can trigger it, never backfill, so it cannot flood you.
- **Comments:** discuss any shared item in a popover thread, with mentions.
- **Remove from your devices:** delete an item someone shared with you and it goes from all your own devices at once, while it stays in the space for everyone else.

## Members and keys

![The members panel listing who is in the space, who is online, and the owner.](/screenshots/spaces-members.png)

The members list shows who is in the space, who is online, and who owns it. Each space has its own key, individually wrapped for every member, so the server never holds a usable key. Any member who has the key can hand it to a newcomer, so you are not stuck waiting for the owner to come online; in the usual case the key arrives with the invite.

Removing a member (owner only) mints a fresh key for everyone else. Old keys are kept so old items stay readable.

## Leaving and deleting

Both are armed with a second click before anything happens:

- **Leave:** stops new items reaching you. What you already have stays.
- **Delete** (owner): stops sharing for everyone. Items already on people's devices stay theirs.

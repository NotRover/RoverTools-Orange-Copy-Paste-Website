---
title: Troubleshooting
description: What a message or problem means, and what to do about it.
---

Find the message you saw, or the problem you have, and follow the fix. Messages are quoted as the app shows them. If yours is not here, [open an issue](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App/issues) with the exact text.

## Copying and pasting

**Pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> does nothing.** Check that the app is running: its icon should be in the system tray. On Linux with Wayland, the built-in hotkeys do not work; follow [How to set up hotkeys on Wayland](/docs/linux/#how-to-set-up-hotkeys-on-wayland).

**The paste popup opens, but nothing is pasted (Linux).** The app types the paste with a helper tool, and it is missing. Install `xdotool` on X11, `wtype` on Sway, Hyprland or River, or `ydotool` with `ydotoold` running on GNOME or KDE Wayland. See [Runtime packages](/docs/linux/#runtime-packages).

**Popups open in the middle of the screen instead of at the cursor (Linux).** Wayland does not tell apps where the cursor is, so the app centers them. This is expected.

**`Too large for history`: "Not added to history."** What you copied is over 4 MB. It is still on your system clipboard, so pasting works; it just is not kept in history.

**"You can pin up to 10 items. Unpin one first."** Unpin one, or use **Saved** instead, which has no limit. See [Concepts](/docs/concepts/#your-clipboard).

**File or HTML entries do not copy back (Linux).** Copying file lists and rich HTML back to the clipboard only works on Windows today. See [Known gaps on Linux](/docs/linux/#known-gaps-on-linux).

## Missing history

**"Could not load your clipboard history. Nothing was deleted. Restart the app to try again."** The app could not read your history when it started, even after trying again. Your entries are still on this PC. Restart the app. The history also shows, and the message goes away, as soon as a later load works, for example when you switch back to the app window. If the message comes back after every restart, [open an issue](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App/issues) with the exact text.

**My clipboard history is empty on a new PC, or after a restart.** Older versions cleared unsaved history when the app restarted, and a PC that signed out and back in could stop downloading items it had synced before. Update to the latest version (**Check now** under **Updates** in Settings). Then:

1. If you use cloud sync, start the app signed in. What your account holds comes back on its own, including your spaces' items. In **Manual** mode, press **Refresh** on the **Account & Sync** screen.
2. If anything is still missing, click **Restore** on the **Restore from cloud** line of the **Account & Sync** screen. See [How to restore your history from the cloud](/docs/cloud-sync/#how-to-restore-your-history-from-the-cloud).
3. Check that **Keep history across restarts** is on in [Settings](/docs/settings/#history).

Entries that never reached the cloud and were cleared by an older version cannot be brought back.

**"Nothing to restore." but entries are still missing.** This PC already has everything your account holds. The missing entries never reached the cloud, for example because you were signed out when you copied them or they were over a [sync limit](/docs/cloud-sync/#files-images-and-folders).

**"Could not restore from the cloud. Check your connection and try again."** or **"Cannot reach the server. Check your connection and try again."** The app could not reach the server, or lost it partway. Check your internet connection and click **Restore** again. Anything already restored stays.

**"Sign in on the Account screen first."** or **"Your session expired. Sign in again on the Account screen."** after clicking **Restore**. This PC is not signed in, or its sign-in has expired. Sign in on the **Account & Sync** screen, then click **Restore** again.

**Old or deleted entries came back after updating.** The first start after updating can bring back entries an older version dropped, and items whose removal never reached the server. Delete the ones you do not want. Deleting a synced item removes it from your other devices too.

## Signing in

**"That email and password do not match an account."** Check the email and password. If you forgot the password, see [How to reset a forgotten password](/docs/cloud-sync/#how-to-reset-a-forgotten-password).

**"Confirm your email first. The link is in your inbox."** Open the confirmation email from sign-up, click the link, then sign in on the **Sign in** tab.

**"An account already uses that email. Sign in instead."** Switch to the **Sign in** tab.

**"Incorrect password. It does not match the one this account was encrypted with."** The password was changed on another computer. Use the newest password.

**"Your session expired. Sign in again."** Sign in again on the **Account & Sync** screen. If you see this after opening a password reset link, the link has expired: ask for a new one with **Forgot?**.

**"Too many attempts just now. Wait a minute and try again."** Wait a minute, then try again.

**"Cannot reach the sign-in service."** or **"The sign-in service is having trouble."** Check your internet connection. If it works, wait a few minutes and try again.

**Google sign-in: "Could not start Google sign-in because another app is using the ports it needs."** Google sign-in needs one of the ports 53170 to 53172 on your computer, and other apps are using all three. Close the app using them, or restart your computer, then click **Continue with Google** again.

**Google sign-in: "Google sign-in timed out. Try again."** Nothing came back from the browser within 5 minutes. Click **Continue with Google** again and finish in the browser tab it opens.

**The app says "Reconnecting to your account".** You are still signed in, and the app is waiting for the server. It picks up on its own. To sign in again now instead, click **Sign in with a password instead**.

**The sign-in form came back with no message.** This computer was removed from your account on another device. Sign in again.

**Sign-in or password reset fails with a keyring or keychain error (Linux).** The app stores its keys in GNOME Keyring or KWallet, and neither is running. Install and start one, then try again.

## Password and recovery code

**"This reset link was already used, or it was sent to a different install of the app."** A reset link only works once, and only in the app that asked for it. Click **Forgot?** and **Send reset link** again in this app, then use the new email.

**"This device has never held your encryption key ..."** This computer has not been signed in to your account before, so a new password alone cannot decrypt your synced data. Enter your **Recovery code** and click **Use the recovery code**, or reset from a computer you have signed in on before. The last resort is **Start over with a new key**, which loses everything synced so far.

**"That recovery code does not match this account."** Check the code. Dashes, spaces and upper or lower case do not matter.

**"This account has no recovery code."** Reset from a computer you have signed in on before, or use **Start over with a new key**.

**"The current password is wrong."** Retype your current password. It is needed to change your password or make a new recovery code.

## Sync and storage

**"Not synced: ..."** The item stayed on this computer. The **Account & Sync** screen lists every item that was not synced, with the reason and a **Try again** button. The reasons:

| Reason | What to do |
|---|---|
| "is over the 5 MB limit for synced files" or "images" | Nothing. Items over 5 MB stay on this computer. |
| "is over the 384 KB limit for one synced item" | Nothing. Very long text stays on this computer. |
| "Cloud storage is full" or "Your account is full" | Remove synced images or files to free space, then **Try again**. |
| "You were not signed in when this ... was copied." | Sign in, then choose **Upload to cloud** on the item. |
| "Image upload failed" or "File upload failed" | Check your connection, then **Try again**. |
| "Only the member who wrote this can change it in the space." | Nothing. Only the author can edit an item in a space. |

**"Storage is 90% full"** (or more). Images and files stop syncing when storage is full. Delete synced images you no longer need, or use **Remove from cloud** to keep them on this computer only. See [Files, images and folders](/docs/cloud-sync/#files-images-and-folders).

**"items are waiting to sync"** This computer is set to **Manual**, so new items only upload when you choose. Upload them with **Upload to cloud**, or switch to another mode under **Automatic syncing**. See [Sync modes](/docs/cloud-sync/#sync-modes).

**My settings changed on every device after I signed in on a new PC.** Older versions sent the new PC's settings over your account's, so its defaults reached your other devices. Update the app, then set your theme, layout and other synced settings again on one device. See [Which settings sync](/docs/settings/#which-settings-sync).

**The sync status shows "Offline".** The app cannot reach the server. Changes queue on this computer and upload in order when you are back online.

## Saving on this computer

**"Saving is paused."** or **"Saving has stopped responding."** The app could not save your history. Click **Restart app**.

**"Your disk is refusing to save."** The app cannot write to its data folder. Free up disk space, and check that antivirus software is not blocking the folder.

## Spaces

**"That code did not work. Check it, or ask for a new invite link."** The code is wrong or has expired. Check the code: it is 8 characters. Invite codes last 72 hours, so if it is older, ask a member for a new one.

**"Asked to join ... Somebody in it has to let you in."** This is expected: a code sends a request, and the owner has to approve it, or any member if the owner allows it. See [Creating and joining](/docs/spaces/#creating-and-joining).

**"No account uses that email yet. Ask them to sign up first."** An email invite only works for someone who already has an account. Ask them to sign up, or send them the invite link.

**"Only the owner can invite people to this space."** Ask the owner to invite them, or share the invite code or link.

**"Could not leave the space."** If you own the space, you cannot leave it. Use **Delete space** instead.

**"Waiting for this space's key"** You are in the space, but no member has sent you its key yet. It arrives on its own once any member with the key opens the app. You do not need to rejoin.

**"The key sent for ... does not match the one its owner published, so it was not used."** The app refused a key that did not match the owner's published fingerprint. Ask the space owner to check the space; the feed stays unreadable until a correct key arrives.

## Updates

**An update error with a "Try again" button.** Check your internet connection and click **Try again**. If it keeps failing, download the latest version from the [releases page](https://github.com/NotRover/RoverTools-Orange-Copy-Paste-App/releases/latest) and install it over the current one.

**Updates never install on their own.** Automatic installs happen on the splash screen, so **Show splash screen on startup** has to be on, and a version you skipped is never installed automatically. See [Updates](/docs/updates/).

**My theme, layouts, filters or groups reset after updating (Windows).** Updating from version 0.3.7 or older to any version from 0.3.8 to 0.4.2 reset them. Update to the latest version. If you are signed in, it brings back your [synced settings](/docs/settings/#which-settings-sync) from your account when it starts, unless the reset already reached your account. Set anything that is still reset again. Your history and notes filters and the notes layout and sort order do not sync, so set those on each PC.

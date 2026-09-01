---
title: Security model
description: How end-to-end encryption works in Orange Copy Paste, in plain terms.
---

The design goal is simple: **the server should be unable to read your data even if it wanted to.** Not policy, math.

## The shape of it

1. Your password is run through **Argon2id** on your device to derive a key. The password itself is never transmitted.
2. That key unwraps your **User Master Key (UMK)**, which exists only in memory and is wiped when the app exits or you sign out. It never touches disk, logs, or the network.
3. Every clipboard entry and note gets its **own random content key**. The item is encrypted with **AES-256-GCM** under that key, and the key is then wrapped under your UMK (and, for shared items, under each target space key).
4. The server stores the ciphertext and the wrapped keys. It has no key that opens anything. Even your settings blob is encrypted before upload.
5. Devices and space members exchange keys with **X25519**; a wrapped key is only usable by its intended recipient. Device private keys live in the OS credential store (Windows Credential Manager, GNOME Keyring, or KWallet).

Ciphertexts are also bound to their own item identity, so a ciphertext cannot be transplanted onto another item and decrypt.

## What this means in practice

- **A wrong password is a failed decryption**, not a "wrong password" check the server performs. There is nothing server-side to guess against or reset into plaintext.
- **Sharing never re-encrypts content.** Adding a space to an item wraps that item's key for the space; the content ciphertext is untouched.
- **Removing a space member re-keys the space** for everyone remaining. Old keys are retained so history stays readable to members.
- **A received space key is verified** against a fingerprint the owner published, and refused on mismatch.

## Recovery

![The recovery-code screen shown once at setup, with the code and a copy control.](/screenshots/recovery-code.png)

Your **recovery code** is 150 bits of randomness, generated on your device, shown once, and stored nowhere. What the server holds is your UMK wrapped under a key derived from that code, which is useless without it. A password reset re-wraps the same UMK, so your data survives the reset. Regenerating the code revokes the old one.

If you lose both the password and the code and have no signed-in device, your encrypted cloud data is unrecoverable. That is the honest cost of the model.

## What the server does see

Honesty requires the other list too. The server sees account email, device names and presence, item counts and sizes, space membership, and timing metadata. It needs those to route and store. It does not see content, titles, previews, group names, or your settings, which are all inside the ciphertext.

## The rest of the surface

- **Updates are signed** with minisign; the app refuses any bundle whose signature does not match the public key baked into it.
- **Local data is intentionally plaintext** on your own disk; the encryption boundary is the network. Use OS-level disk encryption if your threat model includes local access.
- **Sign-in with Google** uses PKCE against a loopback address; no embedded browser and no deep-link interception.

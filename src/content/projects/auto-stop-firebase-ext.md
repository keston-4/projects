---
title: "Auto Stop Services: A Firebase Extension That Kills Runaway Billing"
summary: "A published Firebase Extension that watches a GCP budget alert and pulls the billing account off a project before a dev or early-prod environment runs up a real bill."
tags: ["firebase-extensions", "gcp", "billing"]
date: 2026-06-14
type: "writeup"
---

GCP's billing alerts fire when you cross a threshold, but nothing actually stops running because of it. On a dev project that's how a stuck job or a bad autoscaler config turns into real money before anyone notices. I built a Firebase Extension that removes the project's billing account when an alert fires, which suspends every paid service straight away.

![High level view: a Firebase project's billing alert publishes to Pub/Sub, which triggers a function that calls the Billing API](../auto-stop-high-level.png)

It's two functions under the hood: one runs once, at install, to wire up the Pub/Sub subscription, the other runs on every alert and does the actual cutoff.

![Extension-level view: the budget alert is pushed to Pub/Sub, a subscriber function takes action, and billing is removed from the project](../auto-stop-context.png)

I listed it on the Firebase Extensions Hub under Apache-2.0, and it picked up over a thousand installs before Firebase shut the Hub down.

![Extensions Hub listing for Auto Stop Services](../auto-stop-listing.png)

Source is on [GitHub](https://github.com/deep-rock-development/auto-stop-firebase-ext).

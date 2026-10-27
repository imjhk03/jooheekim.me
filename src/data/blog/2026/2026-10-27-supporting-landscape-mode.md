---
title: "Supporting Landscape Mode"
description: "My design decision for supporting landscape mode"
pubDatetime: 2026-10-27T23:38:23+09:00
lang: en
tags: [blog]
---

Since the iPhone Duo announcement, I've been wondering how to support iPhone Duo with my app.

I already shipped a small update using the iOS 27.1 SDK to make sure the app fills the screen properly on iPhone Duo. But that was just the first step.

![INTW iPhone Duo screenshots](https://dlp7yaj6myr6fvex.public.blob.vercel-storage.com/images/2026/10/27/image1.png)

My app focuses on widgets, and I didn't want to turn it into another calendar app. Simply showing what's already available in the Calendar app didn't feel right.

iPhone Duo has a lot of layouts, so the first thing I checked was landscape mode in the app. The app was focused only on portrait mode and showed only today's events. Maybe I could make it show the week and let users select a date to see that day's events. But I wasn't sure.

After some brainstorming, I shifted my attention to "Standby." In [Standby](https://x.com/_jooheekim_/status/2087166965307883884?s=20), two small widgets are shown. Yes, let's try this.

The calendar view is on the left, and today's events are on the right, just like in my app's portrait view. It looked familiar to me, too, focusing on today's events and the current date at a glance.

![INTW landscape mode](https://dlp7yaj6myr6fvex.public.blob.vercel-storage.com/images/2026/10/27/image2.png)

What started as an experiment for iPhone Duo is turning into something bigger.

More soon.

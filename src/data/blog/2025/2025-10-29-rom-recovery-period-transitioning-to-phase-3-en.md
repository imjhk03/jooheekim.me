---
title: "ROM Recovery Period: Building v1.1 and Transitioning to Phase 3"
description: "Shipping user-requested features, learning what works in indie marketing, and preparing for the strength recovery phase"
pubDatetime: 2025-10-29T00:00:00+09:00
heroImage: /images/2025/10/29/image1.jpeg
lang: en
translations:
  en: /posts/2025/2025-10-29-rom-recovery-period-transitioning-to-phase-3-en
  ko: /posts/2025/2025-10-29-rom-recovery-period-transitioning-to-phase-3-ko
tags: [blog]
---

![image1](/images/2025/10/29/image1.jpeg)

## Six Weeks After Surgery

It's been six weeks since my left arm surgery. The two weeks following the one-month mark flew by remarkably fast. Now I'm going to the hospital weekly for X-rays to confirm the bone is healing properly, and attending manual therapy twice a week to loosen the stiffened muscles and gradually expand my elbow's range of motion.

I've finally removed the brace. I apply ointment to the surgical site daily, can type with both hands for short periods, and even hold a cup of coffee. While there's still much I can't do, simply being able to move my left arm by my own will brings a sense of liberation and accomplishment.

Phase 2 (ROM Recovery Period) is coming to an end, and I'm transitioning into Phase 3 (Strength Recovery Period). Recovery is slower than I anticipated, but I'm genuinely surprised that I've managed to build and launch an app throughout this process.

## Sale Results and v1.1 Development
![image2](/images/2025/10/29/image2.png)
Over the past two weeks, I ran a sale while simultaneously developing v1.1. Working one-handed meant fatigue accumulated toward the end, but I managed to finish well.

For two weeks after launch, downloads remained at zero. I couldn't determine if the app was bad, if pricing was the problem, or if simply no one knew about it. So I decided to run a sale to test my hypotheses.

**Price was the problem.** As soon as I lowered the price from $2.99 to $0.99, sales began. Users even found the app organically through App Store search. The price barrier was higher than I'd expected.

**But visibility was the bigger issue.** Working one-handed left no bandwidth to experiment across multiple channels, so I decided to focus on one: Reddit's r/iOSWidgets community. Since mine was a widget app, it made sense to target people interested in widgets.

The results were encouraging. A single post drove a surge in downloads and generated valuable feedback through comments. Seeing people share my app elsewhere confirmed there were users who genuinely needed this.

**Twitter was almost completely ineffective.** I posted regularly, but conversion was nearly zero. However, I decided to continue for long-term branding purposes, as it might prove valuable over time.

The sale results exceeded my minimum goal. But it also became clear that relying on a single Reddit post had limits. Traffic peaked for a few days, then naturally declined after about a week. Sustained growth would require two things: **new distribution channels** and **features users actually wanted**.

So I dedicated the following week to developing v1.1. I selected the most implementable items from user feedback:
* **Reminders support**
* **Show only upcoming events**
* **Monthly calendar widget**

Developing based on direct user feedback was genuinely enjoyable. Each "please add this" comment became part of the next version's roadmap. The process of considering and implementing features took longer than expected, but the goal was to ship quickly with minimal viable features.

Long-term, I'm planning iPad support and considering a rebrand of the app name. But for now, the priority is launching v1.1 and gathering more feedback.

## Building, Setting, Monitoring

While I can type with both hands, I can't do so for extended periods, which means I need to rely heavily on development tools. I'd been using Claude Code, but wanted to explore it more deeply, so I researched additional resources.

Initially, I referenced official documentation and blogs to configure things step by step. I set up the status line to display current work status, model, and token usage at a glance, and added a configuration to automatically show todos. I also created a code review Agent to examine code by feature. Everything has been running smoothly so far, so I plan to continue using it.

**First tried using agents:**
![image3](/images/2025/10/29/image3.png)

**Showing todos looks good to track:**
![image4](/images/2025/10/29/image4.png)

**Status line:**
![image5](/images/2025/10/29/image5.png)

**Sometimes Claude Code needs some logs:**
![image6](/images/2025/10/29/image6.png)

I also tried Cursor's Codex midway through. However, whether I failed to communicate my requirements properly or there wasn't enough context, it didn't produce what I wanted. I asked it to understand the project first and create a new widget in the existing design style, but it generated something completely off-target. I eventually returned to Claude Code. I'll need to research Codex more thoroughly with a different project when I have time.

I intended to study ASO (App Store Optimization) as well, but focusing on development left little room for it. Fortunately, App Store Connect data showed my keyword search and page view metrics weren't bad. While it doesn't seem like an immediate problem, I need to continue monitoring trends.

## Transitioning to Phase 3
![image7](/images/2025/10/29/image7.jpg)
Though it took time, I successfully completed v1.1 development. Starting today, I'm launching the update with another sale. This time I'm testing a $1.99 price point and posting to Reddit's r/iosapps community. I'm curious to see if I'll reach a new user base and what kind of feedback will come in.

What I realized while preparing this version is that fatigue accumulated more than I expected. My rehabilitation progress also slowed down. While app development is important, I've come to understand that if my body doesn't recover, I won't be able to sustain this long-term.

In Phase 3, I plan to start at a slower tempo, taking breaks when needed. Rather than rushing to add features, I'll focus more on rehabilitation while steadily collecting user feedback, properly studying ASO, and slowly preparing the next steps.

The sale results weren't viral numbers, but I achieved my first revenue goal. I'll continue moving forward, slowly but steadily, one step at a time, trusting in the process.

---

**App Download:**  
[I Need That Widget](https://apps.apple.com/us/app/i-need-that-widget/id6753172187)

**This Week's Launch: v1.1 at $1.99 (October 29 - November 10)**
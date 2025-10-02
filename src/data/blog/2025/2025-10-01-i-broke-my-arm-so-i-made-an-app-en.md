---
title: "I Broke My Arm, So I Made an App"
description: "A backstory of building an app with one-handed development"
pubDatetime: 2025-10-01T00:00:00Z
heroImage: /images/2025/10/01/image1.jpeg
lang: en
translations:
  en: /posts/2025/2025-10-01-i-broke-my-arm-so-i-made-an-app-en
  ko: /posts/2025/2025-10-01-i-broke-my-arm-so-i-made-an-app-ko
tags: [blog]
---

![image1](/images/2025/10/01/image1.jpeg)

## The Break
On September 16th, I underwent surgery for a fractured left arm and tendon repair. The doctor said recovery would take a long time. Until my left arm heals, I have to live using only my right arm. As a developer who needs both hands to type on a keyboard, this was a difficult situation.

After being hospitalized, I was overwhelmed by the sudden medical bills. I had been working on an app before the accident, but the surgery disrupted my progress. I just needed to finish it up and submit it for review, but doing it with one hand would take much longer. So after some thought, I decided to plan an app that I could develop quickly and easily.

I had been using the iPhone's default Calendar app and liked it, but there were some frustrating limitations. There was no widget to display a calendar on the lock screen, and no home screen widget that showed a monthly calendar alongside today's events. I could use a different calendar app, but I simply needed widgets—without having to switch calendar apps or deal with complicated settings.

So I decided to develop an app that would provide the simple widgets I wanted.

## One-Handed Development
Before starting development, I made a prioritized list of the widgets and features I needed while hospitalized. During the week of surgery, I couldn't work much due to the pain, so I only did planning.

Four days after surgery, I was discharged and went home. Even then, I had pain just sitting still, so I couldn't sit at my desk for long. About seven days post-surgery, I reorganized my desk into a one-handed workspace. I didn't change much—just moved the trackpad I used with my left hand to my right hand's position.

Writing code with one hand was difficult, so I relied heavily on Claude Code. I could have used Dictation to write prompts by voice, but the accuracy wasn't great, so even though it was slower, I typed prompts with one hand and let Claude Code write the code. I also tried Cursor, but since I was already subscribed to Claude Pro, I used Claude. It wasn't Max, so there were usage limits and I couldn't use the upgraded models, but it was sufficient for a simple app. When I hit the usage limit, I used it as a break time to rest my arm and body. For building and testing, I opened up familiar Xcode to check everything.

![image2](/images/2025/10/01/image2.png)
_Time for rest_
![image3](/images/2025/10/01/image3.png)

It took about 10 days post-surgery for the pain to mostly subside, so until then I couldn't sit and work for long periods. I worked a maximum of 5-6 hours a day, and spent the rest of the time going to the hospital or resting in bed. By the second week, the app was nearly complete, so I created the app icon layers using Apple's app icon template resources in Figma and finished it with Icon Composer. Designing App Store screenshots from scratch would have taken too long, so I quickly worked through it using Screenshot Studio.

**Tools used:**
* Xcode
* Claude Code
* Figma
* Icon Composer
* [Screenshot Studio](https://appstorescreenshotstudio.com/)

## Now and Then
![image4](/images/2025/10/01/image4.jpg)
If this post has been published, the app has successfully passed review and is available for download. I developed the most essential features and widgets first, and plan to add a few more features in future updates. I also plan to support iPad and Mac. While developing, I thought of another app I personally need, so I'm planning that out. I'd like to finish the app I was working on before the surgery too, but it's a more complex app, so I want to work on it again when I can invest more time and energy.

The stitches from my left arm surgery site were removed on the second week, but I'm still wearing a brace and my hand is still swollen. I've just started physical therapy and can barely flex and extend my arm a bit more than 90°.

It hasn't even been a month yet, but developing with one hand taught me that I can implement simple apps thanks to Claude Code. Because I had to work with one hand, typing was difficult and I couldn't work for long stretches, so I focused on MVP app development—simple but focused on core features. If I have the budget, I'd like to upgrade to Max and use it more extensively.

You can download the app [here](https://apps.apple.com/us/app/i-need-that-widget/id6753172187).

Recovery is slow, but I'm taking it one day at a time. See you in the next build.
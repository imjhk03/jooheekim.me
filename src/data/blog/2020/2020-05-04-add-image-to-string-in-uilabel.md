---
title: Add image to string in UILabel using NSTextAttachment
description: "Sometimes you need to add image to a string in a `UILabel`, but using `UIImageView` gets complicated and sometimes not efficient. But Apple provides a simple..."
pubDatetime: 2020-05-04T09:00:00Z
tags: [uikit, ui-development]
---


Sometimes you need to add image to a string in a `UILabel`, but using `UIImageView` gets complicated and sometimes not efficient. But Apple provides a simpler way, using `NSAttributedString` and `NSTextAttachment`. Here's how you do it.

```swift
let stringWithImage = NSMutableAttributedString(string: "Completed")

let imageAttachment = NSTextAttachment()
imageAttachment.image = UIImage(named: "completeIcon")

let completeImageString = NSAttributedString(attachment: imageAttachment)

stringWithImage.append(NSAttributedString(string: " "))
stringWithImage.append(completeImageString)

labelComplete.attributedText = stringWithImage
```

This way is more easier than using `UIImageView`. We don't need any Auto Layout, just a plain `NSMutableAttributedString`.

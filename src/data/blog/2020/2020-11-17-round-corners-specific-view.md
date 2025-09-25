---
title: How to round corners specifically on a UIView
description: "To round a corner on a UIView, you can set the layer's `cornerRadius` value. Simply use it like this:"
pubDatetime: 2020-11-17T09:00:00Z
tags: [uikit, ui-development]
---


[KOR](https://imjhk03.github.io/posts/how-to-set-cornerRadius-for-only-some-corners/)

To round a corner on a UIView, you can set the layer's **`cornerRadius`** value. Simply use it like this:

```swift
cornerView.layer.cornerRadius = 8
```

>To ensures subviews are clipped to the rounded corners, add 'view.clipsToBounds = true'.
{: .prompt-info}

But what if you need to corner only to top view or bottom? We need to set the `CALayer`'s **`maskedCorners`** property. You can make an extension for making a rounded corner like this:

```swift
extension UIView {
    // Available from iOS 11.0
    func cornerRadius(_ corners: UIRectCorner..., radius: CGFloat) {
        layer.cornerRadius = radius
        
        var maskedCorners: CACornerMask = []
        let cornerSet = corners.isEmpty ? [.allCorners] : corners
        
        if cornerSet.contains(.allCorners) {
            maskedCorners = [.layerMinXMinYCorner, .layerMaxXMinYCorner, .layerMinXMaxYCorner, .layerMaxXMaxYCorner]
        } else {
            if cornerSet.contains(.topLeft) {
                maskedCorners.insert(.layerMinXMinYCorner)
            }
            if cornerSet.contains(.topRight) {
                maskedCorners.insert(.layerMaxXMinYCorner)
            }
            if cornerSet.contains(.bottomLeft) {
                maskedCorners.insert(.layerMinXMaxYCorner)
            }
            if cornerSet.contains(.bottomRight) {
                maskedCorners.insert(.layerMaxXMaxYCorner)
            }
        }
        
        layer.maskedCorners = maskedCorners
    }
}
```

This extension provides the following features
- Multiple corners can be set at once using variable parameters.
- The mapping between `UIRectCorner` and `CACornerMask` makes it easy to set the desired corners
- Combine all selected corners into one mask using the `reduce` function

The below table show mapping between `CACornerMask` and corner.

| CACornerMask        | Corner              |
| ------------------- | ------------------- |
| layerMinXMinYCorner | top left corner     |
| layerMaxXMinYCorner | top right corner    |
| layerMinXMaxYCorner | bottom left corner  |
| layerMaxXMaxYCorner | bottom right corner |

// Usage
```swift
// All corners rounded
circleView.cornerRadius(.allCorners, radius: 50)

// Only top corners rounded
circleView.cornerRadius(.topLeft, .topRight, radius: 50)

// Only left corners rounded
circleView.cornerRadius(.topLeft, .bottomLeft, radius: 25)

// Only diagonal corners rounded
circleView.cornerRadius(.topLeft, .bottomRight, radius: 25)
```

<br>
**Related Resources**
<br>
[cornerRadius](https://developer.apple.com/documentation/quartzcore/calayer/cornerradius){:target="_blank"}

[maskedCorners](https://developer.apple.com/documentation/quartzcore/calayer/maskedcorners){:target="_blank"}
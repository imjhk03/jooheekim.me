---
title: How to Join an Array of Strings
description: Using `joined()` method, we can merge an array of strings to a single string. We can add a separator too.
pubDatetime: 2021-03-01T09:00:00Z
tags: [arrays]
---


Using `joined()` method, we can merge an array of strings to a single string. We can add a separator too.

```swift
let names = ["Brian", "Nick", "John", "David"]
let list = names.joined(separator: ", ")
print(list)
// "Brian, Nick, John, David"
```
---
title: How to detect current text while texting in UITextField
description: "While typing a text in `UITextField`, we could get the current text with `UITextFieldDelegate`'s Instance Method `textFieldDidChangeSelection(_:)`. But this ..."
pubDatetime: 2020-03-31T09:00:00Z
tags: [uikit]
---


While typing a text in `UITextField`, we could get the current text with `UITextFieldDelegate`'s Instance Method `textFieldDidChangeSelection(_:)`. But this method only works at iOS 13.0+, so to let other lower iOS version to use this is how it works.


## Add a target to UITextField
```swift
textField.addTarget(self, action: #selector(handleTextFieldDidChange), for: .editingChanged)
```

## Handle event when UITextField editing changed
```swift
@objc func handleTextFieldDidChange(_ textField: UITextField) {
    // handle event
    print(textField.text)   // this prints the text of textField after typing
}
```

## On iOS 13.0+
But when your app only supports iOS 13.0+, you can use the method below.
```swift
func textFieldDidChangeSelection(_ textField: UITextField) {
    // handle event
}
```

[Apple Document](https://developer.apple.com/documentation/uikit/uitextfielddelegate/3114542-textfielddidchangeselection?language=objc)   
[stackoverflow](https://stackoverflow.com/questions/28394933/how-do-i-check-when-a-uitextfield-changes)
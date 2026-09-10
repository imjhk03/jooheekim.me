---
title: Raycast + Confetti로 Xcode 빌드 완료 효과 넣기
description: Xcode 빌드 완료 시 Raycast의 Confetti 애니메이션으로 시각적 알림 효과 추가하기
pubDatetime: 2023-02-19T09:00:00Z
tags: [workflow]
heroImage: https://dlp7yaj6myr6fvex.public.blob.vercel-storage.com/images/2023/02/19/video1.gif
---

[싱글 모니터](https://imjhk03.github.io/posts/not-using-multiple-monitors/) 사용하면서 하나의 업무에만 집중하는 환경을 보내고 있다. 하지만 프로젝트 빌드 시간이 오래 걸리면 다른 업무를 확인하는 경우가 있는데, 이때 너무 집중을 하다 보면 빌드 완료되었다는 알림을 놓치는 경우가 있다. 한참 업무를 보거나 딴짓(?)을 하다가 다시 Xcode 프로그램으로 돌아가면 빌드가 다 완료되어 있는 상태가 있어서 보다 빨리 확인을 못 하는 경우가 있다.

우연히 인터넷에서 Raycast + Confetti로 Xcode 빌드가 완료되면 알 수 있도록 하는 팁을 발견해서 적용해 보았는데 너무 만족하고 있다.

![Xcode 빌드가 완료되면 화면 양쪽에서 빵빠레 애니메이션이 나타난다](https://dlp7yaj6myr6fvex.public.blob.vercel-storage.com/images/2023/02/19/video1.gif)
_GIF 변환하면서 속도가 느려진 모습으로 나타나고 있다_ 


## Raycast
[Raycast](https://www.raycast.com/) 프로그램을 설치해서 Raycast가 있는 confetti animation을 활용할 것이다. Raycast를 설치하고 나면 Raycast에서 confetti를 검색해서 잘 있는지 확인해 본다.

다음에는 스크립트 파일을 만들어서 Xcode 빌드 이후에 실행하도록 하면 된다.

## Terminal
1. 터미널을 이용해서 스크립트 파일을 생성한다.
```zsh
touch confetti_shortcut.sh
```

2. 파일 편집기를 이용해서 아래와 같이 코드를 작성한다.
```bash
#!/bin/bash
open raycast://confetti
exit;
```

3. 스크립트 파일의 시랭 권한을 설정한다.
```zsh
chmod +x confetti_shortcut.sh
```

파일은 준비가 되었고 Xcode에서 빌드 완료할 때 스크립트 돌리도록 설정하면 된다.

## Xcode
Xcode > Settings > Behaviors > Build > Succeeds 아래에 Run script 영역에서 만든 스크립트 파일을 선택하면 된다.

![Xcode > Settings > Behaviors > Build > Succeeds 맨 아래 만들었던 스크립트 파일을 설정한 화면](https://dlp7yaj6myr6fvex.public.blob.vercel-storage.com/images/2023/02/19/image1.png)

**참고**

[트위터 영상](https://twitter.com/dqhieu/status/1615908850493947908?s=20)

[The Fun Way to Visualize Long Builds in Xcode with 🎉](https://medium.com/owl-apps-team/the-fun-way-to-visualize-long-builds-in-xcode-with-fa023e743149)
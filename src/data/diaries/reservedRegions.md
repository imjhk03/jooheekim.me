---
title: "ReservedRegions"
tags: [iPhone Duo, UIKit]
date: 2026-11-12T23:54:15+09:00
---

[UIView.ReservedRegion](https://developer.apple.com/documentation/uikit/uiview/reservedregion)

- 기기 하드웨어나 시스템 UI로 인해 컨텐츠가 가려지거나 뷰가 나뉘는 영역을 나타내는 구조체. 이를 조회하는 함수는 `reservedRegions(kind:options:)`이다.
- `UIView.ReservedRegion.Kind`는 두 종류다.
  - `.occlusion`: 컨텐츠를 가리는 영역. 예: 카메라, Dynamic Island
  - `.division`: 화면을 두 부분으로 나누는 영역. 예: Duo의 접힌 부분
- 조회 결과는 현재 뷰와 겹치는 영역들의 배열이다. 기본적으로 활성 영역만 포함한다.
- 각 영역의 frame은 호출한 뷰의 좌표계를 사용하며, 시스템이 정한 주변 여백도 이미 포함한다.
- Duo가 완전히 펼쳐지면 `.division`는 비활성화된다. 따라서 기본 옵션으로 `.division`을 조회하면 빈 배열 []을 반환한다. `.includeInactive` 옵션을 사용하면 비활성 영역도 조회할 수 있다.
- 서로 관련된 두 컨텐츠 뷰 컨트롤러를 힌지 양쪽이나 위아래에 배치하려면, 힌지를 직접 계산하기보다 `UIArrangementViewController` 사용을 권장한다.
- UIKit에서는 `updateConstraints()` 안에서 조회한 영역을 추적한다. 영역이 변경되면 해당 메서드를 다시 실행한다. 그 안에서 constraints를 갱신하는 코드는 앱이 작성한다.

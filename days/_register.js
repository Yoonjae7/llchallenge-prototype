/*
 * Day 26~45 등록기
 * ------------------------------------------------------------------
 * days/dayNN.js 들이 window.MJC_EXT_DAYS 에 자기 자신을 넣어두면, 이 파일이 그걸
 * data.js 가 만들어둔 window.MJC_DATA 안으로 접어 넣는다.
 *
 * 왜 이렇게 나눴나 - Day 하나를 고치려고 1500줄짜리 data.js 와 3800줄짜리 index.html 을
 * 뒤지는 게 너무 비쌌다. 이제 Day 30 을 고치려면 days/day30.js 한 파일만 열면 되고,
 * 그 안에 슬라이드·퀴즈·미션·전용 비주얼이 전부 들어 있다.
 *
 * 로드 순서가 중요하다 (index.html 참고)
 *   assets.js → data.js  … 여기까지는 일반 스크립트라 즉시 실행
 *   days/dayNN.js        … type="text/babel" (JSX 때문). Babel 이 문서 순서대로 실행한다
 *   days/_register.js    … 반드시 모든 dayNN.js 뒤, 본체 스크립트 앞
 *   본체 <script type="text/babel">
 * ------------------------------------------------------------------
 */
(function () {
  "use strict";

  const DATA = window.MJC_DATA;
  const EXT = window.MJC_EXT_DAYS || {};
  if (!DATA) return;

  /* upcoming(미리보기)에 흐리게만 떠 있던 챕터를 실제 챕터로 승격시킨다.
     outcome 은 각 챕터를 마쳤을 때 학습자가 갖게 되는 상태 - 앞 챕터들과 같은 어투로 맞췄다 */
  const OUTCOMES = {
    "챕터 7": "발표자료를 톤까지 맞춰 만들고 PPTX, PDF로 꺼내 쓸 수 있다",
    "챕터 8": "코드를 한 줄도 안 읽고 말로만 시켜서 내 컴퓨터에 진짜 파일을 만든다",
    "챕터 9": "내가 만든 걸 인터넷에 올려서 누구에게나 주소로 보낼 수 있다",
    "PJT 3": "내 이름이 들어간 주소로 열리는 사이트를 갖는다",
    "챕터 10": "폴더를 통째로 맡기고 결과만 확인하면 되는 상태가 된다",
    "챕터 11": "반복되는 일을 예약으로 걸어두고 결과만 받아본다",
    "PJT 4": "어질러진 폴더 하나를 넘겨 정리된 폴더와 보고서를 받는다",
    "챕터 12": "45일치 결과물을 손에 쥐고 환급까지 신청한다",
  };

  const promoted = [];
  const stillUpcoming = [];

  (DATA.upcoming || []).forEach(function (u) {
    /* 이 챕터의 Day 가 하나라도 authored 로 들어왔으면 실제 챕터로 올린다 */
    const hasContent = (u.days || []).some(function (d) { return EXT[d.day]; });
    if (!hasContent) { stillUpcoming.push(u); return; }

    promoted.push({
      code: u.code,
      title: u.title,
      days: (u.days || []).map(function (d) { return d.day; }),
      milestone: !!u.milestone,
      outcome: OUTCOMES[u.code] || u.title,
    });
  });

  DATA.upcoming = stillUpcoming;
  DATA.chapters = DATA.chapters.concat(promoted);

  /* authored 콘텐츠를 붙이고, days 메타를 chapters 와 똑같은 규칙으로 다시 만든다.
     (data.js 가 쓰는 파생 로직과 같은 모양이라야 화면이 동일하게 동작한다) */
  promoted.forEach(function (ch) {
    ch.days.forEach(function (n) {
      const src = EXT[n];
      if (!src) return;
      DATA.authored[n] = {
        kind: src.kind,
        slides: src.slides,
        quiz: src.quiz,
        mission: src.mission,
      };
      DATA.days.push({
        day: n,
        chapter: ch.code,
        chapterTitle: ch.title,
        chapterOutcome: ch.outcome,
        milestone: ch.milestone,
        type: src.kind || "concept",
        name: src.title,
      });
    });
  });

  DATA.days.sort(function (a, b) { return a.day - b.day; });

  /* 구현 범위 표시도 실제로 만들어진 Day 수에 맞춰 올린다 */
  DATA.product.builtDays = DATA.days.length;
})();

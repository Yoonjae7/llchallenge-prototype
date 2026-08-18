/*
 * Day 27 · 챕터 7 - 회의 노트를 슬라이드로 바꾸기 (실습)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 이 Day 의 감정은 "대충 적어둔 메모가 발표 가능한 장표로 바뀐다"는 낙차다. 그래서 비교
     대상을 나란히 놓았다 - 왼쪽은 줄이 삐뚤빼뚤한 메모지, 오른쪽은 같은 네이비 톤으로 맞춰진
     장표 4장. 오른쪽 4장이 순서대로 차오르면서 색이 전부 같다는 게 눈에 들어오게 했다 */
  V.deckFromNote = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconArrowSm } = UI;
    const slides = ["표지", "실적", "잘된 점", "4분기"];
    return (
      <div className={card}>
        <div className="flex items-center gap-2">
          {/* 대충 적은 메모 */}
          <div className="flex-1 rounded-xl bg-white border border-gray-200 p-2 shadow-soft"
            style={{ animation: "revealUp .4s both" }}>
            <div className="text-[8px] font-black text-gray-400 mb-1.5">회의 노트</div>
            {[92, 68, 84, 55, 74].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-gray-200 mb-1"
                style={{ width: w + "%", transform: "rotate(" + (i % 2 ? -.5 : .4) + "deg)" }} />
            ))}
            <div className="mt-1.5 text-[7.5px] font-bold text-gray-400">순서도 형식도 없음</div>
          </div>

          <span className="shrink-0 text-brand-400" style={{ animation: "nudgeR 1.7s ease-in-out infinite" }}>
            <IconArrowSm />
          </span>

          {/* 톤이 맞춰진 장표 4장 */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-1.5">
              {slides.map((s, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-soft border border-white/60"
                  style={{ background: "linear-gradient(135deg,#1E3A5F,#0F1F35)",
                           animation: "popIn .32s " + (.35 + i * .13) + "s cubic-bezier(.2,.9,.3,1.15) both" }}>
                  <div className="px-1.5 pt-1.5">
                    <div className="h-1 w-2/3 rounded-full bg-white/70" />
                    <div className="mt-1 h-[3px] w-full rounded-full bg-white/25" />
                    <div className="mt-[3px] h-[3px] w-4/5 rounded-full bg-white/25" />
                  </div>
                  <div className="mt-1 px-1.5 pb-1 text-[6.5px] font-black text-white/60">{s}</div>
                </div>
              ))}
            </div>
            <div className="mt-1.5 flex items-center justify-center gap-1">
              {["#1E3A5F", "#2E5A8F", "#7FA8D9"].map((c, i) => (
                <span key={i} className="w-2.5 h-2.5 rounded-full border border-white shadow-sm" style={{ background: c }} />
              ))}
              <span className="ml-1 text-[7.5px] font-black text-gray-500">톤 통일</span>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-xl px-3 py-2.5 text-center text-[10.5px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#1E3A5F,#0F1F35)", animation: "revealUp .4s .9s both" }}>
          내용과 톤을 <span className="text-brand-300">한 번에</span> 요청하면 돼요
        </div>
      </div>
    );
  }`);

  D[27] = {
    kind: "practice",
    title: "회의 노트를 슬라이드로 바꾸기",
    slides: [
      { title: "오늘은 진짜 회사에서 쓸 걸 만들어요",
        body: "오늘은 이론 없이 바로 실전이에요. 디자인 용어 몰라도 돼요. <b>원하는 결과를 있는 그대로 말하면</b> Claude Design이 나머지를 다 해요.\n\n오늘 만들 건 <b>회사에서 진짜 쓸 법한 발표 슬라이드</b>예요. 대충 적어둔 노트를 던지면, 발표 가능한 수준의 슬라이드로 바뀌는 걸 보실 거예요.",
        note: "실습 첫날. 와이어프레임/하이파이 같은 UI/UX 이론을 걷어내고, '원하는 결과를 그대로 말한다'는 이 코스의 철학을 그대로 적용." },
      { title: "오늘의 재료",
        body: "미션에서 <b>회의 노트</b> 하나를 드릴 거예요.\n\n다음 주 팀 회의에서 3분기 진행 상황을 보고해야 하는데, 급하게 적어둔 것처럼 일부러 대충 만들었어요. 실무에서 딱 이런 식으로 메모해두고 슬라이드를 만들 일이 많거든요.\n\n숫자, 잘된 점, 아쉬운 점, 다음 분기 계획이 순서 없이 섞여 있어요. <b>정리는 클로드가 해요.</b>",
        note: "학습자가 자기 자료를 준비할 필요 없음 원칙 유지. 실제 회의 노트처럼 일부러 비정형으로 제공." },
      { title: "한 번에 이렇게 요청하세요",
        visual: "deckFromNote",
        body: "핵심은 <b>내용과 톤을 한 번에 같이 요청하는 것</b>이에요.\n\n「아래 노트를 다음 주 팀 회의에서 쓸 <b>슬라이드 4장</b>으로 만들어줘. 팀장님과 임원분들이 보시니까 톤은 <b>깔끔하고 신뢰감 있게</b>, 색은 <b>네이비 계열</b>로 통일해줘.」\n\n구조를 먼저 잡고 색을 나중에 입히고… 그런 단계 안 밟아도 돼요.",
        note: "핵심 슬라이드. '브랜드 고정'을 별도 이론으로 가르치지 않고 자연스러운 한 문장 요청 안에 녹여서 보여준다. 메모→장표 낙차는 그림(deckFromNote)이 맡는다." },
      { title: "마음에 안 들면 그냥 다시 말하면 돼요",
        body: "처음 나온 결과가 100% 마음에 들 수도, 아닐 수도 있어요.\n\n괜찮아요. <b>「3번째 슬라이드는 표로 정리해줘」</b>처럼 부분만 콕 집어 다시 요청하면 돼요.\n\n디자인 이론을 몰라도, 그냥 원하는 걸 말로 표현하기만 하면 됩니다. 그게 오늘 배우는 전부예요.",
        note: "wireframe/hifi 단계 이론을 대체하는 슬라이드. '말로 반복 요청'이 유일한 스킬임을 명확히 한다." },
      { title: "오늘의 미션",
        body: "제공된 노트로 <b>4장짜리 회의 슬라이드</b>를 만드는 거예요.\n\n톤 통일까지 한 번에 요청하고, 마음에 안 드는 부분은 다시 요청해서 다듬어보세요.",
        note: "미션 요약." },
    ],
    mission: {
      title: "미션, 회의 슬라이드 4장 만들기",
      goal: "제공된 회의 노트를 바탕으로, 톤이 통일된 발표 슬라이드 4장을 한 번의 요청으로 만듭니다.",
      steps: [
        "Claude Design을 연다",
        "아래 회의 노트를 그대로 복사해 붙여넣고, 슬라이드 4장 + 톤 통일을 <b>한 번에</b> 요청한다",
        "결과를 보고 마음에 안 드는 부분이 있으면 콕 집어 다시 요청한다 (최소 1회)",
        "완성된 슬라이드 화면을 캡처한다",
      ],
      given: {
        label: "복사해서 그대로 쓰세요 - 회의 노트",
        text: "3분기 진행상황 정리해야됨, 회의는 15분, 팀장님+임원 참석\n\n- 목표 매출 대비 92% 달성 (약간 부족)\n- 신규 고객 8곳 확보, 목표는 10곳이었음\n- 제일 잘 된 건 리텐션 캠페인 - 기존 고객 재구매율이 15%p 상승\n- 안 좋았던 점: 배송 지연 이슈 2번, 고객 컴플레인 3건 발생\n- 4분기 계획: 배송 파트너사 재검토, 신규 채널 2개 테스트 예정",
      },
      fields: [
        { n: "①", label: "처음 보낸 요청 문구", ph: "슬라이드 4장 + 톤을 한 번에 요청한 문장을 그대로 붙여넣으세요" },
        { n: "②", label: "다시 요청한 문구", ph: "「3번째 슬라이드는 표로 정리해줘」처럼 다듬으려고 보낸 문장을 적어주세요" },
      ],
      checklist: [
        "슬라이드가 <b>4장</b> 이상 있다",
        "노트의 핵심 숫자·내용이 슬라이드에 반영돼 있다",
        "색·폰트가 슬라이드 전체에서 <b>통일</b>돼 있다",
        "한 번 이상 <b>다시 요청</b>해서 다듬은 문구가 적혀 있다",
      ],
      submit: { what: "완성된 슬라이드 화면 + 요청 문구", format: "이미지 + 텍스트", detail: "요청 문구 두 개는 위 <b>답변 작성</b> 칸에 적고, 완성된 슬라이드 화면을 아래에 첨부해주세요" },
      tip: "색이 안 떠오르면 좋아하는 브랜드를 대보세요. 「토스 앱 같은 느낌의 색 조합으로」처럼요. 훨씬 빨라요 😄",
    },
  };
})();

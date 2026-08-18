/*
 * Day 41 · 챕터 11 - 예약이란 / 좋은 예약 / 관리 (개념)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 예약의 남용을 막는 판단 기준이 이 Day 의 핵심. 좋은/나쁜을 글로 나열하면 다 그럴듯해
     보여서, 각 항목에 "매일 같은 방식으로 반복돼도 괜찮은가"라는 같은 질문을 통과시킨 결과로
     보이게 배치했다. 아래 판단 문장 바가 그 기준을 한 줄로 남긴다 */
  V.goodBadSchedule = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconCheckCircle, IconXCircle, IconClock } = UI;
    const good = ["매일 아침 메일 요약", "주간 리포트 정리", "매주 월요일 일정 브리핑"];
    const bad = ["매번 판단이 다른 협상", "한 번만 할 계산", "결과를 매번 검증할 민감한 일"];
    return (
      <div className={card}>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-2"
            style={{ animation: "revealUp .4s both" }}>
            <div className="flex items-center gap-1 mb-1.5">
              <span className="w-3 h-3 text-emerald-500"><IconCheckCircle /></span>
              <span className="text-[9.5px] font-black text-emerald-700">걸어도 좋아요</span>
            </div>
            <div className="space-y-1">
              {good.map((t, i) => (
                <div key={i} className="rounded-md bg-white border border-emerald-100 px-1.5 py-1 flex items-center gap-1"
                  style={{ animation: "popIn .3s " + (.2 + i * .1) + "s both" }}>
                  <span className="shrink-0 w-2 h-2 text-emerald-500"><IconClock /></span>
                  <span className="text-[7.5px] font-bold text-gray-600 leading-tight">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-2"
            style={{ animation: "revealUp .4s .15s both" }}>
            <div className="flex items-center gap-1 mb-1.5">
              <span className="w-3 h-3 text-rose-400"><IconXCircle /></span>
              <span className="text-[9.5px] font-black text-rose-600">걸지 마세요</span>
            </div>
            <div className="space-y-1">
              {bad.map((t, i) => (
                <div key={i} className="rounded-md bg-white border border-rose-100 px-1.5 py-1"
                  style={{ animation: "popIn .3s " + (.35 + i * .1) + "s both" }}>
                  <span className="text-[7.5px] font-bold text-gray-400 leading-tight line-through decoration-rose-200">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2.5 rounded-xl px-3 py-2.5 text-center text-[10px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#8B5CF6,#5B21B6)", animation: "revealUp .4s .7s both" }}>
          "이 일, <span className="text-white">매일 같은 방식으로 반복돼도</span> 괜찮은가?"
        </div>
      </div>
    );
  }`);

  D[41] = {
    kind: "concept",
    title: "예약이란 / 좋은 예약 / 관리",
    slides: [
      { title: "매번 시키기 귀찮으셨죠? ⏰",
        body: "매일 아침 같은 걸 물어보고 계신가요? 「오늘 일정 정리해줘」, 「어제 메일 요약해줘」.\n\n<b>예약</b>은 그걸 없애요. <b>정해둔 시각에 클로드가 알아서 실행돼요.</b>\n\n{{name}}님이 아침에 눈 떠보면, 클로드가 <b>이미 해놓은 결과</b>가 기다리고 있는 거예요.\n\n말 시키는 사람에서 <b>결과만 받아보는 사람</b>이 되는 거죠. 이 챌린지의 마지막 자동화예요 😊",
        note: "챕터 11 첫날. '결과가 기다리고 있다'는 감각이 이 기능의 핵심 가치." },
      { title: "좋은 예약 vs 나쁜 예약",
        visual: "goodBadSchedule",
        body: "아무거나 예약 걸면 안 돼요. 기준이 있어요.\n\n<b>매번 똑같은 형태로 반복되는 일</b>에 걸어요. 반대로 매번 다른 판단이 필요하거나, 한 번만 할 일이거나, 결과가 맞는지 계속 확인해야 하는 민감한 일에는 걸지 마세요.\n\n기준 하나만 기억하세요. <b>「이 일, 매일 같은 방식으로 반복돼도 괜찮은가?」</b>",
        note: "예약의 남용을 막는 판단 기준. Day 42 미션의 소재 선정 기준이 된다. 좋은/나쁜 예시 대비는 그림(goodBadSchedule)이 맡고 글은 판단 문장만 남긴다." },
      { title: "결과는 어디서 보나요?",
        body: "예약이 실행되면 결과가 어딘가에 쌓여요. 그걸 확인하는 곳이 따로 있어요.\n\n<b>예약 관리 화면</b>에서 언제 실행됐는지, 결과가 뭐였는지, 성공했는지 실패했는지를 볼 수 있어요.\n\n매번 알림이 오는 게 아니라, {{name}}님이 <b>확인하러 가는</b> 구조예요.\n\n그리고 언제든 <b>끄거나 주기를 바꿀 수</b> 있어요.",
        note: "⚠️ 확인 필요, 예약 관리 화면의 실제 진입 경로와 명칭을 출시 시점 UI에서 확인해 스크린샷 첨부." },
      { title: "오늘은 여기까지예요",
        body: "정리하면요.\n\n· 예약은 <b>정해진 시간에 자동 실행</b>되는 기능이에요\n· <b>매번 같은 형태로 반복되는 일</b>에 걸어요\n· 한 번만 할 일이나 매번 판단이 필요한 일엔 <b>안 걸어요</b>\n· 결과는 <b>예약 관리 화면</b>에서 확인하고, 언제든 끌 수 있어요\n\n내일은 직접 걸어봐요. 지금까지 배운 커넥터도 다시 등장해요 😊",
        note: "개념 Day 요약 → 퀴즈. Day 42에서 커넥터(챕터 4)가 재등장함을 예고." },
    ],
    quiz: [
      { q: "예약 기능이 하는 일은?",
        choices: ["정해둔 시각에 자동으로 실행된다", "실시간으로 답을 더 빨리 준다", "사용량을 아껴준다", "여러 사람과 동시에 대화한다"],
        answer: 0,
        explain: "{{name}}님이 시키지 않아도 <b>정해진 시각에 알아서</b> 돌아가요." },
      { q: "예약을 걸기 좋은 일은?",
        choices: ["오늘 처음이자 마지막으로 할 일", "매일 같은 형태로 반복되는 아침 브리핑", "매번 다른 판단이 필요한 복잡한 협상", "지금 당장 한 번만 필요한 계산"],
        answer: 1,
        explain: "「매일 같은 방식으로 반복돼도 괜찮은가?」에 그렇다고 답할 수 있는 일이에요." },
      { q: "예약을 걸면 <b>안 좋은</b> 경우는?",
        choices: ["매주 같은 요일에 반복되는 보고서", "매번 다른 판단이 필요한 민감한 업무", "매일 아침 날씨 요약", "주간 뉴스 정리"],
        answer: 1,
        explain: "판단이 매번 달라지는 일은 예약보다 그때그때 직접 하는 게 안전해요." },
      { q: "예약 결과는 어떻게 확인하나요?",
        choices: ["자동으로 문자가 온다", "예약 관리 화면에서 확인한다", "확인할 방법이 없다", "매번 다시 물어봐야 한다"],
        answer: 1,
        explain: "{{name}}님이 <b>확인하러 가는</b> 구조예요. 언제 실행됐고 결과가 뭐였는지 거기서 볼 수 있어요." },
      { q: "걸어둔 예약이 더 이상 필요 없어졌다면?",
        choices: ["계정을 새로 만들어야 한다", "언제든 끌 수 있다", "한 달을 기다려야 자동으로 꺼진다", "끌 수 없다"],
        answer: 1,
        explain: "「이제 필요 없다」 싶으면 <b>바로 끄시면</b> 돼요." },
      { q: "예약을 판단하는 기준 문장으로 알맞은 것은?",
        choices: ["이 일이 재밌는가?", "이 일이 매일 같은 방식으로 반복돼도 괜찮은가?", "이 일이 비싼가?", "이 일이 어려운가?"],
        answer: 1,
        explain: "반복 가능한 형태인지가 핵심이에요." },
      { q: "예약과 관련해 다음 중 맞는 설명은?",
        choices: ["주기를 나중에 바꿀 수 없다", "언제 실행됐는지 기록을 볼 수 있다", "실패해도 알 방법이 없다", "하루 한 번만 걸 수 있다"],
        answer: 1,
        explain: "성공했는지 실패했는지도 <b>예약 관리 화면</b>에서 확인할 수 있어요." },
      { q: "한 번만 하면 되는 일에 예약을 걸면 어떨까요?",
        choices: ["효율적이다", "불필요하다, 그냥 지금 하면 된다", "필수다", "더 빠르다"],
        answer: 1,
        explain: "예약은 <b>반복</b>을 위한 기능이에요. 한 번 할 일엔 그냥 지금 시키세요." },
      { q: "예약 기능을 한마디로 표현하면?",
        choices: ["말 시키는 사람에서 결과만 받아보는 사람이 되는 것", "더 빠른 답변을 받는 것", "여러 모델을 동시에 쓰는 것", "사용량을 무제한으로 만드는 것"],
        answer: 0,
        explain: "아침에 눈 떠보면 결과가 기다리고 있어요. 이게 예약의 핵심 가치예요 😊" },
      { q: "예약 결과를 확인하지 않고 계속 방치하면?",
        choices: ["자동으로 최적화된다", "잘못되고 있어도 모를 수 있다", "사용량이 절약된다", "품질이 저절로 좋아진다"],
        answer: 1,
        explain: "가끔은 <b>확인하러 가는 습관</b>이 필요해요. 자동화도 완전히 손 놓는 건 아니에요." },
    ],
  };
})();

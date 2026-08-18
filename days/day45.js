/*
 * Day 45 · 챕터 12 - It's a Wrap! (마지막 날)
 *
 * 원본 커리큘럼(track-a-curriculum.html)의 이 Day 에는 "PJT 2 대시보드를 다시 열어보세요 /
 * Live Artifact" 슬라이드가 있었는데, 그건 예전 PJT 2 설계(대시보드)를 가리키는 문장이다.
 * 지금 PJT 2(Day 24~25)는 노션·캘린더·Gmail 을 한 프로젝트로 묶는 것이라, 같은 취지
 * ("만들어둔 게 지금도 살아 있다")를 현재 설계에 맞게 「Week n」 재실행으로 바꿔 썼다.
 * 결과물 목록의 Day 번호도 현재 커리큘럼 기준으로 정정했다.
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 마지막 날의 감정은 "이만큼 쌓였다"이다. 목록으로 나열하면 그냥 글이라, 45일을 가로지르는
     타임라인 위에 결과물을 얹었다. 네 개의 PJT 마일스톤만 큰 점으로 띄우고 나머지는 작은
     점으로 둬서, 능선처럼 보이게 했다. 점이 순서대로 켜지면서 여정이 다시 재생된다 */
  V.courseRecap = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconCheckCircle } = UI;
    const items = [
      { d: "Day 9", t: "부산 여행 리서치 리포트", big: false, tone: "bg-sky-400" },
      { d: "Day 12", t: "인터랙티브 차트", big: false, tone: "bg-sky-500" },
      { d: "PJT 1", t: "물어보면 답하는 대시보드", big: true, tone: "bg-pink-500" },
      { d: "PJT 2", t: "한 마디로 도는 주간 보고 설비", big: true, tone: "bg-pink-500" },
      { d: "PJT 3", t: "내 이름이 들어간 웹사이트", big: true, tone: "bg-pink-500" },
      { d: "PJT 4", t: "폴더 하나로 끝낸 보고서", big: true, tone: "bg-pink-500" },
    ];
    return (
      <div className={card}>
        <div className="relative pl-3">
          <span className="absolute left-[5px] top-1 bottom-1 w-[2px] rounded-full bg-gradient-to-b from-sky-200 via-violet-200 to-pink-300" />
          <div className="space-y-1.5">
            {items.map((it, i) => (
              <div key={i} className="relative flex items-center gap-2"
                style={{ animation: "revealUp .35s " + (i * .12) + "s both" }}>
                <span className={"absolute -left-3 rounded-full border-2 border-white shadow-sm " + it.tone +
                  (it.big ? " w-2.5 h-2.5 -ml-[1px]" : " w-1.5 h-1.5 ml-[3px]")} />
                <div className={"flex-1 min-w-0 rounded-lg px-2 py-1.5 border " +
                  (it.big ? "bg-pink-50 border-pink-200" : "bg-white border-gray-100")}>
                  <div className="flex items-center gap-1.5">
                    <span className={"shrink-0 text-[8px] font-black " + (it.big ? "text-pink-600" : "text-gray-400")}>{it.d}</span>
                    <span className="text-[8.5px] font-bold text-gray-700 truncate">{it.t}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 rounded-xl px-3 py-2.5 flex items-center justify-center gap-1.5 text-[10.5px] font-black text-white"
          style={{ background: "linear-gradient(135deg,#0EA5E9,#8B5CF6,#EC4899)", animation: "revealUp .4s .85s both" }}>
          <span className="w-3.5 h-3.5"><IconCheckCircle /></span>
          45일 동안 전부 직접 만드신 거예요
        </div>
      </div>
    );
  }`);

  /* 마지막 슬라이드용 수료 배지. 45일의 끝이라 이 한 장은 '정보 전달'이 아니라 '기념품'이어야
     한다고 봤다 - 그래서 정보 밀도를 확 낮추고, 실제로 받는 배지처럼 생긴 물건 하나를 가운데
     크게 놓았다. 리본 훈장 모양 안에 1%를 새기고, 뒤쪽 광선이 천천히 돌면서 금속처럼 빛난다.
     아래 아홉 개 칩은 45일 동안 손에 익힌 것들 - 순서대로 켜지며 훈장 아래 깔린다 */
  V.wrapBadge = MJC_JSX(`function (ctx) {
    const { card } = ctx;
    const skills = ["리서치", "아티팩트", "커넥터", "프로젝트", "스킬", "클로드 코드", "배포", "Cowork", "예약"];
    return (
      <div className={card}>
        <div className="relative rounded-2xl overflow-hidden px-4 py-5"
          style={{ background: "linear-gradient(160deg,#1B1524 0%,#2A1B33 55%,#3A1E2E 100%)" }}>

          {/* 뒤에서 도는 광선 */}
          <span className="absolute left-1/2 top-[52px] w-[210px] h-[210px] -ml-[105px] -mt-[105px] pointer-events-none"
            style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,183,94,.22) 22deg, transparent 46deg, transparent 180deg, rgba(255,183,94,.16) 202deg, transparent 226deg)",
                     animation: "spinLoop 9s linear infinite", borderRadius: "9999px" }} />

          <div className="relative flex flex-col items-center">
            {/* 훈장 */}
            <div className="relative" style={{ animation: "popIn .5s cubic-bezier(.2,.9,.3,1.15) both" }}>
              <span className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(255,167,120,.45), transparent 68%)",
                         animation: "pulseSoft 3.2s ease-in-out infinite" }} />
              <div className="sheen relative w-[74px] h-[74px] rounded-full grid place-items-center overflow-hidden shadow-lift"
                style={{ background: "linear-gradient(150deg,#FFD9A8,#FF8747 45%,#C2410C)",
                         border: "3px solid rgba(255,255,255,.5)" }}>
                <div className="text-center leading-none">
                  <div className="text-[23px] font-black text-white">1<span className="text-[12px]">%</span></div>
                  <div className="mt-[3px] text-[7px] font-black text-white/80 tracking-wider">TOP</div>
                </div>
              </div>
              {/* 리본 */}
              <span className="absolute left-1/2 -bottom-2 -ml-[13px] w-0 h-0"
                style={{ borderLeft: "13px solid transparent", borderRight: "13px solid transparent", borderTop: "14px solid #C2410C" }} />
            </div>

            <div className="mt-4 text-[13px] font-black text-white">상위 1% Claude 사용자</div>
            <div className="mt-1 text-[9px] font-bold text-white/45 tracking-wide">45일 완주 · 멋쟁이 챌린지</div>

            {/* 손에 익힌 것들 */}
            <div className="mt-3.5 flex flex-wrap justify-center gap-1">
              {skills.map((s, i) => (
                <span key={i} className="rounded-full border border-white/15 bg-white/[.08] px-2 py-[3px] text-[8px] font-black text-white/80"
                  style={{ animation: "popIn .3s " + (.55 + i * .07) + "s cubic-bezier(.2,.9,.3,1.15) both" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2.5 rounded-xl bg-white border border-gray-100 px-3 py-2.5 text-center"
          style={{ animation: "revealUp .4s 1.3s both" }}>
          <div className="text-[9.5px] font-bold text-gray-500">Day 1에서 드린 말</div>
          <div className="mt-0.5 text-[10.5px] font-black text-ink leading-snug">
            "가치를 만들어내는 주체는 <span className="text-brand-600">결국 나 자신</span>"
          </div>
        </div>
      </div>
    );
  }`);

  D[45] = {
    kind: "practice",
    title: "It's a Wrap!",
    slides: [
      { title: "여기까지 오셨네요 🎉",
        body: "축하드려요. 이 챌린지의 <b>마지막 날</b>이에요.\n\n첫날 말씀드렸죠? 「45일 뒤의 {{name}}님은 이런 걸 하고 있어요」 하면서 보여드렸던 것들, 기억나세요?\n\n인터랙티브 차트, 클로드가 대신 처리해주는 업무, 내 이름이 들어간 웹사이트, 폴더 하나로 일 끝내는 AI 비서.\n\n<b>그거, 다 하셨어요.</b> 오늘은 그걸 확인하고, 마무리하는 날이에요.",
        note: "Day 1의 로드맵 슬라이드(quadVisuals)를 정확히 회수하는 클로징. 45일간의 성취를 학습자 스스로 확인하게 한다." },
      { title: "환급 신청하는 법",
        body: "가장 중요한 것부터요. <b>환급 신청</b>이에요.\n\n<b>어디서</b> - 이 페이지 상단의 「환급 신청」 버튼에서요. 자격이 되시면 보일 거예요.\n\n<b>언제까지</b> - 완주 후 <b>14일 이내</b>에 신청해주세요. 이 기간이 지나면 신청이 어려워요.\n\n<b>뭘 확인하나요</b> - 그동안 제출하신 것들을 저희가 확인해요. 45일 전부 완료됐는지, 통과 기준을 채운 제출인지를 봐요.\n\n확인이 끝나면 환급이 진행돼요. <b>오늘 안에 신청까지</b> 해두시는 걸 권해드려요 😊",
        note: "⚠️ 확인 필요 - 환급 신청 버튼 위치, 14일 기한, 심사 소요 기간을 실제 운영 정책으로 확정 후 반영할 것." },
      { title: "PJT 2 프로젝트, 다시 열어보세요",
        body: "몇 주 전 만드셨던 그 프로젝트 기억하시나요? 노션을 연결하고 지침만 써뒀던 거요.\n\n지금 다시 열어서 <b>「Week 2」</b>라고만 쳐보세요.\n\n<b>몇 주가 지났는데도 여전히 노션을 읽어서 답해줄 거예요.</b>\n\n이게 그때 만든 것의 힘이에요. 만들고 끝난 게 아니라, <b>지금도 그대로 돌아가는 설비</b>인 거죠.\n\n노션에서 값을 하나 바꿔보고 다시 물어보셔도 좋아요. 바뀐 내용으로 답할 거예요 😊",
        note: "PJT 2의 산출물이 시간이 지나도 살아있음을 직접 확인시킨다. 원본 커리큘럼의 'Live Artifact 대시보드' 표현은 현재 PJT 2 설계(노션 연결 프로젝트)와 맞지 않아 「Week n」 재실행으로 대체했다." },
      { title: "지금까지 만든 것들, 한자리에",
        visual: "courseRecap",
        body: "45일 동안 정말 많이 만드셨어요. 오늘 한번 모아보세요.\n\n한 달 조금 넘는 시간에 이만큼이요. {{name}}님, 진짜 잘하셨어요.",
        note: "학습 여정 전체를 한눈에 되짚는 슬라이드. 목록은 타임라인 그림(courseRecap)이 맡고 글은 짧게. Day 번호는 현재 커리큘럼 기준." },
      { title: "여기서 뭘 더 할 수 있나요?",
        body: "챌린지는 끝나지만 클로드는 안 끝나요. 몇 가지만 알려드릴게요.\n\n· <b>강의는 계속 열려 있어요.</b> 다시 보고 싶은 Day가 있으면 언제든 돌아오세요\n· <b>내 사이트는 계속 살아 있어요.</b> Vercel 무료 플랜이면 계속 유지돼요\n· <b>예약은 계속 돌아가요.</b> 필요 없어지면 끄시면 되고요\n\n오늘 배운 걸 <b>다음 주에도 써먹는 것.</b> 그게 이 챌린지의 진짜 완주예요.",
        note: "챌린지 종료 후에도 결과물과 습관이 지속됨을 안내해 학습 효과의 지속성을 강조." },
      { title: "상위 1% Claude 사용자",
        visual: "wrapBadge",
        body: "45일을 완주하신 {{name}}님께 이 배지를 드려요.\n\n과장이 아니에요. 저 아홉 개를 다 손에 익힌 사람은 정말 드물어요.\n\n이제 정말 그렇게 되셨어요. 45일 동안 함께해주셔서 고마워요. 앞으로도 잘 부탁드려요 😊",
        note: "코스의 마지막 화면. 정보 전달이 아니라 기념품이어야 해서 글을 3문단으로 줄이고, 수료 배지(wrapBadge)를 주인공으로 뒀다. Day 1의 핵심 메시지는 그림 안쪽 인용 카드가 회수한다." },
    ],
    mission: {
      title: "미션, 환급 신청하고 결과물 모으기",
      goal: "환급을 신청하고, 45일 동안 만든 결과물을 돌아봅니다.",
      steps: [
        "「환급 신청」 버튼을 눌러 신청을 완료한다",
        "PJT 2 프로젝트를 다시 열어 「Week 2」로 여전히 작동하는지 확인한다",
        "45일 동안 만든 결과물 중 <b>가장 마음에 드는 것 하나</b>를 고른다",
        "그걸 왜 골랐는지, 45일 동안 뭐가 가장 달라졌는지 적는다",
      ],
      fields: [
        { n: "①", label: "가장 마음에 드는 결과물과 그 이유", ph: "예: PJT 3에서 만든 제 사이트요. 친구한테 주소 보냈을 때가 제일 신기했어요" },
        { n: "②", label: "45일 동안 달라진 점", ph: "한 문단이면 충분해요. 「나 이제 이런 것도 할 줄 알아」 그 한 문장이면 더 좋고요" },
      ],
      checklist: [
        "환급 신청을 <b>완료</b>했다 (신청 완료 화면이 있다)",
        "PJT 2 프로젝트가 <b>여전히 정상 작동</b>한다",
        "가장 마음에 드는 결과물과 그 이유가 적혀 있다",
        "45일 동안 달라진 점이 <b>본인의 언어로</b> 적혀 있다",
      ],
      submit: { what: "환급 신청 완료 화면 + 소감", format: "이미지 + 텍스트", detail: "결과물과 소감은 위 <b>답변 작성</b> 칸에 적고, 환급 신청 완료 화면을 아래에 첨부해주세요" },
      tip: "소감은 길게 안 쓰셔도 돼요. 「나 이제 이런 것도 할 줄 알아」 딱 그 한 문장이면 충분해요. 그게 진짜니까요 😊",
    },
  };
})();

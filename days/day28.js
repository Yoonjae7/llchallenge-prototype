/*
 * Day 28 · 챕터 7 - 캔버스 편집 · 내보내기 (실습, 챕터 7 마지막 날)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* "말보다 손이 빠를 때가 있다"를 문장으로 설명하면 와닿지 않는다. 그래서 실제 캔버스에서
     요소를 하나 집었을 때 나타나는 선택 핸들(모서리 네 점)과 커서를 그대로 그렸다.
     선택된 블록이 미세하게 좌우로 움직여서 "지금 끌고 있는 중"으로 읽히게 했다 */
  V.canvasHandles = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconCursor } = UI;
    return (
      <div className={card}>
        <div className="rounded-2xl bg-white border border-gray-100 shadow-soft overflow-hidden">
          <div className="px-3 py-1.5 bg-gray-50/80 border-b border-gray-100 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-300" />
            <span className="w-2 h-2 rounded-full bg-amber-300" />
            <span className="w-2 h-2 rounded-full bg-emerald-300" />
            <span className="ml-1 text-[9px] font-black text-gray-400">캔버스</span>
          </div>
          <div className="p-3" style={{ background: "linear-gradient(135deg,#1E3A5F,#0F1F35)" }}>
            {/* 선택된 제목 블록, 핸들 4개가 붙어 있다 */}
            <div className="relative inline-block w-2/3" style={{ animation: "nudgeR 2.4s ease-in-out infinite" }}>
              <div className="h-3 rounded-full bg-white/80" />
              <span className="absolute -top-1 -left-1 w-1.5 h-1.5 rounded-[1px] bg-white border border-sky-400" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-[1px] bg-white border border-sky-400" />
              <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-[1px] bg-white border border-sky-400" />
              <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-[1px] bg-white border border-sky-400" />
              <span className="absolute -inset-[3px] rounded border border-sky-400/80 pointer-events-none" />
            </div>
            <div className="mt-2.5 space-y-1">
              <div className="h-1.5 w-full rounded-full bg-white/25" />
              <div className="h-1.5 w-5/6 rounded-full bg-white/25" />
            </div>
            {/* 커서 */}
            <span className="block w-4 h-4 text-white mt-1 ml-[45%]"
              style={{ animation: "floaty 2.4s ease-in-out infinite" }}><IconCursor /></span>
          </div>
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white border border-gray-100 px-2.5 py-2 text-center"
            style={{ animation: "revealUp .4s .3s both" }}>
            <div className="text-[9.5px] font-black text-gray-500">큰 건</div>
            <div className="text-[10.5px] font-black text-violet-600">말로</div>
          </div>
          <div className="rounded-xl bg-white border border-gray-100 px-2.5 py-2 text-center"
            style={{ animation: "revealUp .4s .42s both" }}>
            <div className="text-[9.5px] font-black text-gray-500">미세 조정은</div>
            <div className="text-[10.5px] font-black text-sky-600">손으로</div>
          </div>
        </div>
      </div>
    );
  }`);

  D[28] = {
    kind: "practice",
    title: "캔버스 편집, 내보내기",
    slides: [
      { title: "오늘은 손으로 만지고, 밖으로 꺼내요",
        body: "어제는 말로 만들었죠. 오늘은 <b>직접 만지고</b> <b>파일로 꺼내는</b> 걸 해볼 거예요.\n\n캔버스에서 직접 고치고, PPTX, PDF로 내보내고, 이걸 클로드 코드로 넘기는 흐름까지 맛봅니다.\n\n오늘로 Claude Design 챕터가 끝나요. 마지막 날이 제일 실용적이에요 😊",
        note: "챕터 7 마지막 날. 내보내기가 실무 체감이 가장 큰 기능이라 중심에 둔다." },
      { title: "말보다 손이 빠를 때가 있어요",
        visual: "canvasHandles",
        body: "「제목을 조금만 위로」를 말로 설명하는 것보다, 그냥 <b>끌어서 옮기는 게</b> 빠르죠.\n\nClaude Design에서는 요소를 끌어서 옮기고, 글자를 눌러서 바로 고치고, 고치고 싶은 부분만 콕 집어 다시 요청할 수 있어요.",
        note: "⚠️ 확인 필요, 캔버스 편집 도구의 실제 명칭과 위치를 출시 시점 UI에서 확인해 스크린샷 첨부. 선택 핸들 목업(canvasHandles)으로 '직접 만진다'를 그림이 설명한다." },
      { title: "밖으로 꺼내기",
        body: "완성했으면 파일로 꺼내야 쓸모가 있죠. <b>PPTX</b>는 회사에서 그대로 열리고, <b>PDF</b>는 인쇄, 공유용, <b>HTML</b>은 다음 챕터의 재료가 돼요. <b>.zip</b>과 <b>Canva로 보내기</b>도 있고요.\n\n특히 PPTX가 물건이에요. 발표 전날 밤에 「PPT 만들어야 하는데…」 하던 그 시간이 사라져요 😌\n\n다만 내보낸 뒤에는 파워포인트에서 <b>한 번 열어 확인</b>하세요. 폰트가 없으면 다르게 보일 수 있거든요.",
        note: "내보내기 후 확인 습관을 강조. 폰트 미설치로 인한 깨짐이 가장 흔한 사고. 포맷 목록 자체는 Day 26의 designExports에서 이미 그림으로 봤으므로 여기서는 글로만 짚는다." },
      { title: "그리고 이건 다음 챕터로 이어져요",
        body: "오늘 만든 걸 <b>클로드 코드로 넘기면</b> 진짜 웹사이트가 돼요.\n\n지금은 이렇게만 알아두세요. <b>Design에서 만든 화면 → 클로드 코드에 넘김 → 진짜 사이트 → 인터넷에 배포.</b>\n\n내일부터 그 여정이 시작돼요. 며칠 뒤엔 {{name}}님 이름이 들어간 주소를 갖게 되실 거예요 🌐\n\n오늘 만든 파일, 잘 보관해두세요. 재료가 되거든요 😉",
        note: "챕터 8~9, PJT 3로 이어지는 다리. 산출물을 보관하게 안내해야 나중에 재활용된다." },
    ],
    mission: {
      title: "미션, 손으로 다듬고 파일로 꺼내기",
      goal: "캔버스 직접 편집을 경험하고, 완성물을 PPTX와 PDF로 내보냅니다.",
      steps: [
        "어제 만든 슬라이드를 연다",
        "캔버스에서 <b>직접</b> 요소를 옮기거나 글자를 고쳐본다 (최소 2군데)",
        "말로 부분 수정도 한 번 요청해본다",
        "<b>PPTX</b>와 <b>PDF</b>로 각각 내보낸다",
        "내보낸 PPTX를 파워포인트에서 열어 제대로 보이는지 확인한다",
      ],
      fields: [
        { n: "①", label: "캔버스에서 직접 고친 부분", ph: "「제목을 위로 옮김」, 「소제목 글자를 직접 고침」처럼 한두 줄로 적어주세요" },
      ],
      checklist: [
        "내보낸 <b>PPTX 파일</b>이 첨부돼 있다",
        "PPTX를 실제로 열어본 화면이 있다 (글자가 깨지지 않았다)",
        "캔버스에서 <b>직접 고친 부분</b>이 무엇인지 적혀 있다",
        "어제 맞춘 톤이 <b>내보낸 파일에도 유지</b>돼 있다",
      ],
      submit: { what: "PPTX 파일 + 열어본 화면 + 직접 고친 부분", format: "파일 첨부 + 이미지 + 텍스트", detail: "직접 고친 부분은 위 <b>답변 작성</b> 칸에 적고, 내보낸 PPTX 파일과 파워포인트에서 연 화면을 아래에 첨부해주세요" },
      tip: "글자가 깨져 보이면 폰트 문제예요. 「많이 쓰는 기본 폰트로 바꿔줘」라고 하고 다시 내보내면 대부분 해결돼요 😊",
    },
  };
})();

/*
 * Day 38 · 챕터 10 - 폴더 맡기고 일괄 처리 (실습)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* Cowork 사고의 대부분은 "원본을 덮어썼다"에서 나온다. 그걸 막는 건 요청문 한 문장이라,
     나쁜 요청과 좋은 요청을 실제 문장 그대로 보여주고 결과 폴더가 어떻게 달라지는지를 붙였다.
     왼쪽은 원본 폴더에 빨간 경고가 겹치고, 오른쪽은 원본 옆에 새 폴더가 하나 더 생긴다 */
  V.outputLocation = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconFolder, IconXCircle, IconCheckCircle } = UI;
    return (
      <div className={card}>
        {/* 나쁜 요청 */}
        <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-2.5"
          style={{ animation: "revealUp .4s both" }}>
          <div className="flex items-center gap-1.5">
            <span className="shrink-0 w-3.5 h-3.5 text-rose-400"><IconXCircle /></span>
            <span className="text-[9.5px] font-bold text-gray-500 line-through decoration-rose-300">"파일들 정리해줘"</span>
          </div>
          <div className="mt-1.5 flex items-center gap-1.5">
            <div className="relative rounded-md bg-white border border-rose-200 px-2 py-1.5 flex items-center gap-1">
              <span className="w-3 h-3 text-rose-400"><IconFolder /></span>
              <span className="text-[8px] font-bold text-gray-500">원본 폴더</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-rose-500 text-white text-[7px] font-black grid place-items-center"
                style={{ animation: "pulseSoft 1.8s ease-in-out infinite" }}>!</span>
            </div>
            <span className="text-[8px] font-bold text-rose-500">덮어쓸 수도 있어요</span>
          </div>
        </div>

        {/* 좋은 요청 */}
        <div className="mt-2 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-2.5"
          style={{ animation: "revealUp .4s .2s both" }}>
          <div className="flex items-start gap-1.5">
            <span className="shrink-0 w-3.5 h-3.5 text-emerald-500 mt-[1px]"><IconCheckCircle /></span>
            <span className="text-[9.5px] font-bold text-gray-700 leading-snug">
              "정리된 결과는 <b className="text-emerald-700">새 폴더를 만들어서 거기</b>에 넣어줘. 원본은 그대로 둬"
            </span>
          </div>
          <div className="mt-1.5 flex items-center gap-1.5">
            <div className="rounded-md bg-white border border-gray-200 px-2 py-1.5 flex items-center gap-1">
              <span className="w-3 h-3 text-gray-400"><IconFolder /></span>
              <span className="text-[8px] font-bold text-gray-500">원본</span>
            </div>
            <span className="text-[9px] font-black text-emerald-500">+</span>
            <div className="rounded-md bg-white border border-emerald-300 px-2 py-1.5 flex items-center gap-1"
              style={{ animation: "popIn .35s .55s cubic-bezier(.2,.9,.3,1.15) both" }}>
              <span className="w-3 h-3 text-emerald-500"><IconFolder /></span>
              <span className="text-[8px] font-black text-emerald-700">정리본</span>
            </div>
          </div>
        </div>

        <div className="mt-2.5 rounded-xl px-3 py-2.5 text-center text-[10px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#10B981,#047857)" }}>
          <span className="text-white">결과를 어디에 둘지</span>까지 말해주세요
        </div>
      </div>
    );
  }`);

  D[38] = {
    kind: "practice",
    title: "폴더 맡기고 일괄 처리",
    slides: [
      { title: "오늘은 맡기는 연습 🧑‍🍳",
        body: "오늘은 실제로 폴더를 하나 맡겨볼 거예요.\n\n순서는 간단해요. <b>복사본 폴더 만들기 → Cowork에 맡기기 → 결과 확인하기.</b>\n\n어제 말씀드린 안전 수칙 기억하시죠? <b>복사본으로</b> 하세요. 오늘은 연습이니까요 😊",
        note: "복사본 사용을 실습 첫 단계로 강제해 습관화한다." },
      { title: "이런 일을 잘해요",
        body: "Cowork가 특히 잘하는 세 가지예요.\n\n<b>이름 정리</b>, 「이 폴더의 파일 이름을 <b>날짜_제목</b> 형식으로 통일해줘」\n\n<b>형식 변환</b>, 「이 폴더의 문서들을 전부 PDF로 바꿔서 <b>pdf 폴더</b>에 넣어줘」\n\n<b>요약 취합</b>, 「이 폴더의 문서를 각각 3줄로 요약해서 <b>요약.md</b> 파일 하나로 모아줘」\n\n공통점이 보이시나요? 전부 <b>혼자 하면 지루하고 오래 걸리는</b> 일이에요 😌",
        note: "세 가지 패턴이 미션의 선택지가 된다. '지루하고 반복적인 일'이 위임 판단 기준." },
      { title: "말할 때 요령 하나",
        visual: "outputLocation",
        body: "맡길 때 <b>결과를 어디에 둘지</b>까지 말해주세요. 이 한 문장이 사고를 막아줘요.\n\n그리고 처음엔 <b>파일 몇 개짜리 작은 폴더</b>로 시작하세요. 100개짜리로 첫 시도를 하면 잘못됐을 때 수습이 힘들어요 😅",
        note: "출력 위치 지정은 Cowork 사고 예방의 핵심 기법. 반드시 습관화시킨다. ❌/⭕ 요청문과 결과 폴더 차이는 그림(outputLocation)이 보여준다." },
      { title: "오늘의 미션",
        body: "작은 폴더 하나를 만들어서, 세 가지 중 하나를 맡겨보세요.\n\n파일이 없으시다고요? 만들면 돼요. 클로드에게 「<b>연습용 텍스트 파일 5개를 만들어줘</b>」라고 하면 됩니다 😄",
        note: "재료가 없어 이탈하는 경우를 막기 위해 파일 생성 방법까지 안내." },
    ],
    mission: {
      title: "미션, 폴더 맡기고 일괄 처리하기",
      goal: "Cowork에 폴더를 맡겨 여러 파일을 한 번에 처리해봅니다.",
      steps: [
        "연습용 폴더를 하나 만든다 (파일 5개 안팎, 원본이 있다면 <b>복사본</b>으로)",
        "Cowork를 연다",
        "세 가지 중 하나를 맡긴다, 이름 정리 / 형식 변환 / 요약 취합",
        "요청할 때 <b>결과를 어디에 둘지</b>도 함께 말한다",
        "진행 상황을 보면서 기다린다",
        "결과 폴더를 열어 제대로 됐는지 확인한다",
      ],
      fields: [
        { n: "①", label: "Cowork에게 보낸 요청 문구", ph: "결과를 어디에 둘지까지 포함된 문장을 그대로 붙여넣으세요" },
      ],
      checklist: [
        "<b>복사본</b> 또는 연습용 폴더로 작업했다 (소중한 원본이 아니다)",
        "요청 문구에 <b>결과를 어디에 둘지</b>가 들어 있다",
        "처리 <b>전</b> 폴더와 처리 <b>후</b> 폴더 화면이 둘 다 있다",
        "파일이 <b>2개 이상</b> 처리됐다",
      ],
      submit: { what: "처리 전/후 폴더 화면 + 요청 문구", format: "이미지 2장 + 텍스트", detail: "요청 문구는 위 <b>답변 작성</b> 칸에 적고, ① 처리 전 폴더 화면 ② 처리 후 결과 폴더 화면을 아래에 첨부해주세요" },
      tip: "결과가 엉뚱하면 <b>요청이 모호했을 가능성이 높아요.</b> 「날짜는 파일 안의 작성일 기준으로」처럼 기준을 하나 더 주면 확 좋아져요 😊",
    },
  };
})();

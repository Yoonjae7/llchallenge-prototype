/*
 * Day 39 · 챕터 10 - 미션 1, 숨은 파일 찾기 (실습)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* "이름이 아니라 내용으로 찾는다"가 오늘의 능력. 그래서 파일 목록을 실제 탐색기처럼 그리되
     이름은 전부 의미 없는 것들로 채우고, 그중 하나만 초록으로 켜지게 했다. 이름만 봐서는
     어느 게 정답인지 전혀 알 수 없다는 게 이 그림의 요점이라 파일명을 일부러 무의미하게 뒀다 */
  V.findByContent = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconDocFold, IconSearch, IconCheckCircle } = UI;
    const files = ["문서1.docx", "스캔0392.pdf", "새 폴더 (2)", "IMG_4471.png", "최종_final2.docx", "무제.txt"];
    const hitIndex = 4;
    return (
      <div className={card}>
        {/* 내용으로 찾는 요청 */}
        <div className="rounded-xl bg-white border border-gray-100 shadow-soft px-2.5 py-2 flex items-start gap-1.5"
          style={{ animation: "revealUp .4s both" }}>
          <span className="shrink-0 w-3.5 h-3.5 text-brand-500 mt-[1px]"><IconSearch /></span>
          <span className="text-[9px] font-bold text-gray-700 leading-snug">
            "<b className="text-ink">김민수 대리 견적서, 8월 20일 마감</b>이 언급된 파일 찾아줘"
          </span>
        </div>

        {/* 이름만 봐서는 아무것도 알 수 없는 목록 */}
        <div className="mt-2 rounded-2xl bg-white border border-gray-100 shadow-soft overflow-hidden">
          <div className="px-2.5 py-1.5 bg-gray-50/80 border-b border-gray-100 text-[8.5px] font-black text-gray-400">
            이름만 봐서는 알 수 없어요
          </div>
          <div className="p-1.5 space-y-1">
            {files.map((f, i) => {
              const hit = i === hitIndex;
              return (
                <div key={i}
                  className={"flex items-center gap-1.5 rounded-md px-1.5 py-1 border " +
                    (hit ? "bg-emerald-50 border-emerald-300" : "bg-gray-50/50 border-transparent")}
                  style={hit ? { animation: "popIn .35s .75s cubic-bezier(.2,.9,.3,1.15) both" } : undefined}>
                  <span className={"shrink-0 w-2.5 h-2.5 " + (hit ? "text-emerald-600" : "text-gray-300")}>
                    <IconDocFold />
                  </span>
                  <span className={"text-[8px] font-bold truncate " + (hit ? "text-emerald-800" : "text-gray-400")}>{f}</span>
                  {hit && (
                    <span className="ml-auto shrink-0 w-3 h-3 text-emerald-500"
                      style={{ animation: "pulseSoft 2s 1.1s ease-in-out infinite" }}><IconCheckCircle /></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-2.5 rounded-xl px-3 py-2.5 text-center text-[10px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#10B981,#047857)" }}>
          이름이 아니라 <span className="text-white">내용으로</span> 찾아요
        </div>
      </div>
    );
  }`);

  D[39] = {
    kind: "practice",
    title: "미션 1, 숨은 파일 찾기",
    slides: [
      { title: "오늘은 다른 능력을 보여드릴게요 🔍",
        body: "어제는 폴더를 통째로 정리했죠. 오늘은 <b>정반대의 상황</b>이에요.\n\n이런 적 있으시죠? 「그 파일이 어디 있더라… 이름이 뭐였는지도 기억이 안 나…」 다운로드 폴더엔 파일이 잔뜩 쌓여 있고 이름은 죄다 <b>문서1, 스캔0392, 새 폴더 (2)</b> 같은 것들이죠.\n\nCowork는 이럴 때도 쓸 수 있어요. <b>이름이 아니라 내용으로 찾아주거든요.</b>",
        note: "Day 38의 '정리'와 대비되는 '찾기' 능력. 학습자 공감대가 큰 페인포인트로 진입해 두 Day의 차별점을 명확히 한다." },
      { title: "이렇게 요청하세요",
        visual: "findByContent",
        body: "파일 이름을 몰라도 괜찮아요. <b>내용을 설명</b>하면 돼요.\n\nCowork가 폴더 안 파일을 하나씩 열어보면서 찾아줘요. 몇 번째 파일에서 찾았는지도 알려줍니다.\n\n조건은 구체적일수록 좋아요. <b>이름·날짜·금액</b>처럼 숫자나 고유명사가 들어가면 훨씬 정확해요.",
        note: "구체적 조건(이름·날짜·금액 등)을 줄수록 정확도가 올라간다는 걸 예시로 체감시킨다. 의미 없는 파일명 목록(findByContent)이 '이름으로는 못 찾는다'를 보여준다." },
      { title: "찾았으면 한 걸음 더",
        body: "찾았으면 그 자리서 끝내지 말고 하나 더 시켜보세요. <b>「이 파일 이름을 내용에 맞게 바꿔줘」</b>\n\n찾기 + 정리를 이어 붙이면, 다시는 이 파일을 못 찾는 일이 없어요. 어제 배운 것과 오늘 배운 것을 <b>한 번에 쓰는</b> 방법이에요.",
        note: "Day 38(정리)과 Day 39(찾기)를 마지막에 결합시켜 두 Day의 학습이 자연스럽게 이어지게 만든다." },
      { title: "오늘의 미션",
        body: "폴더에서 조건에 맞는 파일 하나를 Cowork로 찾고, 이름까지 알아보게 바꿔보세요.\n\n연습용 폴더가 없으시면 클로드에게 「<b>내용이 제각각인 연습용 파일 10개를 이름은 의미 없게 만들어줘</b>」라고 하시면 돼요 😊",
        note: "샘플 폴더 미제공 시에도 진행 가능하도록 파일 생성 경로를 안내." },
    ],
    mission: {
      title: "미션, 숨은 파일 찾기",
      goal: "이름이 아닌 내용을 기준으로 원하는 파일을 Cowork로 찾아내고, 찾은 파일의 이름을 정리합니다.",
      steps: [
        "파일 10개 안팎의 폴더를 준비한다 (없으면 클로드에게 연습용 파일을 만들어달라고 한다)",
        "그중 <b>한 파일에만</b> 아래 조건의 내용을 넣어둔다",
        "Cowork에 폴더를 지정하고, 아래 조건으로 파일을 찾아달라고 요청한다",
        "몇 번째 파일에서 어떤 근거로 찾았는지 결과를 확인한다",
        "찾은 파일의 이름을 내용에 맞게 바꿔달라고 이어서 요청한다",
      ],
      given: {
        label: "찾을 조건 - 그대로 요청하세요",
        text: "이 폴더 파일들 중에서 김민수 대리가 작성한 견적서, 제출 기한 8월 20일, 총액 340만원이 언급된 파일을 찾아줘",
      },
      fields: [
        { n: "①", label: "찾아낸 파일의 원래 이름과 바꾼 이름", ph: "예: 문서1.docx → 20260820_김민수_견적서.docx" },
      ],
      checklist: [
        "Cowork가 조건에 맞는 파일을 <b>정확히</b> 찾아냈다",
        "몇 개 파일 중에서 어떤 파일을 찾았는지 화면에 보인다",
        "찾은 파일의 이름이 <b>내용에 맞게</b> 바뀌었다",
      ],
      submit: { what: "찾기 요청 화면 + 결과 화면 + 이름 변경 후 화면", format: "이미지 3장 + 텍스트", detail: "바뀐 파일 이름은 위 <b>답변 작성</b> 칸에 적고, ① 찾아달라고 요청한 화면 ② 찾아낸 파일과 근거가 나온 화면 ③ 이름을 바꾼 뒤 화면을 아래에 첨부해주세요" },
      tip: "조건은 구체적일수록 좋아요. 이름·날짜·금액처럼 <b>숫자나 고유명사</b>가 하나라도 들어가면 훨씬 정확하고 빠르게 찾아요.",
    },
  };
})();

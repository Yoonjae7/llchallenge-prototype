/*
 * Day 31 · 챕터 8 - 파일 만들고 수정하기, 첫 결과물 (실습)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 비개발자가 처음 코드를 만지는 날이라 난이도보다 성공 경험이 우선이다. 그래서 "한 번에
     완벽하게"가 아니라 "대충 만들고 여러 번 고친다"는 리듬 자체를 그림으로 보여준다.
     v1 → v2 → v3 로 갈수록 페이지가 촘촘해지고, 사이의 수정 요청 말풍선이 계속 흘러간다 */
  V.buildLoop = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconArrowSm } = UI;
    const steps = [
      { v: "v1", rows: 2, tone: "bg-gray-200", label: "일단 만들기" },
      { v: "v2", rows: 3, tone: "bg-brand-200", label: "색 바꾸기" },
      { v: "v3", rows: 4, tone: "bg-brand-400", label: "칸 늘리기" },
    ];
    return (
      <div className={card}>
        <div className="flex items-stretch gap-1.5">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="flex-1 min-w-0 rounded-xl bg-white border border-gray-100 shadow-soft p-2"
                style={{ animation: "revealUp .4s " + (i * .22) + "s both" }}>
                <div className="text-[8px] font-black text-gray-400 mb-1">{s.v}</div>
                <div className="rounded-md border border-gray-100 p-1.5 space-y-1">
                  <div className={"h-1.5 rounded-full " + s.tone} style={{ width: "70%" }} />
                  {Array.from({ length: s.rows }, (_, r) => (
                    <div key={r} className="h-1 rounded-full bg-gray-200" style={{ width: (95 - r * 12) + "%" }} />
                  ))}
                </div>
                <div className="mt-1.5 text-[7.5px] font-bold text-gray-500 text-center truncate">{s.label}</div>
              </div>
              {i < steps.length - 1 && (
                <span className="self-center shrink-0 text-brand-300"
                  style={{ animation: "nudgeR 1.6s " + (i * .3) + "s ease-in-out infinite" }}>
                  <IconArrowSm />
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-2.5 rounded-xl bg-white border border-gray-100 px-2.5 py-2 space-y-1">
          {["글씨가 너무 작아, 키워줘", "배경색을 더 밝게 바꿔줘", "맨 아래에 SNS 자리 만들어줘"].map((t, i) => (
            <div key={i} className="flex items-center gap-1.5"
              style={{ animation: "revealUp .35s " + (.7 + i * .12) + "s both" }}>
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span className="text-[8.5px] font-semibold text-gray-600 truncate">"{t}"</span>
            </div>
          ))}
        </div>

        <div className="mt-2.5 rounded-xl px-3 py-2.5 text-center text-[10.5px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#FF8747,#E05500)", animation: "revealUp .4s 1.1s both" }}>
          한 번에 완벽하게 <span className="text-white/70">말고</span>, 여러 번 고치기
        </div>
      </div>
    );
  }`);

  D[31] = {
    kind: "practice",
    title: "파일 만들고 수정하기, 첫 결과물",
    slides: [
      { title: "오늘, 진짜로 뭔가 만들어져요 ✨",
        body: "어제까지는 준비였어요. 오늘은 <b>{{name}}님 컴퓨터에 진짜 파일이 생기는 날</b>이에요.\n\n비개발자분들에겐 이게 좀 신기한 경험일 거예요. 말 몇 마디에 폴더 안에 파일이 툭 하고 생기거든요.\n\n오늘은 어렵게 안 갈게요. <b>「된다」는 걸 느끼는 게</b> 오늘의 목표예요 😊",
        note: "비개발자가 처음 코드를 만지는 날. 난이도보다 성공 경험이 우선이다." },
      { title: "이렇게 시켜보세요",
        body: "클로드 코드를 켜고 어제 만든 폴더에서 이렇게 말해보세요.\n\n「<b>내 소개 페이지를 만들어줘.</b> 맨 위에 이름과 한 줄 소개, 가운데에 내가 할 줄 아는 것 3가지, 아래에 연락처. 색은 차분한 톤으로, 휴대폰에서도 잘 보이게」\n\n그러면 폴더 안에 파일이 생겨요. 열어보면 진짜 웹페이지예요.",
        note: "구체적 예시 프롬프트를 제공해 첫 시도의 실패 확률을 낮춘다. PJT 3의 재료가 되는 주제이기도 하다." },
      { title: "고치는 것도 해봐야 해요",
        visual: "buildLoop",
        body: "만드는 것만큼 중요한 게 <b>고치기</b>예요. 실제로는 고치는 시간이 훨씬 길거든요.\n\n한 번에 완벽하게 만들려고 하지 마세요. <b>대충 만들고 여러 번 고치는 게</b> 훨씬 빠르고 결과도 좋아요. 아티팩트 때랑 똑같죠? 😊",
        note: "반복 수정이 정상 과정임을 각인시킨다. 챕터 3의 학습과 동일한 원리 - v1→v3로 촘촘해지는 그림(buildLoop)이 그 리듬을 대신 설명한다." },
      { title: "오늘의 미션",
        body: "만들고, 세 번 이상 고치고, 파일이 생긴 걸 확인하면 끝이에요.\n\n오늘 만든 이 페이지, <b>지우지 마세요.</b> 며칠 뒤 PJT 3에서 이게 재료가 되거든요 😉\n\n아, 그리고 아직 이건 {{name}}님 컴퓨터에만 있어요. 남에게 보여줄 수는 없어요. 그건… 조금만 기다려주세요 🌐",
        note: "PJT 3 재료로 보존하게 안내 + 배포 챕터에 대한 갈증을 만든다." },
    ],
    mission: {
      title: "미션, 첫 결과물 만들기",
      goal: "클로드 코드로 실제 파일을 만들고, 말로 여러 번 고쳐봅니다.",
      steps: [
        "어제 연결한 폴더에서 클로드 코드를 연다",
        "「내 소개 페이지를 만들어줘」로 시작해 구체적으로 요청한다",
        "만들어진 파일을 열어 화면을 확인한다",
        "마음에 안 드는 부분을 <b>3번 이상</b> 말로 고친다",
        "폴더를 열어 파일이 실제로 생겼는지 확인한다",
      ],
      fields: [
        { n: "①", label: "수정 요청 3개", ph: "실제로 보낸 수정 문구 3개를 줄바꿈해서 적어주세요\n예: 글씨가 너무 작아, 키워줘" },
      ],
      checklist: [
        "폴더 안에 <b>파일이 생긴 것</b>이 보인다",
        "그 파일을 열었을 때 <b>페이지가 제대로 보인다</b>",
        "수정 요청을 <b>3번 이상</b> 했고, 그 문구가 적혀 있다",
        "최종 화면에 이름·소개·할 줄 아는 것이 들어 있다",
      ],
      submit: { what: "완성 화면 + 폴더 화면 + 수정 문구 3개", format: "이미지 2장 + 텍스트", detail: "수정 문구 3개는 위 <b>답변 작성</b> 칸에 적고, ① 만들어진 페이지를 연 화면과 ② 파일이 들어 있는 폴더 화면을 아래에 첨부해주세요" },
      tip: "결과가 이상하게 나와도 당황하지 마세요. 「이거 좀 이상한데, 다시 만들어줘」라고 하면 돼요. 이 챌린지에서 가장 자주 쓰게 될 말이에요 😄",
    },
  };
})();

/*
 * Day 35 · PJT 3 (1/2) - 내 사이트 구상하고 만들기
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 자유 주제를 주면 뭘 만들지 정하다 하루가 간다. 그래서 3택1인데, 이걸 목록으로 나열하면
     또 고민이 길어진다. 각 선택지를 실제 화면 미니 목업으로 보여줘서 "이렇게 생긴 걸 만든다"가
     바로 보이게 했다 - 고르는 시간을 줄이는 게 이 그림의 목적이다 */
  V.pjt3Themes = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconPerson, IconTarget, IconCalc } = UI;
    const themes = [
      { n: "①", Icon: IconPerson, name: "자기소개", ex: "포트폴리오, 생일 카운트다운",
        tone: "text-sky-600", bg: "bg-sky-50", bd: "border-sky-200", chip: "bg-sky-500" },
      { n: "②", Icon: IconTarget, name: "나만의 게임", ex: "성격 테스트, 밸런스 게임",
        tone: "text-violet-600", bg: "bg-violet-50", bd: "border-violet-200", chip: "bg-violet-500" },
      { n: "③", Icon: IconCalc, name: "실용 앱", ex: "N빵 계산기, 세계 시간 비교",
        tone: "text-emerald-600", bg: "bg-emerald-50", bd: "border-emerald-200", chip: "bg-emerald-500" },
    ];
    return (
      <div className={card}>
        <div className="space-y-1.5">
          {themes.map((t, i) => (
            <div key={i} className={"rounded-2xl border px-2.5 py-2 flex items-center gap-2 " + t.bg + " " + t.bd}
              style={{ animation: "revealUp .4s " + (i * .14) + "s both" }}>
              <span className={"shrink-0 w-8 h-8 rounded-lg bg-white shadow-soft grid place-items-center p-1.5 " + t.tone}
                style={{ animation: "floaty " + (3.2 + i * .4) + "s " + (i * .3) + "s ease-in-out infinite" }}>
                <t.Icon />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <span className={"rounded-full px-1.5 text-[8px] font-black text-white " + t.chip}>{t.n}</span>
                  <span className={"text-[11px] font-black " + t.tone}>{t.name}</span>
                </div>
                <div className="mt-0.5 text-[8.5px] font-semibold text-gray-500 truncate">{t.ex}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2.5 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-3 py-2 text-center"
          style={{ animation: "revealUp .4s .6s both" }}>
          <div className="text-[9.5px] font-black text-gray-600">셋 다 준비물이 없어요</div>
          <div className="mt-0.5 text-[8.5px] font-semibold text-gray-400">내 정보만 있으면 되거나, 그것조차 필요 없어요</div>
        </div>
      </div>
    );
  }`);

  D[35] = {
    kind: "project",
    title: "PJT 3, 내 사이트 만들어서 배포하기 (1/2일차)",
    slides: [
      { title: "PJT 3, 1일차, 내 사이트 구상하고 만들기",
        body: "이틀 동안 <b>내 이름이 들어간 사이트</b>를 만들어서 인터넷에 올립니다.\n\n오늘은 <b>고르고, 만들고, 확인</b>까지. 내일은 <b>배포</b>해서 진짜 주소를 갖습니다.\n\n주제는 자유가 아니라 3개 중 하나예요. 뭘 만들지 고민하다 하루를 다 쓰지 않도록요.",
        note: "PJT 3 첫날. 자유 주제가 아니라 3택1임을 먼저 명확히 해 선택 부담을 줄인다." },
      { title: "3개 중 하나를 고르세요",
        visual: "pjt3Themes",
        body: "① <b>포트폴리오/자기소개</b>, 자랑스러운 일, 수상, 취미, 생일 등을 담은 나만의 페이지\n\n② <b>나만의 게임</b>, 성격 테스트, 밸런스 게임처럼 답하면 결과가 나오는 것\n\n③ <b>나만의 실용 앱</b>, N빵 계산기나 세계 시간 비교기처럼 넣으면 그 자리서 결과가 나오는 것\n\n셋 다 <b>외부 자료가 필요 없어요.</b>",
        note: "3개 축이 개인, 감성 / 재미, 인터랙션 / 실용으로 안 겹침. ③은 저장이 필요 없는 종류로 한정, 입력하면 그 자리에서 결과가 나오고 끝나는 것만. 그림(pjt3Themes)이 선택지를 한눈에 보여줘 고르는 시간을 줄인다." },
      { title: "순서",
        body: "1️⃣ 셋 중 하나를 고른다\n\n2️⃣ 클로드 코드에게 <b>어떤 화면을 원하는지</b> 대화로 구상한다 (색, 구성, 기능)\n\n3️⃣ 구현해달라고 요청한다, <b>Claude Design은 여기서 쓰지 않아요.</b> 클로드 코드가 코드로 바로 만들어요\n\n4️⃣ 로컬에서 <b>미리보기</b>로 확인하고, 마음에 안 드는 부분을 말로 고친다\n\n5️⃣ 완성되면 화면을 캡처해둔다",
        note: "Claude Design 미사용을 명시, 배포까지 도달하는 게 목적이라 디자인 다듬기에 시간 쓰지 않게 유도." },
      { title: "내일 이어서 씁니다",
        body: "오늘 만든 이 프로젝트, <b>지우지 마세요.</b> 내일 이걸 그대로 배포합니다.\n\n아직은 {{name}}님 컴퓨터에만 있어요. 내일 인터넷에 올라가요 🌐",
        note: "2일차가 1일차 결과물에 전적으로 의존." },
    ],
    mission: {
      title: "PJT 3 (1/2), 사이트 고르고 만들기",
      goal: "3개 주제 중 하나를 골라 클로드 코드로 구현하고, 로컬에서 확인합니다.",
      steps: [
        "자기소개 / 나만의 게임 / 실용 앱 중 하나를 고른다",
        "클로드 코드와 대화하며 화면 구성을 구상한다",
        "구현해달라고 요청한다",
        "로컬 미리보기로 확인하고 마음에 안 드는 부분을 고친다",
        "완성 화면을 캡처한다",
      ],
      fields: [
        { n: "①", label: "고른 주제", ph: "①②③ 중 하나와, 구체적으로 뭘 만들었는지 한 줄로 적어주세요" },
        { n: "②", label: "클릭하면 반응하는 동작", ph: "예: 생일까지 남은 날짜가 자동으로 계산돼요 / 버튼을 누르면 결과가 나와요" },
      ],
      checklist: [
        "3개 주제 중 <b>하나</b>를 골라 만들었다",
        "로컬에서 <b>실제로 열리는</b> 화면이 있다",
        "클릭하거나 입력하면 <b>반응하는 동작</b>이 최소 1개 있다",
      ],
      submit: { what: "고른 주제 + 로컬 미리보기 화면", format: "텍스트 + 이미지", detail: "고른 주제와 동작은 위 <b>답변 작성</b> 칸에 적고, 로컬에서 열어본 화면을 아래에 첨부해주세요" },
      tip: "뭘 만들지 막막하면 클로드 코드에게 「이 주제로 만들 수 있는 화면 3가지 제안해줘」라고 물어보세요. 그중 하나를 고르면 훨씬 수월해요.",
    },
  };
})();

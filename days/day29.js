/*
 * Day 29 · 챕터 8 - 환경 세팅 한 번에 (실습)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 이 Day 는 "설치할 게 없다"는 안심이 전부다. 그래서 다운로드·설치 과정을 그리는 대신
     이미 갖고 있는 데스크탑 앱을 열면 그 안에 Code 와 Cowork 가 들어 있는 모습으로 그렸다.
     두 줄에 초록 체크가 순서대로 켜지면서 "이미 있음"이 확인되는 리듬을 준다 */
  V.insideApp = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconCheckCircle, IconFolder, IconArchive } = UI;
    const items = [
      { Icon: IconFolder, name: "Claude Code", desc: "파일을 만들고 고쳐요" },
      { Icon: IconArchive, name: "Cowork", desc: "폴더를 통째로 맡겨요" },
    ];
    return (
      <div className={card}>
        <div className="rounded-2xl bg-white border border-gray-100 shadow-soft overflow-hidden">
          <div className="px-3 py-2 bg-gray-50/80 border-b border-gray-100 flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-md bg-brand-500 grid place-items-center text-white text-[8px] font-black">C</span>
            <span className="text-[9.5px] font-black text-ink">클로드 데스크탑 앱</span>
            <span className="ml-auto text-[8px] font-bold text-gray-400">이미 설치돼 있어요</span>
          </div>
          <div className="p-2.5 space-y-1.5">
            {items.map((it, i) => (
              <div key={i} className="rounded-xl border border-emerald-200 bg-emerald-50/60 px-2.5 py-2 flex items-center gap-2"
                style={{ animation: "revealUp .4s " + (.2 + i * .18) + "s both" }}>
                <span className="shrink-0 w-7 h-7 rounded-lg bg-white shadow-soft grid place-items-center text-emerald-600 p-1.5">
                  <it.Icon />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[10.5px] font-black text-ink">{it.name}</div>
                  <div className="text-[8.5px] font-semibold text-gray-500">{it.desc}</div>
                </div>
                <span className="shrink-0 w-4 h-4 text-emerald-500"
                  style={{ animation: "popIn .3s " + (.55 + i * .18) + "s cubic-bezier(.2,.9,.3,1.15) both" }}>
                  <IconCheckCircle />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2.5 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-3 py-2 text-center">
          <div className="text-[9px] font-bold text-gray-400 line-through">터미널 · 설치 · 명령어</div>
          <div className="mt-0.5 text-[10px] font-black text-emerald-600">하나도 안 해요</div>
        </div>

        <div className="mt-2.5 rounded-xl px-3 py-2.5 text-center text-[10.5px] font-black text-white"
          style={{ background: "linear-gradient(135deg,#10B981,#047857)", animation: "revealUp .4s .8s both" }}>
          켜면 바로 돼요
        </div>
      </div>
    );
  }`);

  D[29] = {
    kind: "practice",
    title: "환경 세팅 한 번에",
    slides: [
      { title: "잠깐만요, 설치할 게 없어요 😌",
        visual: "insideApp",
        body: "이제부터 <b>클로드 코드</b>를 씁니다. 개발 도구예요. 이 말 듣고 「아 나 컴퓨터 잘 못하는데」 하셨죠? 안심하세요.\n\n<b>따로 설치할 게 없어요.</b> 이미 쓰고 계신 데스크탑 앱 안에 들어 있어요. 터미널에 뭘 깔거나 검은 화면에 명령어를 치거나, 그런 거 안 합니다.",
        note: "비개발자의 진입 공포를 첫 화면에서 해소하는 것이 이 Day의 전부. '설치 없음'을 그림(insideApp)으로 못 박고 글은 짧게." },
      { title: "작업 폴더를 하나 만들어요",
        body: "딱 하나 준비할 게 있어요. <b>작업할 폴더</b>요.\n\n클로드 코드는 <b>폴더 하나를 정해서 그 안에서만</b> 일해요. 그래야 엉뚱한 파일을 건드리지 않거든요.\n\n바탕화면이든 문서 폴더든 편한 곳에 새 폴더를 하나 만들어주세요.\n\n💡 팁 하나. 폴더 이름은 <b>영어로, 띄어쓰기 없이</b> 만드는 게 좋아요 (<b>my-site</b>처럼요). 나중에 웹사이트로 만들 때 한글이나 공백이 문제를 일으키는 경우가 가끔 있거든요.",
        note: "폴더명 영문·무공백 권장은 배포 단계(챕터 9)의 사고를 미리 막는 예방 조치." },
      { title: "열어보면 이런 느낌이에요",
        body: "클로드 코드를 켜면 <b>지금 어느 폴더에서 일하고 있는지</b>, <b>말을 거는 입력창</b>, 그리고 진행 표시가 보여요.\n\n채팅이랑 크게 다르지 않아요. 차이는 하나예요. <b>여기서는 클로드가 진짜 파일을 만들고 고쳐요.</b>\n\n대화창에서는 결과를 보여주기만 했다면, 여기서는 {{name}}님 컴퓨터에 <b>실제 파일이 생겨요.</b>\n\n오늘은 켜서 폴더만 연결하면 끝이에요 😊",
        note: "⚠️ 확인 필요 - Claude Code 진입 경로(데스크탑 앱 내 Code 탭)와 폴더 연결 방식의 실제 화면을 캡처해 첨부할 것." },
    ],
    mission: {
      title: "미션, 클로드 코드 열고 폴더 연결하기",
      goal: "설치 없이 클로드 코드를 켜고, 앞으로 작업할 폴더를 연결합니다.",
      steps: [
        "컴퓨터에 새 폴더를 하나 만든다 (영어 이름, 띄어쓰기 없이)",
        "클로드 데스크탑 앱에서 <b>Claude Code</b>를 연다",
        "방금 만든 폴더를 작업 폴더로 연결한다",
        "「이 폴더에 뭐가 있어?」라고 물어본다 - 비어 있다고 답하면 연결 성공이에요",
      ],
      fields: [
        { n: "①", label: "내가 만든 폴더 이름", ph: "예: my-site (영어, 띄어쓰기 없이)" },
      ],
      checklist: [
        "클로드 코드 화면에 <b>연결된 폴더 경로</b>가 보인다",
        "폴더 이름이 <b>영어이고 띄어쓰기가 없다</b>",
        "「이 폴더에 뭐가 있어?」에 대한 클로드의 답이 화면에 보인다",
      ],
      submit: { what: "클로드 코드 화면 스크린샷 1장", format: "이미지 (png / jpg) + 텍스트", detail: "폴더 이름은 위 <b>답변 작성</b> 칸에 적고, 연결된 폴더 경로와 첫 질문·답변이 함께 보이는 화면을 아래에 첨부해주세요" },
      tip: "폴더가 안 보이면 앱을 완전히 껐다가 다시 켜보세요. 이게 의외로 잘 들어요 😄\n\n이 폴더는 <b>내일도 그대로 쓰니</b> 지우지 말아주세요.",
    },
  };
})();

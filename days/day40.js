/*
 * Day 40 · 챕터 10 - 미션 2, 폴더 통째로 넘겨 배포 (실습, 챕터 10 와우 모먼트)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 이 Day 의 감정은 "따로 배운 셋이 한 문장으로 합쳐진다"이다. 그래서 세 갈래가 아래로 모여
     하나의 주소로 착지하는 모양으로 그렸다. 세 칩이 순서대로 켜지고, 합류 지점의 주소 바가
     마지막에 뜨면서 "이게 다 한 번의 요청"이라는 게 읽히게 했다 */
  V.threeCombined = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconArchive, IconFolder, IconUpload } = UI;
    const parts = [
      { Icon: IconArchive, label: "Cowork", desc: "폴더 읽기", tone: "text-brand-600", bg: "bg-brand-50", bd: "border-brand-200" },
      { Icon: IconFolder, label: "클로드 코드", desc: "사이트 만들기", tone: "text-violet-600", bg: "bg-violet-50", bd: "border-violet-200" },
      { Icon: IconUpload, label: "Vercel", desc: "배포하기", tone: "text-sky-600", bg: "bg-sky-50", bd: "border-sky-200" },
    ];
    return (
      <div className={card}>
        <div className="grid grid-cols-3 gap-1.5">
          {parts.map((p, i) => (
            <div key={i} className={"rounded-xl border px-1.5 py-2 text-center " + p.bg + " " + p.bd}
              style={{ animation: "popIn .35s " + (i * .15) + "s cubic-bezier(.2,.9,.3,1.15) both" }}>
              <span className={"inline-flex w-6 h-6 rounded-lg bg-white shadow-soft items-center justify-center p-1.5 " + p.tone}>
                <p.Icon />
              </span>
              <div className={"mt-1 text-[8.5px] font-black " + p.tone}>{p.label}</div>
              <div className="text-[7.5px] font-semibold text-gray-500 leading-tight">{p.desc}</div>
            </div>
          ))}
        </div>

        {/* 세 갈래가 한 점으로 모인다 */}
        <div className="relative h-7">
          <svg viewBox="0 0 120 28" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M20 2 V10 Q20 16 60 16 M60 2 V16 M100 2 V10 Q100 16 60 16 M60 16 V26" className="text-gray-300" />
          </svg>
          <span className="absolute left-1/2 -ml-[3px] top-1 w-1.5 h-1.5 rounded-full bg-brand-400 connector-drip" />
          <span className="absolute left-1/2 -ml-[3px] top-1 w-1.5 h-1.5 rounded-full bg-violet-400 connector-drip"
            style={{ animationDelay: ".8s" }} />
        </div>

        <div className="rounded-xl border border-emerald-300 bg-emerald-50 px-2.5 py-2"
          style={{ animation: "revealUp .4s .7s both" }}>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" style={{ animation: "pulseSoft 1.8s ease-in-out infinite" }} />
            <span className="text-[9.5px] font-black text-emerald-800 truncate">my-gallery.vercel.app</span>
          </div>
          <div className="mt-0.5 text-[8px] font-semibold text-emerald-600">한 번의 요청으로 여기까지</div>
        </div>
      </div>
    );
  }`);

  D[40] = {
    kind: "practice",
    title: "미션 2, 폴더 통째로 넘겨 배포",
    slides: [
      { title: "오늘은 챕터 10의 와우 모먼트예요 ✨",
        visual: "threeCombined",
        body: "지금까지 배운 걸 다 엮어볼 거예요. <b>폴더 하나를 통째로 넘겨서, 배포까지 시키는 것.</b>\n\n어제까지 따로따로 배운 것들이 오늘 한 문장 안에서 만나요.\n\n오늘은 다른 거 안 섞을게요. 이거 하나에만 집중하세요 😊",
        note: "와우 모먼트, 다른 미션과 절대 묶지 않는다. 앞서 배운 세 기술의 통합 경험이 이 Day의 전부. 세 갈래가 하나의 주소로 합류하는 그림(threeCombined)이 그 통합을 보여준다." },
      { title: "이렇게 해보세요",
        body: "사진 폴더나 자료 폴더 하나를 준비하세요. 그리고 이렇게 말해보세요.\n\n「<b>이 폴더에 있는 사진들로 갤러리 웹페이지를 만들어줘.</b> 각 사진 밑에 파일 이름을 제목으로 넣고, 격자 형태로 배치해줘. 다 만들면 Vercel에 배포까지 해줘」\n\n한 문장인데 안에 <b>세 가지 일</b>이 들어 있어요. 폴더 읽기, 사이트 만들기, 배포하기.\n\n예전 같으면 며칠 걸렸을 일이 지금은 한 번의 요청이에요.",
        note: "사진 갤러리는 결과가 시각적으로 확실히 드러나 만족도가 높은 소재. 다른 파일 유형으로 대체 가능함을 팁에서 안내." },
      { title: "이게 왜 특별하냐면요",
        body: "여기서 잠깐 돌아보세요. {{name}}님이 지금 한 일이에요.\n\n<b>여러 파일을 한 번에</b> 처리했고, <b>진짜 웹사이트</b>를 만들었고, <b>인터넷에 올려서</b> 아무나 볼 수 있게 했어요.\n\n한 달 전이라면 상상도 못 했을 일이에요. 그런데 지금은 <b>말 한 마디</b>로 하고 계세요.\n\n이게 Day 1에서 보여드린 그거예요. 「폴더를 던져주면 알아서 처리해주는 AI 비서」, 기억나세요? 지금 그걸 하고 계신 거예요 🎉",
        note: "Day 1의 로드맵 슬라이드(quadVisuals)를 여기서 회수. '약속했던 게 지금 실현됐다'는 감각을 만든다." },
      { title: "오늘의 미션",
        body: "사진이든 자료든, 폴더 하나로 <b>웹사이트를 만들고 배포까지</b> 끝내보세요.\n\n결과가 나오면 <b>주소를 직접 열어보세요.</b> 그리고 잠깐 감상하셔도 좋아요. 진짜 잘하셨거든요 😊",
        note: "성취를 음미하게 하는 클로징. 다음 챕터로 넘어가기 전 잠깐의 여유를 준다." },
    ],
    mission: {
      title: "미션, 폴더 통째로 넘겨서 배포시키기",
      goal: "Cowork, 클로드 코드, Vercel을 한 번에 엮어, 폴더로 사이트를 만들고 배포합니다.",
      steps: [
        "사진이나 자료가 담긴 폴더를 하나 준비한다 (5~10개 정도가 다루기 좋아요)",
        "「이 폴더로 갤러리 웹페이지를 만들고, 다 되면 Vercel에 배포까지 해줘」라고 요청한다",
        "중간에 확인이나 로그인이 필요하면 응답한다",
        "완성된 주소를 직접 열어본다",
        "마음에 안 드는 부분을 한 번 고쳐 재배포한다",
      ],
      fields: [
        { n: "①", label: "배포된 주소", ph: "예: https://my-gallery.vercel.app" },
        { n: "②", label: "사용한 요청 문구", ph: "Cowork에 보낸 요청 문장을 그대로 붙여넣으세요" },
      ],
      checklist: [
        "배포된 <b>주소</b>가 실제로 열린다",
        "폴더 안의 파일들이 <b>페이지에 반영</b>돼 있다",
        "재배포로 <b>수정한 부분</b>이 있다",
        "전체 과정에서 쓴 <b>요청 문구</b>가 적혀 있다",
      ],
      submit: { what: "배포 주소 + 완성 화면 + 요청 문구", format: "텍스트 + 이미지", detail: "주소와 요청 문구는 위 <b>답변 작성</b> 칸에 적고, 완성된 페이지 화면을 아래에 첨부해주세요" },
      tip: "사진이 없으면 아무 문서 폴더로 해도 돼요. 「자료 목록 페이지를 만들어줘」처럼요. 갤러리가 제일 눈에 띄게 예뻐서 추천드리는 것뿐이에요 😊",
    },
  };
})();

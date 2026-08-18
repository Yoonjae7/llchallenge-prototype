/*
 * Day 26 · 챕터 7 (Claude Design) - 아티팩트와 뭐가 다른가
 * 슬라이드 + 퀴즈 + 이 Day 전용 비주얼이 이 파일 하나에 다 들어 있다.
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* ── 비주얼 ─────────────────────────────────────────────────── */

  /* 첫 화면용. "Claude Design이 뭐냐"에 말로 답하는 대신, 여기서 나오는 결과물 네 가지를
     실제 생긴 모양대로 축소해 보여준다 - 슬라이드는 가로 장표, 소개서는 세로 한 장,
     앱 화면은 폰 비율, 카드뉴스는 정사각형. 비율만 봐도 뭘 만드는 곳인지 읽힌다.
     네 장이 순서대로 떠오르고 은은히 떠 있어서 '작업실에 놓인 결과물' 느낌을 준다 */
  V.designMakes = MJC_JSX(`function (ctx) {
    const { card } = ctx;
    const items = [
      { name: "발표 슬라이드", ratio: "aspect-[4/3]", grad: "linear-gradient(135deg,#1E3A5F,#0F1F35)",
        inner: "top" },
      { name: "한 장 소개서", ratio: "aspect-[3/4]", grad: "linear-gradient(135deg,#F1F5F9,#E2E8F0)",
        inner: "doc" },
      { name: "앱 화면", ratio: "aspect-[9/16]", grad: "linear-gradient(160deg,#EDE9FE,#C4B5FD)",
        inner: "app" },
      { name: "카드뉴스", ratio: "aspect-square", grad: "linear-gradient(135deg,#FF8747,#E05500)",
        inner: "card" },
    ];
    return (
      <div className={card}>
        <div className="grid grid-cols-4 gap-2 items-end">
          {items.map((it, i) => (
            <div key={i} className="min-w-0"
              style={{ animation: "revealUp .42s " + (i * .13) + "s both" }}>
              <div className={"relative rounded-lg overflow-hidden shadow-soft border border-white/70 " + it.ratio}
                style={{ background: it.grad, animation: "floaty " + (3.4 + i * .45) + "s " + (i * .35) + "s ease-in-out infinite" }}>
                {it.inner === "top" && (
                  <div className="p-1.5">
                    <div className="h-1 w-2/3 rounded-full bg-white/80" />
                    <div className="mt-1 h-[3px] w-full rounded-full bg-white/30" />
                    <div className="mt-[3px] h-[3px] w-3/4 rounded-full bg-white/30" />
                  </div>
                )}
                {it.inner === "doc" && (
                  <div className="p-1.5">
                    <div className="h-1 w-1/2 rounded-full bg-slate-500/70" />
                    <div className="mt-1.5 space-y-[3px]">
                      {[100, 88, 94, 70].map((w, k) => (
                        <div key={k} className="h-[3px] rounded-full bg-slate-400/40" style={{ width: w + "%" }} />
                      ))}
                    </div>
                  </div>
                )}
                {it.inner === "app" && (
                  <div className="p-1.5">
                    <div className="mx-auto h-[3px] w-1/3 rounded-full bg-violet-900/30" />
                    <div className="mt-1.5 rounded bg-white/70 h-3" />
                    <div className="mt-1 grid grid-cols-2 gap-[3px]">
                      <div className="h-2 rounded bg-white/50" />
                      <div className="h-2 rounded bg-white/50" />
                    </div>
                  </div>
                )}
                {it.inner === "card" && (
                  <div className="p-1.5 h-full flex flex-col justify-end">
                    <div className="h-1.5 w-3/4 rounded-full bg-white/90" />
                    <div className="mt-1 h-[3px] w-1/2 rounded-full bg-white/50" />
                  </div>
                )}
              </div>
              <div className="mt-1.5 text-center text-[8px] font-black text-gray-500 truncate">{it.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl px-3 py-2.5 text-center text-[10.5px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#8B5CF6,#5B21B6)", animation: "revealUp .4s .6s both" }}>
          보여주기 위한 것들을 만드는 <span className="text-white">작업실</span>
        </div>
      </div>
    );
  }`);

  /* 이 Day 의 핵심 질문("아티팩트로 되는 거 아닌가?")에 그림으로 답한다.
     두 카드를 나란히 두되, 위쪽 미니 화면 목업이 서로 다르게 생겼다 - 아티팩트는 대화
     말풍선 아래에 결과가 딸려 나온 모양, Design 은 처음부터 캔버스만 있는 작업실 모양.
     "대화하다 나온 것 vs 만들려고 들어간 공간"을 글이 아니라 화면 구조로 보여주려는 것 */
  V.designVsArtifact = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconChatPlus, IconLayoutGrid } = UI;
    return (
      <div className={card}>
        <div className="grid grid-cols-2 gap-2.5">
          {/* 아티팩트 - 대화 흐름 안에서 결과가 딸려 나온다 */}
          <div className="rounded-2xl bg-white border border-sky-200 overflow-hidden shadow-soft"
            style={{ animation: "revealUp .4s both" }}>
            <div className="px-2.5 py-1.5 bg-sky-50 border-b border-sky-100 flex items-center gap-1.5">
              <span className="w-3 h-3 text-sky-500"><IconChatPlus /></span>
              <span className="text-[9.5px] font-black text-sky-700">아티팩트</span>
            </div>
            <div className="p-2 space-y-1.5">
              <div className="h-2 w-3/4 rounded-full bg-gray-200" />
              <div className="ml-auto h-2 w-1/2 rounded-full bg-sky-200" />
              <div className="h-2 w-2/3 rounded-full bg-gray-200" />
              <div className="mt-1 rounded-lg border-2 border-sky-300 bg-sky-50/60 p-1.5"
                style={{ animation: "popIn .35s .5s cubic-bezier(.2,.9,.3,1.15) both" }}>
                <div className="h-1.5 w-full rounded-full bg-sky-300/70" />
                <div className="mt-1 h-1.5 w-2/3 rounded-full bg-sky-300/50" />
              </div>
            </div>
            <div className="px-2 pb-2 text-[8.5px] font-bold text-sky-600 leading-tight">
              대화하다 <b className="text-sky-700">나온</b> 것
            </div>
          </div>

          {/* Design - 처음부터 캔버스가 주인공인 작업실 */}
          <div className="rounded-2xl bg-white border border-violet-200 overflow-hidden shadow-soft"
            style={{ animation: "revealUp .4s .12s both" }}>
            <div className="px-2.5 py-1.5 bg-violet-50 border-b border-violet-100 flex items-center gap-1.5">
              <span className="w-3 h-3 text-violet-500"><IconLayoutGrid /></span>
              <span className="text-[9.5px] font-black text-violet-700">Claude Design</span>
            </div>
            <div className="p-2">
              <div className="rounded-lg border-2 border-violet-300 bg-violet-50/50 p-1.5 grid grid-cols-2 gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-6 rounded bg-violet-200/70"
                    style={{ animation: "popIn .3s " + (.3 + i * .09) + "s cubic-bezier(.2,.9,.3,1.15) both" }} />
                ))}
              </div>
              <div className="mt-1.5 flex gap-1">
                {["#8B5CF6", "#C4B5FD", "#4C1D95"].map((c, i) => (
                  <span key={i} className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ background: c }} />
                ))}
              </div>
            </div>
            <div className="px-2 pb-2 text-[8.5px] font-bold text-violet-600 leading-tight">
              작정하고 <b className="text-violet-700">들어간</b> 공간
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-xl px-3 py-2.5 text-center text-[10.5px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#0EA5E9,#8B5CF6)", animation: "revealUp .4s .6s both" }}>
          동작이 중요하면 아티팩트, <span className="text-white">보기가 중요하면 Design</span>
        </div>
      </div>
    );
  }`);

  /* 내보내기 6종. "PPT로 주세요" 소리에 답이 없던 상황이 풀린다는 게 이 슬라이드의 감정이라,
     포맷 배지를 실제 파일 아이콘처럼 칠하고 살짝 떠다니게 했다. 마지막 두 개(HTML·Code)는
     다음 챕터로 이어지는 길이라 브랜드색으로 따로 묶었다 */
  V.designExports = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconDocFold, IconArrowSm } = UI;
    const outs = [
      { ext: "PPTX", desc: "진짜 파워포인트", tone: "text-orange-600", badge: "bg-orange-500" },
      { ext: "PDF", desc: "인쇄 · 공유용", tone: "text-rose-600", badge: "bg-rose-500" },
      { ext: "ZIP", desc: "여러 개 한 번에", tone: "text-gray-600", badge: "bg-gray-500" },
      { ext: "Canva", desc: "이어서 더 다듬기", tone: "text-cyan-600", badge: "bg-cyan-500" },
    ];
    return (
      <div className={card}>
        <div className="grid grid-cols-2 gap-2">
          {outs.map((o, i) => (
            <div key={i} className="rounded-xl bg-white border border-gray-100 shadow-soft px-2.5 py-2 flex items-center gap-2"
              style={{ animation: "popIn .35s " + (i * .09) + "s cubic-bezier(.2,.9,.3,1.15) both" }}>
              <span className={"shrink-0 w-6 h-6 " + o.tone}
                style={{ animation: "floaty " + (3 + i * .35) + "s " + (i * .25) + "s ease-in-out infinite" }}>
                <IconDocFold />
              </span>
              <div className="min-w-0">
                <div className={"inline-block rounded px-1.5 py-[1px] text-[8px] font-black text-white " + o.badge}>{o.ext}</div>
                <div className="mt-0.5 text-[8.5px] font-semibold text-gray-600 truncate">{o.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 여기 둘은 결과물이 아니라 '다음 단계로 넘기는 통로'라서 한 줄로 따로 묶었다 */}
        <div className="mt-2 rounded-xl border border-brand-200 bg-brand-50/70 px-2.5 py-2"
          style={{ animation: "revealUp .4s .45s both" }}>
          <div className="flex items-center gap-1.5 text-[9px] font-black text-brand-700">
            <span className="rounded bg-white px-1.5 py-[1px] border border-brand-200">HTML</span>
            <span className="text-brand-400" style={{ animation: "nudgeR 1.8s ease-in-out infinite" }}><IconArrowSm /></span>
            <span className="rounded bg-white px-1.5 py-[1px] border border-brand-200">클로드 코드</span>
          </div>
          <div className="mt-1 text-[8.5px] font-semibold text-brand-600">여기서 만든 게 며칠 뒤 진짜 웹사이트가 돼요</div>
        </div>
      </div>
    );
  }`);

  /* ── 콘텐츠 ─────────────────────────────────────────────────── */

  D[26] = {
    kind: "concept",
    title: "아티팩트와 뭐가 다른가",
    slides: [
      { title: "오늘부터는 '보기'를 다뤄요",
        visual: "designMakes",
        body: "지금까지 만든 것들, <b>내용</b>은 좋았죠. 근데 남한테 보여줄 때는 좀 아쉬웠을 거예요.\n\n<b>Claude Design</b>은 클로드 안에 있는 <b>디자인 작업실</b>이에요. 발표 슬라이드, 한 장짜리 소개서, 앱 화면, 카드뉴스 - 보여주기 위한 것들을 만드는 곳이죠.\n\n오늘은 이게 뭔지만 알고 가요. 만드는 건 내일부터예요 😊",
        note: "챕터 7 첫 화면. 예전 버전은 기능 목록부터 쏟아붓고 '정신없죠?'로 시작했는데, 정작 Claude Design이 뭔지 말한 적이 없어서 뜬금없었다. 지금은 '무엇을 위한 도구인가(보기)' → '뭘 만드나' 순으로 열고, 만들 수 있는 것 네 가지는 그림(designMakes)이 보여준다." },
      { title: "이거 아티팩트로 되는 거 아닌가요?",
        visual: "designVsArtifact",
        body: "둘 다 화면에 보이는 결과물을 만들어요. 그건 맞아요.\n\n결정적인 차이는 <b>어디서 시작하느냐</b>예요. 아티팩트는 대화하다가 「나온」 것이고, Design은 처음부터 <b>만들려고 들어간 공간</b>이에요.\n\n목적이 다르면 도구가 달라져요.",
        note: "이 챕터 첫날의 핵심 과제 - '이미 하잖아?' 해소. 회피하지 말고 정면으로 다룬다. 두 화면 목업 대비(designVsArtifact)가 설명을 대신하고 글은 결론만 남긴다." },
      { title: "그래서 뭐가 다른데요?",
        body: "세 가지가 달라요. 이것만 알면 돼요.\n\n<b>캔버스를 직접 만질 수 있어요.</b> 아티팩트는 말로만 고쳤죠. Design은 마우스로 직접 옮기고 바꿔요.\n\n<b>디자인을 고정할 수 있어요.</b> 색과 폰트를 정해두면 이후 만드는 모든 게 그 규칙을 따라요. 10장을 만들어도 다 같은 톤이에요.\n\n<b>다양하게 내보내요.</b> 이건 다음 장에서 따로 보여드릴게요.",
        note: "세 가지 차이 중 앞의 둘만 여기서 다루고, 내보내기는 그림이 있는 다음 슬라이드로 분리했다." },
      { title: "밖으로 꺼내는 길이 이렇게 많아요",
        visual: "designExports",
        body: "아티팩트는 파일로 내려받아도 결국 웹 화면이었어요. Design은 <b>진짜 쓸 수 있는 파일</b>로 나와요.\n\n회사에서 「PPT로 주세요」 하면 답이 없었잖아요 😅 이제 답이 여러 개예요.",
        note: "내보내기 옵션은 실제 UI 기준 - PPTX/PDF/zip/Canva/독립형 HTML/Claude Code. 목록은 그림(designExports)이 맡고 글은 감정만 남긴다." },
      { title: "그럼 언제 뭘 써요?",
        body: "간단한 기준을 드릴게요.\n\n<b>아티팩트</b>는 대화하다 「이거 그림으로 보고 싶은데」 싶을 때, 대시보드·계산기처럼 <b>동작</b>이 중요한 것, 빨리 한 번 보고 버릴 것에 쓰세요.\n\n<b>Claude Design</b>은 발표자료처럼 <b>보기</b>가 중요한 것, 여러 장을 <b>같은 톤</b>으로 맞춰야 할 때, PPTX·PDF로 <b>내보내야</b> 할 때 쓰세요.\n\n한 줄로 - <b>동작이 중요하면 아티팩트, 보기가 중요하면 Design.</b>",
        note: "판단 기준을 한 줄로 남겨야 실제로 쓰인다. 앞 챕터와의 관계를 명확히 정리하는 자리." },
      { title: "시작 전 확인 하나",
        body: "Claude Design은 <b>유료 플랜(Pro 이상)</b>에서 쓸 수 있어요.\n\nDay 1에서 Pro 구독을 준비해달라고 말씀드렸죠? 여기서 쓰입니다.\n\n혹시 아직이시라면 오늘 안에 확인해주세요. 내일부터 바로 만들기 시작하거든요 😊",
        note: "⚠️ 확인 필요 - Claude Design의 최소 플랜 요건을 출시 시점 요금제로 재확인할 것." },
      { title: "오늘은 여기까지예요",
        body: "정리하면요.\n\n· Claude Design엔 기능이 정말 많지만, 저희는 <b>핵심만</b> 골라 가르쳐드려요\n· 아티팩트는 <b>대화하다 나온 것</b>, Design은 <b>만들려고 들어간 공간</b>이에요\n· 내보내기는 <b>PPTX·PDF·zip·Canva·HTML·클로드 코드</b>까지 다양해요\n· <b>동작이 중요하면 아티팩트, 보기가 중요하면 Design</b>\n\n내일부터 직접 만들어요. 결과물이 예뻐서 꽤 재밌으실 거예요 🎨",
        note: "개념 Day 요약 → 퀴즈." },
    ],
    quiz: [
      { q: "아티팩트와 Claude Design의 가장 근본적인 차이는?",
        choices: ["대화 중 나온 결과물 vs 처음부터 만들려고 들어간 공간", "혼자 쓰는 것 vs 여럿이 같이 보는 것", "웹에서만 열리는 것 vs 앱에서만 열리는 것", "짧은 결과물 vs 긴 결과물"],
        answer: 0,
        explain: "목적이 다르면 도구가 달라져요. 툭 튀어나온 결과물과 작정하고 들어간 <b>작업실</b>의 차이예요." },
      { q: "Claude Design에서 결과물을 밖으로 꺼내는 방법으로 <b>틀린</b> 것은?",
        choices: ["PPTX로 내보내기", "PDF로 내보내기", "Canva로 보내서 이어서 편집하기", "인스타그램에 자동으로 올리기"],
        answer: 3,
        explain: "PPTX·PDF·zip·Canva·독립형 HTML로 꺼낼 수 있고 클로드 코드로 넘길 수도 있지만, SNS에 자동으로 올려주진 않아요." },
      { q: "'디자인 시스템 고정'이 해주는 일은?",
        choices: ["파일 용량을 줄인다", "이후 만드는 것들이 같은 색·폰트를 따르게 한다", "자동으로 저장한다", "번역을 해준다"],
        answer: 1,
        explain: "10장을 만들어도 톤이 흐트러지지 않아요. 손으로 맞추려면 제일 귀찮은 일이죠." },
      { q: "발표자료를 만들어야 한다면 뭘 쓰는 게 좋을까요?",
        choices: ["아티팩트", "Claude Design", "연구 모드", "커넥터"],
        answer: 1,
        explain: "<b>보기가 중요하면 Design</b>이에요. 게다가 PPTX로 바로 나오고요." },
      { q: "반대로 아티팩트가 더 어울리는 것은?",
        choices: ["톤을 맞춘 슬라이드 10장", "인쇄용 포스터", "숫자를 넣으면 결과가 나오는 계산기", "PPTX로 낼 제안서"],
        answer: 2,
        explain: "<b>동작이 중요하면 아티팩트</b>예요. 계산기는 예뻐야 하는 게 아니라 굴러가야 하죠." },
      { q: "Claude Design에서 화면 배치를 바꾸고 싶다면?",
        choices: ["말로만 요청할 수 있다", "캔버스에서 직접 만질 수 있다", "코드를 고쳐야 한다", "처음부터 다시 만들어야 한다"],
        answer: 1,
        explain: "마우스로 직접 옮기고 바꿔요. 아티팩트에서 답답했던 부분이 여기서 풀려요." },
      { q: "Claude Design을 쓰려면 필요한 것은?",
        choices: ["유료 플랜(Pro 이상)", "개발자 계정", "별도 프로그램 설치", "친구 3명 초대"],
        answer: 0,
        explain: "Day 1에서 Pro 구독을 준비해달라고 했던 이유 중 하나가 이거예요." },
      { q: "이 챕터에서 만든 디자인은 이후 어디로 이어질까요?",
        choices: ["아무 데도 안 이어진다", "클로드 코드로 넘겨 실제 사이트로 만든다", "자동으로 인쇄된다", "메모리에 저장된다"],
        answer: 1,
        explain: "<b>디자인은 여기서, 구현은 저기서.</b> 며칠 뒤에 이어집니다 🔗" },
      { q: "다음 중 Claude Design으로 만들기 <b>어려운</b> 것은?",
        choices: ["앱 화면 프로토타입", "한 장짜리 소개서", "SNS 카드뉴스", "내 컴퓨터 폴더 정리하기"],
        answer: 3,
        explain: "폴더 정리는 <b>Cowork</b>가 할 일이에요(챕터 10에서 배워요). 나머지 셋은 Design이 잘하는 일이고요." },
      { q: "Claude Design에 대한 설명 중 <b>틀린</b> 것은?",
        choices: ["캔버스를 직접 편집할 수 있다", "PDF로 내보낼 수 있다", "색과 폰트를 고정할 수 있다", "아티팩트를 완전히 대체한다"],
        answer: 3,
        explain: "대체가 아니라 <b>역할이 달라요.</b> 둘 다 쓰게 되실 거예요." },
    ],
  };
})();

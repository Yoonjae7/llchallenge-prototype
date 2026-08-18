/*
 * Day 37 · 챕터 10 - Cowork가 뭔가 (개념, HCS 에러 대응 포함)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* Cowork 의 본질은 "폴더 안 파일을 하나씩 돌면서 일한다"는 것. 이걸 글로 쓰면 안 와닿아서
     실제 진행 패널처럼 그렸다 - 처리 끝난 파일엔 체크, 지금 파일엔 도는 톱니, 나머지는 대기.
     진행 막대가 계속 차오르면서 "맡겨두고 다른 일 해도 된다"가 몸으로 읽힌다 */
  V.coworkProgress = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconCheckCircle, IconGear, IconChatPlus } = UI;
    const files = [
      { n: "회의록_0812.docx", state: "done" },
      { n: "스캔0392.pdf", state: "done" },
      { n: "문서1.docx", state: "now" },
      { n: "새 폴더 (2)", state: "wait" },
      { n: "IMG_4471.png", state: "wait" },
    ];
    return (
      <div className={card}>
        <div className="rounded-2xl bg-white border border-gray-100 shadow-soft overflow-hidden">
          <div className="px-3 py-2 bg-gray-50/80 border-b border-gray-100 flex items-center gap-1.5">
            <span className="text-[9.5px] font-black text-ink">진행 상황</span>
            <span className="ml-auto text-[8px] font-bold text-gray-400 tabular-nums">3 / 5</span>
          </div>
          <div className="p-2 space-y-1">
            {files.map((f, i) => (
              <div key={i} className={"flex items-center gap-1.5 rounded-md px-1.5 py-1 " +
                (f.state === "now" ? "bg-brand-50 border border-brand-200" : "bg-gray-50/60")}>
                <span className={"shrink-0 w-3 h-3 " +
                  (f.state === "done" ? "text-emerald-500" : f.state === "now" ? "text-brand-500" : "text-gray-300")}>
                  {f.state === "done" ? <IconCheckCircle />
                    : f.state === "now" ? <span className="block w-full h-full" style={{ animation: "spinLoop 2.2s linear infinite" }}><IconGear /></span>
                    : <span className="block w-full h-full rounded-full border-2 border-current" />}
                </span>
                <span className={"text-[8px] font-bold truncate " +
                  (f.state === "wait" ? "text-gray-400" : "text-gray-600")}>{f.n}</span>
              </div>
            ))}
          </div>
          <div className="px-2 pb-2">
            <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full origin-left"
                style={{ width: "60%", background: "linear-gradient(90deg,#FF8747,#E05500)",
                         animation: "growRight .9s .2s cubic-bezier(.2,.8,.3,1) both" }} />
            </div>
          </div>
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white border border-gray-200 px-2 py-2 text-center">
            <span className="inline-block w-3.5 h-3.5 text-gray-400"><IconChatPlus /></span>
            <div className="mt-0.5 text-[9px] font-black text-gray-500">채팅</div>
            <div className="text-[8px] font-semibold text-gray-400 leading-tight">한 번에 하나씩</div>
          </div>
          <div className="rounded-xl bg-brand-50 border border-brand-200 px-2 py-2 text-center">
            <span className="inline-block w-3.5 h-3.5 text-brand-500"
              style={{ animation: "spinLoop 3s linear infinite" }}><IconGear /></span>
            <div className="mt-0.5 text-[9px] font-black text-brand-700">Cowork</div>
            <div className="text-[8px] font-semibold text-brand-600 leading-tight">폴더를 통째로</div>
          </div>
        </div>

        <div className="mt-2.5 rounded-xl px-3 py-2.5 text-center text-[10px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#FF8747,#E05500)" }}>
          맡겨두고 <span className="text-white">다른 일 하셔도 돼요</span>
        </div>
      </div>
    );
  }`);

  D[37] = {
    kind: "concept",
    title: "Cowork가 뭔가 (안 켜질 때 포함)",
    slides: [
      { title: "이번엔 폴더를 통째로 맡겨요 📁",
        body: "지금까지는 파일 하나, 질문 하나였죠.\n\n<b>Cowork</b>는 달라요. <b>폴더를 통째로 던져주면</b> 알아서 여러 파일을 돌면서 일해요. 파일 30개 이름을 규칙대로 정리하거나, 문서 20개를 전부 요약해 한 파일로 모으는 일 같은 거요.\n\n{{name}}님이 하실 일은 <b>맡기고, 확인 버튼 누르는 것</b>뿐이에요.\n\n그리고 이것도 <b>데스크탑 앱에 이미 들어 있어요.</b>",
        note: "챕터 10 첫날. Cowork의 본질은 '여러 파일 순회'이며 이것이 채팅과의 결정적 차이다." },
      { title: "채팅이랑 뭐가 달라요?",
        visual: "coworkProgress",
        body: "채팅은 한 번 물어보면 한 번 답해요. 내가 계속 옆에 붙어 있어야 하죠.\n\nCowork는 폴더 안 파일을 <b>하나씩 돌면서</b> 일하고, 필요할 때만 물어봐요.\n\n비유하자면 채팅은 <b>질문에 답해주는 사람</b>, Cowork는 <b>일을 맡길 수 있는 사람</b>이에요.",
        note: "'맡겨두고 다른 일 해도 된다'가 Cowork의 가치 제안. 진행 패널 목업(coworkProgress)이 순회 처리를 눈으로 보여준다." },
      { title: "안 열리면 이렇게 하세요",
        body: "Cowork 버튼을 눌렀는데 안 열리는 경우가 있어요. 당황하지 마세요. <b>흔한 일이에요.</b>\n\n<b>먼저 이것부터</b> - 데스크탑 앱이 최신 버전인지 확인하고, 앱을 완전히 껐다가 다시 켜보세요.\n\n<b>그래도 안 되면</b> - 윈도우에서 HCS 관련 오류가 뜨는 경우가 있어요. 이럴 땐 PowerShell에 <b>명령어 하나를 복사해서 붙여넣으면</b> 해결돼요.\n\n복잡해 보이지만 <b>복붙 한 번이면 끝</b>이에요. 무슨 뜻인지 몰라도 괜찮아요. Day 32에서 배웠죠? <b>모르면 복붙</b> 😄",
        note: "⚠️ 확인 필요 - HCS 오류 대응 PowerShell 명령어 원문을 확보해 자료로 첨부할 것. 이 항목은 퀴즈로도 흡수해 읽고 넘기지 않게 한다." },
      { title: "맡긴 일 지켜보기",
        body: "Cowork가 일하는 동안 <b>진행 상황을 볼 수 있어요.</b> 지금 몇 번째 파일을 처리 중인지, 뭘 하고 있는지요.\n\n그리고 언제든 <b>중단</b>할 수 있어요. 「어? 이게 아닌데」 싶으면 멈추고 다시 시키면 돼요.\n\n특히 <b>파일을 지우거나 덮어쓰는</b> 작업일 때는 확인을 물어봐요. 그때는 꼭 읽고 답해주세요 😊",
        note: "중단 가능성을 알려주면 위임에 대한 불안이 줄어든다. 파괴적 작업의 확인 절차를 강조." },
      { title: "시작 전에 이것만은",
        body: "가장 중요한 안전 수칙 하나예요.\n\n<b>원본이 소중하면 복사본으로 하세요.</b>\n\nCowork는 파일을 <b>실제로 바꿔요.</b> 이름을 바꾸고, 내용을 고치고, 새 파일을 만들어요. <b>되돌리기 버튼이 없어요.</b>\n\n그러니 처음 몇 번은 복사해둔 폴더로 연습하세요. 폴더 하나 복사하는 데 10초예요. 사고 나서 후회하는 것보단 낫죠 😊",
        note: "이 챕터에서 가장 중요한 안전 수칙. 실습 Day의 체크리스트에도 반영한다." },
      { title: "오늘은 여기까지예요",
        body: "정리하면요.\n\n· Cowork는 <b>폴더를 통째로 맡기는</b> 기능이에요\n· 채팅은 <b>답해주는 사람</b>, Cowork는 <b>일을 맡길 수 있는 사람</b>\n· 데스크탑 앱에 <b>이미 들어 있어요</b>\n· 안 열리면 <b>최신 버전 확인 → 재시작 → 명령어 복붙</b>\n· <b>원본이 소중하면 복사본으로</b>\n\n내일부터 직접 맡겨봐요 😄",
        note: "개념 Day 요약 → 퀴즈. 제출물이 없는 날이라 퀴즈로 판정한다." },
    ],
    quiz: [
      { q: "Cowork와 채팅의 가장 큰 차이는?",
        choices: ["답변이 훨씬 빠르게 돌아온다", "폴더 안 여러 파일을 돌면서 일한다", "더 긴 글을 한 번에 읽을 수 있다", "결과를 파일로 내려받을 수 있다"],
        answer: 1,
        explain: "채팅은 <b>답해주는 사람</b>, Cowork는 <b>일을 맡길 수 있는 사람</b>이에요." },
      { q: "Cowork를 쓰려면 무엇을 설치해야 할까요?",
        choices: ["별도 프로그램", "아무것도, 데스크탑 앱에 들어 있다", "브라우저 확장", "개발 도구"],
        answer: 1,
        explain: "이미 들어 있어요. 클로드 코드랑 똑같죠 😊" },
      { q: "Cowork 버튼을 눌렀는데 안 열릴 때 <b>가장 먼저</b> 할 일은?",
        choices: ["앱이 최신 버전인지 확인하고 재시작해보기", "폴더를 먼저 지정하고 다시 눌러보기", "관리자 권한으로 앱을 실행해보기", "인터넷을 껐다 켜보기"],
        answer: 0,
        explain: "대부분 이걸로 해결돼요. 그래도 안 되면 다음 단계가 있고요." },
      { q: "윈도우에서 HCS 오류가 뜬다면?",
        choices: ["윈도우를 다시 설치한다", "PowerShell에 안내된 명령어를 복붙한다", "앱을 지웠다가 다시 설치한다", "관리자에게 문의해야만 풀린다"],
        answer: 1,
        explain: "<b>복붙 한 번이면 끝</b>이에요. 무슨 뜻인지 몰라도 괜찮아요 😄" },
      { q: "Cowork에게 폴더를 맡길 때 가장 중요한 안전 수칙은?",
        choices: ["폴더 이름을 영어로 짧게 짓는다", "원본이 소중하면 복사본으로 한다", "파일 개수를 10개 이하로 유지한다", "실행 전에 컴퓨터를 재시작한다"],
        answer: 1,
        explain: "Cowork는 파일을 <b>실제로 바꿔요.</b> 폴더 복사하는 데 10초, 후회하는 데는 하루 😌" },
      { q: "Cowork가 일하는 도중에 할 수 있는 것은?",
        choices: ["진행 상황을 보고 중단할 수 있다", "아무것도 못 하고 기다려야 한다", "컴퓨터를 꺼야 한다", "다른 앱을 쓸 수 없다"],
        answer: 0,
        explain: "「어? 이게 아닌데」 싶으면 멈추고 다시 시키면 돼요." },
      { q: "Cowork에게 맡기기 좋은 일은?",
        choices: ["문서 20개를 전부 요약해 한 파일로 모으기", "한 문장 번역하기", "오늘 날씨 물어보기", "맞춤법 하나 고치기"],
        answer: 0,
        explain: "<b>여러 파일을 돌아야 하는 일</b>이 Cowork의 영역이에요. 나머지는 그냥 채팅이 빨라요." },
      { q: "Cowork가 「이 파일을 덮어쓸까요?」라고 물으면?",
        choices: ["읽고 답한다", "무시한다", "무조건 예를 누른다", "앱을 끈다"],
        answer: 0,
        explain: "파일을 지우거나 덮어쓰는 작업일 때 물어봐요. <b>이건 꼭 읽으세요</b> 😊" },
      { q: "파일 30개를 채팅창에 하나씩 올려서 처리한다면?",
        choices: ["가장 효율적이다", "가능은 하지만 지치고 오래 걸린다", "Cowork보다 빠르다", "자동으로 Cowork로 전환된다"],
        answer: 1,
        explain: "상상만 해도 지치죠 😵 이런 일 하라고 있는 게 Cowork예요." },
      { q: "Cowork에 대한 설명 중 <b>틀린</b> 것은?",
        choices: ["진행 상황을 볼 수 있다", "중단할 수 있다", "실행하면 되돌리기 버튼으로 원상복구할 수 있다", "폴더를 통째로 맡길 수 있다"],
        answer: 2,
        explain: "<b>되돌리기 버튼은 없어요.</b> 그래서 복사본으로 연습하라고 한 거예요." },
    ],
  };
})();

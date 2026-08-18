/*
 * Day 30 · 챕터 8 - 클로드 코드는 이렇게 쓴다 (개념)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* "내 컴퓨터에 진짜 파일이 남는다"가 이 챕터의 전제이자 배포 가능성의 근거다. 그래서 왼쪽은
     스크롤하면 위로 사라지는 대화(흐려지는 말풍선), 오른쪽은 폴더 안에 파일이 하나씩 쌓이는
     모습으로 그렸다. 오른쪽 파일 행이 순서대로 등장하면서 '남는다'가 눈으로 확인된다 */
  V.chatVsCode = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconChatPlus, IconFolder, IconDocFold } = UI;
    const files = ["index.html", "style.css", "profile.jpg"];
    return (
      <div className={card}>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-soft">
            <div className="px-2.5 py-1.5 bg-gray-50 border-b border-gray-100 flex items-center gap-1.5">
              <span className="w-3 h-3 text-gray-400"><IconChatPlus /></span>
              <span className="text-[9.5px] font-black text-gray-500">대화창</span>
            </div>
            <div className="p-2 space-y-1.5">
              {[.18, .4, .72, 1].map((op, i) => (
                <div key={i} className="h-2 rounded-full bg-gray-300" style={{ width: (55 + i * 12) + "%", opacity: op }} />
              ))}
            </div>
            <div className="px-2 pb-2 text-[8.5px] font-bold text-gray-400 leading-tight">
              스크롤하면 <b className="text-gray-500">위로 사라져요</b>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-brand-200 overflow-hidden shadow-soft">
            <div className="px-2.5 py-1.5 bg-brand-50 border-b border-brand-100 flex items-center gap-1.5">
              <span className="w-3 h-3 text-brand-500"><IconFolder /></span>
              <span className="text-[9.5px] font-black text-brand-700">내 폴더</span>
            </div>
            <div className="p-2 space-y-1">
              {files.map((f, i) => (
                <div key={i} className="flex items-center gap-1.5 rounded-md bg-brand-50/60 border border-brand-100 px-1.5 py-1"
                  style={{ animation: "popIn .3s " + (.3 + i * .2) + "s cubic-bezier(.2,.9,.3,1.15) both" }}>
                  <span className="w-2.5 h-2.5 text-brand-500 shrink-0"><IconDocFold /></span>
                  <span className="text-[7.5px] font-bold text-gray-600 truncate">{f}</span>
                </div>
              ))}
            </div>
            <div className="px-2 pb-2 text-[8.5px] font-bold text-brand-600 leading-tight">
              컴퓨터에 <b className="text-brand-700">진짜로 남아요</b>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-xl px-3 py-2.5 text-center text-[10.5px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#FF8747,#E05500)", animation: "revealUp .4s .9s both" }}>
          남으니까 <span className="text-white">인터넷에 올릴 수 있어요</span>
        </div>
      </div>
    );
  }`);

  D[30] = {
    kind: "concept",
    title: "클로드 코드는 이렇게 쓴다",
    slides: [
      { title: "오늘 하나만 기억하세요",
        body: "<b>코드를 읽을 필요가 없어요.</b>\n\n진심이에요. 이 챕터 내내 {{name}}님이 할 일은 이거예요.\n\n<b>말로 시킨다 → 클로드가 만든다 → 결과를 본다 → 마음에 안 들면 또 말한다</b>\n\n중간에 코드가 좌르륵 지나갈 거예요. 무섭게 생겼죠. <b>그거 안 읽으셔도 됩니다.</b> 스크롤 내리세요.\n\n{{name}}님은 <b>뭘 원하는지 말하는 사람</b>이고, 코드를 쓰는 건 클로드 몫이에요.",
        note: "이 챕터 전체의 프레이밍. 여기서 겁먹으면 챕터 8~9가 통째로 무너지므로 첫 화면에 배치." },
      { title: "채팅이랑 뭐가 달라요?",
        visual: "chatVsCode",
        body: "지금까지 대화창에서도 코드를 만들 수 있었죠. 그런데 결정적으로 달라요.\n\n대화창은 결과를 <b>보여주기만</b> 하고 스크롤하면 사라지지만, 클로드 코드는 <b>내 컴퓨터에 진짜 파일을 남겨요.</b>\n\n며칠 뒤 {{name}}님 사이트가 세상에 나가는 게 바로 이 차이 덕분이에요 🌐",
        note: "아티팩트와의 차이를 명확히. '내 컴퓨터에 실제로 남는다'가 배포 가능성의 전제, 사라지는 대화 vs 쌓이는 파일 그림(chatVsCode)이 그걸 보여준다." },
      { title: "말 거는 법, 이렇게만 하세요",
        body: "어렵지 않아요. Day 4에서 배운 <b>프롬프트 기본기</b> 그대로예요.\n\n❌ 「사이트 만들어줘」\n⭕ 「<b>내 소개 페이지를 만들어줘.</b> 위에 이름과 한 줄 소개, 가운데 내가 한 일 3개, 아래 연락처. <b>색은 차분한 초록 계열</b>로」\n\n고칠 때는 「글씨가 너무 작아, 키워줘」, 「가운데를 3열로 나눠줘」, 「휴대폰에서도 잘 보이게 해줘」처럼요.\n\n보이시나요? <b>코드 얘기가 하나도 없어요.</b> 그냥 눈에 보이는 걸 말하면 돼요 😊",
        note: "챕터 1의 프롬프트 기본기가 코드 맥락에서도 그대로 통한다는 것을 보여준다." },
      { title: "이건 꼭 알아두세요",
        body: "두 가지만 조심하시면 돼요.\n\n<b>중요한 폴더를 연결하지 마세요.</b> 클로드 코드는 연결된 폴더의 파일을 고칠 수 있어요. 회사 자료나 사진첩이 든 폴더 말고, <b>어제 만든 빈 폴더</b>를 쓰세요.\n\n<b>확인 질문은 읽고 넘어가세요.</b> 「이 파일을 지울까요?」 같은 걸 물어올 때가 있어요. 코드는 안 읽어도 되지만 <b>이런 질문은 읽으세요</b> 😊\n\n무섭게 들리나요? 어제 만든 빈 폴더만 쓰시면 사고 날 일이 없어요.",
        note: "안전 수칙. 겁주지 않되 폴더 격리 원칙만큼은 분명히 각인시킨다." },
      { title: "오늘은 여기까지예요",
        body: "정리하면요.\n\n· <b>코드는 안 읽어도 돼요.</b> 말로 시키면 클로드가 만들어요\n· 대화창과 달리 <b>내 컴퓨터에 진짜 파일이 남아요</b>\n· 말 거는 법은 <b>Day 4의 프롬프트 기본기</b> 그대로예요\n· <b>빈 작업 폴더</b>만 연결하세요\n\n내일은 진짜로 뭔가 만들어봐요. 첫 결과물이 나오는 날이에요 💪",
        note: "개념 Day 요약 → 퀴즈. 내일에 대한 기대를 만든다." },
    ],
    quiz: [
      { q: "클로드 코드를 쓸 때 {{name}}님이 할 일은?",
        choices: ["코드를 한 줄씩 읽고 검토하기", "뭘 원하는지 말로 설명하기", "프로그래밍 언어 배우기", "터미널 명령어 외우기"],
        answer: 1,
        explain: "<b>말로 시킨다 → 클로드가 만든다 → 결과를 본다.</b> 그게 전부예요." },
      { q: "화면에 코드가 좌르륵 지나갈 때 올바른 대처는?",
        choices: ["한 줄씩 정독한다", "안 읽고 넘어간다", "즉시 중단한다", "스크린샷을 찍어 보관한다"],
        answer: 1,
        explain: "무섭게 생겼지만 안 읽으셔도 돼요. 스크롤 쭉 내리세요 😌" },
      { q: "대화창과 클로드 코드의 결정적 차이는?",
        choices: ["답변이 더 빠르게 돌아온다", "내 컴퓨터에 실제 파일이 남는다", "더 긴 코드를 만들 수 있다", "코드를 보기 좋게 색칠해준다"],
        answer: 1,
        explain: "그래서 <b>인터넷에 올릴 수 있어요.</b> 며칠 뒤 사이트가 세상에 나가는 게 이 차이 덕분이에요." },
      { q: "클로드 코드에 연결하면 <b>안 되는</b> 폴더는?",
        choices: ["이 챌린지용 빈 폴더", "새로 만든 연습용 폴더", "회사 자료와 가족 사진이 든 폴더", "바탕화면에 만든 my-site 폴더"],
        answer: 2,
        explain: "클로드 코드는 연결된 폴더의 파일을 <b>고칠 수 있어요.</b> 소중한 건 멀리 두세요." },
      { q: "결과물을 고치고 싶을 때 하는 말로 알맞은 것은?",
        choices: ["함수 반환값을 수정해줘", "글씨가 너무 작아, 키워줘", "변수명을 바꿔줘", "라이브러리를 교체해줘"],
        answer: 1,
        explain: "<b>눈에 보이는 걸 말하면 돼요.</b> 코드 용어를 쓸 필요가 전혀 없어요." },
      { q: "폴더 이름을 영어로, 띄어쓰기 없이 만들라고 한 이유는?",
        choices: ["더 멋있어 보여서", "나중에 웹사이트로 만들 때 문제가 생길 수 있어서", "용량이 줄어서", "클로드가 한글을 못 읽어서"],
        answer: 1,
        explain: "배포 단계에서 한글이나 공백이 가끔 말썽을 부려요. 미리 피하는 거예요." },
      { q: "클로드 코드를 쓰려면 따로 설치해야 할까요?",
        choices: ["별도 프로그램을 설치해야 한다", "데스크탑 앱에 이미 들어 있다", "터미널에서 명령어로 깔아야 한다", "개발자 등록이 필요하다"],
        answer: 1,
        explain: "이미 들어 있어요. <b>켜면 바로 됩니다</b> 😌" },
      { q: "클로드가 「이 파일을 지울까요?」라고 물어보면?",
        choices: ["코드니까 안 읽고 넘긴다", "이런 확인 질문은 읽고 답한다", "무조건 예를 누른다", "앱을 끈다"],
        answer: 1,
        explain: "코드는 안 읽어도 되지만 <b>확인 질문은 읽으세요.</b> 딱 이것만 지키면 사고 안 나요." },
      { q: "클로드 코드에서 잘 통하는 요청은?",
        choices: ["알아서 잘 해줘", "위에 이름과 한 줄 소개, 가운데 내가 한 일 3개, 아래 연락처를 넣은 소개 페이지를 만들어줘", "좋은 거 만들어줘", "멋있게 해줘"],
        answer: 1,
        explain: "Day 4의 <b>프롬프트 기본기</b>가 여기서도 그대로 통해요. 구체적일수록 잘 나와요." },
      { q: "이 챕터를 마치면 {{name}}님은 어떤 사람이 되어 있을까요?",
        choices: ["프로그래밍 언어를 마스터한 사람", "코드를 안 읽고도 만들고 고칠 수 있는 사람", "터미널 전문가", "달라지는 건 없다"],
        answer: 1,
        explain: "그리고 며칠 뒤엔 <b>내 주소를 가진 사이트</b>까지 갖게 되실 거예요 🌐" },
    ],
  };
})();

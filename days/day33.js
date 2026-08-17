/*
 * Day 33 · 챕터 9 - Vercel이 뭔가 (개념)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 어제 localhost 주소를 친구에게 보냈더니 안 열렸다는 경험이 이 Day 의 출발점이다.
     그 이유 두 가지(주소 없음 / 항상 켜져 있지 않음)를 내 노트북 카드에 ✕ 두 개로 박아두고,
     서버 카드에는 같은 항목이 ✓ 로 켜져 있게 대비시켰다. 서버 쪽 전원 점만 계속 깜빡여서
     "얘는 24시간 살아 있다"가 눈으로 읽히게 했다 */
  V.whyDeploy = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconLaptop, IconCheckCircle, IconXCircle } = UI;
    const rows = ["인터넷 주소가 있다", "24시간 켜져 있다"];
    return (
      <div className={card}>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl bg-white border border-gray-200 shadow-soft overflow-hidden"
            style={{ animation: "revealUp .4s both" }}>
            <div className="px-2.5 py-2 bg-gray-50 border-b border-gray-100 flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 text-gray-400"><IconLaptop /></span>
              <span className="text-[9.5px] font-black text-gray-500">내 노트북</span>
            </div>
            <div className="p-2 space-y-1.5">
              {rows.map((r, i) => (
                <div key={i} className="flex items-center gap-1.5"
                  style={{ animation: "popIn .3s " + (.25 + i * .14) + "s both" }}>
                  <span className="shrink-0 w-3.5 h-3.5 text-rose-400"><IconXCircle /></span>
                  <span className="text-[8.5px] font-semibold text-gray-500 leading-tight">{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-emerald-200 shadow-soft overflow-hidden"
            style={{ animation: "revealUp .4s .14s both" }}>
            <div className="px-2.5 py-2 bg-emerald-50 border-b border-emerald-100 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"
                style={{ animation: "pulseSoft 1.8s ease-in-out infinite" }} />
              <span className="text-[9.5px] font-black text-emerald-700">서버</span>
            </div>
            <div className="p-2 space-y-1.5">
              {rows.map((r, i) => (
                <div key={i} className="flex items-center gap-1.5"
                  style={{ animation: "popIn .3s " + (.4 + i * .14) + "s both" }}>
                  <span className="shrink-0 w-3.5 h-3.5 text-emerald-500"><IconCheckCircle /></span>
                  <span className="text-[8.5px] font-semibold text-gray-600 leading-tight">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vercel 이 그 서버를 대신 갖고 있어 준다 */}
        <div className="mt-2.5 rounded-2xl bg-white border border-gray-100 shadow-soft px-3 py-2.5"
          style={{ animation: "revealUp .4s .6s both" }}>
          <div className="flex items-center justify-center gap-2 text-[9.5px] font-black">
            <span className="rounded-md bg-gray-100 px-2 py-1 text-gray-600">내 파일</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-md bg-ink px-2 py-1 text-white">Vercel</span>
            <span className="text-gray-300">→</span>
            <span className="rounded-md bg-emerald-500 px-2 py-1 text-white">주소</span>
          </div>
          <div className="mt-1.5 text-center text-[8.5px] font-semibold text-gray-500">
            나는 파일만 주면 돼요
          </div>
        </div>

        <div className="mt-2 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/70 px-3 py-2 text-center">
          <span className="text-[10px] font-black text-emerald-700">개인 규모는 무료 · 카드 등록도 없어요</span>
        </div>
      </div>
    );
  }`);

  D[33] = {
    kind: "concept",
    title: "Vercel이 뭔가",
    slides: [
      { title: "왜 내 페이지는 나만 볼 수 있을까요?",
        visual: "whyDeploy",
        body: "어제 미리보기 주소, 친구한테 보내면 안 열려요. 이유는 두 가지예요.\n\n<b>내 컴퓨터에는 주소가 없어요.</b> 인터넷에서 누가 찾아오려면 「여기로 오세요」 할 주소가 있어야 하는데 내 노트북엔 그런 게 없어요.\n\n<b>내 컴퓨터는 항상 켜져 있지 않아요.</b> 노트북 닫으면 끝이죠. 새벽 3시에 누가 들어오려 하면요?",
        note: "배포의 필요성을 원리에서부터 이해시킨다. 어제의 localhost 경험이 그대로 문제 제기가 된다. 두 조건의 대비는 그림(whyDeploy)이 맡는다." },
      { title: "인터넷의 모든 사이트는 어딘가에 있어요",
        body: "{{name}}님이 매일 여는 사이트들, 그거 전부 <b>어딘가 켜져 있는 컴퓨터</b> 위에 있어요.\n\n그 컴퓨터를 <b>서버</b>라고 불러요. 특별한 기계가 아니에요. 그냥 <b>항상 켜져 있고, 주소가 있고, 누가 찾아오면 파일을 내주는</b> 컴퓨터예요.\n\n그럼 나도 서버를 하나 사야 하나요? 24시간 켜두고, 관리하고, 고장 나면 고치고…\n\n아니에요. 그럴 필요 없어요.",
        note: "서버 개념을 비유 없이 있는 그대로 설명. 다음 슬라이드의 Vercel 도입을 위한 문제 제기." },
      { title: "Vercel은 서버를 대신 갖고 있어 주는 회사예요",
        body: "<b>Vercel</b>은 그 골치 아픈 일을 대신해주는 회사예요.\n\n<b>{{name}}님은 파일만 주면 돼요.</b> 그러면 Vercel이 자기네 서버에 올려주고, 24시간 켜두고, <b>주소를 하나 만들어줘요.</b>\n\n그 주소로 누구나 들어올 수 있어요. 친구도, 회사 사람도, 지구 반대편 사람도요.\n\n그리고 좋은 소식 - <b>개인이 쓰는 규모는 무료예요.</b> 카드 등록도 필요 없어요 😊",
        note: "무료라는 점을 분명히 해야 결제 걱정으로 이탈하지 않는다." },
      { title: "그래서 뭐가 달라지냐면요",
        body: "지금까지 만든 것들, 다 {{name}}님 컴퓨터 안에만 있었죠. 배포를 하고 나면 이렇게 돼요.\n\n· 카톡으로 <b>주소 하나 보내면</b> 상대가 바로 열어봐요\n· 이력서나 프로필에 <b>주소를 적을 수</b> 있어요\n· 휴대폰으로도, 남의 컴퓨터로도 열려요\n· 내 노트북을 꺼도 <b>계속 살아 있어요</b>\n\n「나 이런 거 만들었어」에서 「<b>여기 들어와봐</b>」로 바뀌는 거예요.",
        note: "배포 전후의 변화를 학습자 일상 언어로 구체화. 기대감을 만드는 슬라이드." },
      { title: "오늘은 여기까지예요",
        body: "정리하면요.\n\n· 내 컴퓨터엔 <b>주소가 없고 항상 켜져 있지도 않아서</b> 남이 못 들어와요\n· 인터넷의 모든 사이트는 <b>서버</b> 위에 있어요\n· <b>Vercel</b>이 그 서버를 대신 갖고 관리해줘요, 나는 파일만 주면 돼요\n· <b>개인 규모는 무료</b>예요\n\n오늘은 어떻게 하는지는 안 배웠어요. 그건 내일부터예요 😊",
        note: "개념 Day는 원리만. 실제 배포 방법은 다음 실습 Day로 완전히 분리한다." },
    ],
    quiz: [
      { q: "내 컴퓨터에 만든 페이지를 남이 못 여는 이유는?",
        choices: ["파일 형식이 달라서", "주소가 없고 항상 켜져 있지도 않아서", "용량이 커서", "한글이 들어 있어서"],
        answer: 1,
        explain: "노트북 닫으면 끝이죠. 새벽 3시에 누가 들어오려 하면 곤란해요 😅" },
      { q: "'서버'란 무엇일까요?",
        choices: ["특별한 슈퍼컴퓨터", "항상 켜져 있고 주소가 있어 파일을 내주는 컴퓨터", "인터넷 회선", "보안 프로그램"],
        answer: 1,
        explain: "특별한 기계가 아니에요. <b>항상 켜져 있고 주소가 있는</b> 컴퓨터예요." },
      { q: "Vercel이 해주는 일은?",
        choices: ["코드를 대신 써준다", "서버를 대신 갖고 관리해준다", "디자인을 해준다", "도메인을 판매만 한다"],
        answer: 1,
        explain: "<b>나는 파일만 주면 돼요.</b> 올리고, 켜두고, 주소 만들어주는 건 Vercel 몫이에요." },
      { q: "개인 규모로 Vercel을 쓸 때 비용은?",
        choices: ["무료", "월 10만 원", "건당 결제", "1년 약정 필요"],
        answer: 0,
        explain: "<b>무료</b>예요. 카드 등록도 필요 없어요 😊" },
      { q: "배포하고 나면 달라지는 것으로 <b>틀린</b> 것은?",
        choices: ["카톡으로 주소를 보낼 수 있다", "내 노트북을 꺼도 계속 살아 있다", "휴대폰으로도 열린다", "내 컴퓨터가 더 빨라진다"],
        answer: 3,
        explain: "그건 안 되죠 😌 노트북 속도는 배포와 아무 상관이 없어요." },
      { q: "어제 켰던 미리보기 주소의 특징은?",
        choices: ["누구나 접속할 수 있다", "내 컴퓨터에서만 열린다", "검색에 노출된다", "영구적으로 유지된다"],
        answer: 1,
        explain: "그래서 배포가 필요한 거예요. 그 답답함이 오늘 슬라이드의 출발점이었죠." },
      { q: "Vercel에 배포하려면 내가 준비할 것은?",
        choices: ["서버 컴퓨터", "만든 파일", "네트워크 자격증", "24시간 켜둘 노트북"],
        answer: 1,
        explain: "<b>파일만</b> 주면 돼요. 나머지는 전부 대신 해줘요." },
      { q: "오늘 배운 내용으로 알맞은 것은?",
        choices: ["Vercel에 배포하는 구체적 방법", "배포가 왜 필요한지와 Vercel이 무엇인지", "서버를 직접 구축하는 법", "도메인 가격 비교"],
        answer: 1,
        explain: "오늘은 <b>왜</b>만요. <b>어떻게</b>는 내일부터예요 😊" },
      { q: "친구에게 내 사이트를 보여주는 가장 좋은 방법은?",
        choices: ["내 노트북을 들고 찾아간다", "배포해서 주소를 보낸다", "스크린샷을 찍어 보낸다", "화면 공유를 켠다"],
        answer: 1,
        explain: "「나 이런 거 만들었어」에서 「<b>여기 들어와봐</b>」로 바뀌는 순간이에요 😄" },
      { q: "서버에 대한 설명 중 맞는 것은?",
        choices: ["집에 있는 공유기가 서버다", "인터넷의 모든 사이트는 어딘가의 서버 위에 있다", "서버는 하루에 한 번만 켜진다", "서버는 개인이 절대 쓸 수 없다"],
        answer: 1,
        explain: "지금 이 페이지도 어딘가의 서버 위에 있어요 🙂" },
    ],
  };
})();

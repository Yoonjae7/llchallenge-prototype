/*
 * Day 32 · 챕터 8 - 에러 복붙 + 로컬 미리보기 (실습)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 이 챕터에서 가장 실용적인 한 가지 - 빨간 에러를 통째로 복사해 붙여넣으면 끝난다는 것.
     그래서 진짜 에러 콘솔처럼 생긴 검은 박스를 그리고, 거기서 복사 뱃지가 아래 채팅으로
     흘러내려가 초록 해결 상태로 바뀌는 흐름을 만들었다. 에러 박스를 "읽지 마세요"라는 뜻에서
     일부러 흐릿한 회색 글줄로 처리해, 내용 파악이 필요 없다는 걸 형태로 전달한다 */
  V.errorPaste = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconCopy, IconCheckCircle } = UI;
    return (
      <div className={card}>
        {/* 에러 콘솔 */}
        <div className="rounded-xl overflow-hidden border border-gray-800 shadow-soft">
          <div className="px-2.5 py-1.5 bg-[#2A2A2A] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-[8.5px] font-black text-rose-300">Error</span>
            <span className="ml-auto text-[7.5px] font-bold text-white/30">읽지 않아도 돼요</span>
          </div>
          <div className="bg-[#161616] p-2 space-y-1">
            {[92, 74, 86, 60].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-rose-400/30" style={{ width: w + "%" }} />
            ))}
          </div>
        </div>

        {/* 복사해서 내려보내기 */}
        <div className="relative h-9 flex flex-col items-center justify-center">
          <div className="absolute left-1/2 -ml-px top-0 bottom-0 w-[2px] rounded-full bg-brand-100" />
          <span className="relative inline-flex items-center gap-1 rounded-full bg-brand-500 text-white px-2 py-1 text-[8.5px] font-black shadow-lift"
            style={{ animation: "nudgeD 1.6s ease-in-out infinite" }}>
            <span className="w-2.5 h-2.5"><IconCopy /></span> 전체 복사
          </span>
        </div>

        {/* 붙여넣은 요청 */}
        <div className="rounded-xl bg-white border border-gray-100 shadow-soft px-2.5 py-2"
          style={{ animation: "revealUp .4s .3s both" }}>
          <div className="text-[9px] font-bold text-gray-600 leading-snug">
            "이 에러가 났어. <b className="text-ink">뭐 때문인지 설명해주고 고쳐줘</b>"
          </div>
          <div className="mt-1 space-y-[3px]">
            {[70, 50].map((w, i) => (
              <div key={i} className="h-1 rounded-full bg-rose-200" style={{ width: w + "%" }} />
            ))}
          </div>
        </div>

        <div className="mt-2 rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-2 flex items-center gap-2"
          style={{ animation: "revealUp .4s .55s both" }}>
          <span className="shrink-0 w-4 h-4 text-emerald-500"
            style={{ animation: "pulseSoft 2.4s ease-in-out infinite" }}><IconCheckCircle /></span>
          <span className="text-[9.5px] font-black text-emerald-700">해결됐어요</span>
        </div>

        <div className="mt-2.5 rounded-xl px-3 py-2.5 text-center text-[10.5px] font-black text-white"
          style={{ background: "linear-gradient(135deg,#F43F5E,#9F1239)" }}>
          에러는 <span className="text-white">무기예요</span>
        </div>
      </div>
    );
  }`);

  D[32] = {
    kind: "practice",
    title: "에러 복붙 + 로컬 미리보기",
    slides: [
      { title: "에러는 무기예요",
        visual: "errorPaste",
        body: "오늘 배울 게 딱 하나 있다면 이거예요. <b>에러가 나면 그대로 복사해서 클로드에게 붙여넣으세요.</b>\n\n빨간 글씨가 뜨면 심장이 철렁하죠. 그런데 그거 <b>정보</b>예요. 읽으실 필요 없어요.\n\n이게 비개발자가 가진 <b>가장 강력한 무기</b>예요. 진짜예요. 개발자들도 이렇게 해요 😄",
        note: "이 챕터에서 가장 실용적인 한 가지. 에러 공포를 해소하는 것이 완주율에 직결된다. 복사→붙여넣기→해결 흐름을 그림(errorPaste)이 통째로 보여준다." },
      { title: "이렇게 말하면 더 좋아요",
        body: "그냥 붙여넣어도 되지만, 한 마디만 더하면 훨씬 나아요.\n\n「<b>이 에러가 났어. 뭐 때문인지 설명해주고 고쳐줘.</b>」 그리고 에러 전체를 붙여넣는 거예요.\n\n「설명해주고」를 넣는 이유가 있어요. 같은 에러가 또 났을 때 <b>{{name}}님이 알아볼 수 있게</b> 되거든요.\n\n고쳐도 또 안 되면? <b>또 붙여넣으세요.</b> 두세 번 왔다 갔다 하는 건 아주 정상이에요 😊",
        note: "에러 해결이 여러 번 반복되는 것이 정상임을 알려 좌절을 예방한다." },
      { title: "만든 걸 계속 보면서 고치기",
        body: "지금까지는 파일을 열었다 닫았다 하셨죠? 불편했을 거예요.\n\n<b>로컬 미리보기</b>를 켜두면 편해져요. 화면에 띄워두고, 고칠 때마다 <b>바로 반영되는 걸</b> 보면서 작업하는 거예요.\n\n클로드에게 「<b>이 사이트를 브라우저에서 바로 볼 수 있게 띄워줘</b>」라고 하면 주소 하나를 알려줘요.\n\n⚠️ 다만 이 주소는 <b>내 컴퓨터에서만</b> 열려요. 남에게 보내도 안 열려요. 진짜 주소는 다음 챕터에서요 😉",
        note: "⚠️ 확인 필요 - 로컬 서버 실행 방식과 안내 문구를 실제 동작으로 확인할 것. localhost가 남에게 안 열린다는 점이 챕터 9의 훅이 된다." },
      { title: "오늘의 미션",
        body: "오늘은 좀 특이한 미션이에요. <b>일부러 에러를 내볼 거예요.</b>\n\n네, 일부러요. 무서운 걸 안전하게 한 번 겪어보면 다음부터 안 무섭거든요 😊\n\n그리고 미리보기를 띄워놓고 고치는 것까지 해볼 거예요. 이거 해보시면 어제까지의 방식으로는 못 돌아가요.",
        note: "의도적 에러 유발 → 해결 경험이 이 Day의 핵심 학습 장치." },
    ],
    mission: {
      title: "미션, 에러 만나고 이기기",
      goal: "에러를 복붙으로 해결하는 습관을 만들고, 미리보기를 띄워놓고 작업합니다.",
      steps: [
        "어제 만든 페이지를 연다",
        "「이 사이트를 브라우저에서 바로 볼 수 있게 띄워줘」로 미리보기를 켠다",
        "미리보기를 띄워둔 채로 수정을 요청하고, 화면이 바뀌는 걸 확인한다",
        "일부러 에러를 만든다 - 「연습용으로 일부러 에러가 나게 만들어줘」라고 요청해도 좋아요",
        "에러 메시지를 <b>전체 복사</b>해서 「이 에러가 났어. 뭐 때문인지 설명해주고 고쳐줘」와 함께 붙여넣는다",
        "해결되는 것을 확인한다",
      ],
      fields: [
        { n: "①", label: "클로드가 설명해준 에러의 원인", ph: "클로드가 알려준 원인을 한 줄로 요약해서 적어주세요" },
      ],
      checklist: [
        "브라우저에서 <b>미리보기가 열린 화면</b>이 있다",
        "<b>에러가 난 화면</b>이 있다",
        "에러를 붙여넣고 <b>해결된 화면</b>이 있다",
        "클로드가 설명해준 <b>에러의 원인</b>을 한 줄로 적었다",
      ],
      submit: { what: "미리보기 화면 + 에러 화면 + 해결 화면 + 원인", format: "이미지 3장 + 텍스트", detail: "에러 원인은 위 <b>답변 작성</b> 칸에 적고, ① 미리보기가 열린 화면 ② 에러가 난 화면 ③ 해결된 뒤 화면을 아래에 첨부해주세요" },
      tip: "에러가 안 나서 곤란하신가요? 클로드에게 「연습용으로 일부러 에러가 나게 만들어줘」라고 해보세요. 친절하게 고장 내줍니다 😄",
    },
  };
})();

/*
 * Day 42 · 챕터 11 - 예약 걸고 커넥터 조합하기 (실습)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 예약 만들기는 결국 "내용 · 주기 · 시각" 세 칸을 채우는 일이다. 그래서 실제 예약 생성
     폼처럼 세 줄을 그리고, 아래에 그 세 칸이 합쳐진 한 문장을 붙였다 - 폼과 문장이 같은
     것이라는 걸 색으로 연결한다. 커넥터 칩을 내용 줄 안에 넣어 챕터 4가 여기서 재등장한다는
     것도 같이 보이게 했다 */
  V.scheduleForm = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconGmailApp, IconClock, IconCalendarRange } = UI;
    const rows = [
      { label: "내용", value: "안 읽은 중요 메일 3줄 요약", tone: "text-sky-700", bg: "bg-sky-50", bd: "border-sky-200", connector: true },
      { label: "주기", value: "매일", tone: "text-violet-700", bg: "bg-violet-50", bd: "border-violet-200", Icon: IconCalendarRange },
      { label: "시각", value: "오전 8:00", tone: "text-amber-700", bg: "bg-amber-50", bd: "border-amber-200", Icon: IconClock },
    ];
    return (
      <div className={card}>
        <div className="rounded-2xl bg-white border border-gray-100 shadow-soft overflow-hidden">
          <div className="px-3 py-2 bg-gray-50/80 border-b border-gray-100 text-[9.5px] font-black text-gray-500">
            예약 만들기
          </div>
          <div className="p-2 space-y-1.5">
            {rows.map((r, i) => (
              <div key={i} className={"rounded-xl border px-2 py-1.5 " + r.bg + " " + r.bd}
                style={{ animation: "revealUp .4s " + (i * .15) + "s both" }}>
                <div className="text-[8px] font-black text-gray-400">{r.label}</div>
                <div className="mt-0.5 flex items-center gap-1.5">
                  {r.connector && (
                    <span className="shrink-0 w-3.5 h-3.5 rounded bg-white border border-sky-200 grid place-items-center p-[2px]">
                      <IconGmailApp />
                    </span>
                  )}
                  {r.Icon && <span className={"shrink-0 w-3 h-3 " + r.tone}><r.Icon /></span>}
                  <span className={"text-[9.5px] font-black truncate " + r.tone}>{r.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2.5 rounded-xl bg-white border border-gray-100 px-2.5 py-2"
          style={{ animation: "revealUp .4s .55s both" }}>
          <div className="text-[8.5px] font-bold text-gray-600 leading-relaxed">
            "<span className="rounded bg-violet-100 px-1 text-violet-800">매일</span>
            {" "}<span className="rounded bg-amber-100 px-1 text-amber-800">아침 8시</span>에,
            {" "}<span className="rounded bg-sky-100 px-1 text-sky-800">안 읽은 중요한 메일을 3줄로 요약</span>해줘"
          </div>
        </div>

        <div className="mt-2 rounded-xl px-3 py-2.5 text-center text-[10px] font-black text-white"
          style={{ background: "linear-gradient(135deg,#8B5CF6,#5B21B6)" }}>
          커넥터 + 예약이 만나는 날이에요
        </div>
      </div>
    );
  }`);

  D[42] = {
    kind: "practice",
    title: "예약 걸고 커넥터 조합하기",
    slides: [
      { title: "오늘은 직접 걸어봐요 ⏰",
        body: "어제 배운 걸 실제로 만들어볼 거예요.\n\n오늘 미션엔 반가운 얼굴이 하나 나와요. <b>커넥터</b> 기억나시나요? 챕터 4에서 노션·Gmail·캘린더를 연결하셨죠?\n\n오늘 그걸 <b>예약과 조합</b>할 거예요. 「매일 아침 내 메일함을 확인해서 요약해줘」 같은 걸요.\n\n따로따로 배운 기능들이 오늘 만나요 😊",
        note: "챕터 4의 커넥터를 재등장시켜 학습 누적을 체감시킨다. 조합 능력이 이 Day의 핵심." },
      { title: "만드는 법",
        visual: "scheduleForm",
        body: "예약은 <b>내용 · 주기 · 시각</b> 세 가지만 정하면 돼요.\n\n말로 하면 이렇게 되는 거예요. 「매일 아침 8시에, 내 메일함에서 안 읽은 중요한 메일을 확인해서 3줄로 요약해줘. 광고성 메일은 빼줘」\n\n한 번 걸어두면 매일 그 시각에 알아서 돌아가요.",
        note: "⚠️ 확인 필요 - 예약 생성 화면의 실제 UI(내용/주기/시각 입력 방식)를 캡처해 첨부할 것. 세 칸이 한 문장으로 합쳐지는 구조는 그림(scheduleForm)이 보여준다." },
      { title: "오늘의 미션",
        body: "챕터 4에서 연결했던 커넥터(노션·Gmail·캘린더 중 하나)를 활용해서 예약을 하나 걸어보세요.\n\n예를 들면 Gmail은 「매일 아침 안 읽은 메일 요약」, 캘린더는 「매주 월요일 이번 주 일정 브리핑」, 노션은 「매일 저녁 오늘 업데이트된 페이지 정리」 같은 것들이에요.\n\n걸어두고 <b>바로 실행되지는 않아요.</b> 정해진 시각을 기다려야 해요. 그러니 오늘은 <b>테스트 실행</b>이 있다면 그걸로 결과를 확인해보세요.",
        note: "실제 예약은 정해진 시각까지 기다려야 하므로, 즉시 확인 가능한 테스트 실행 경로 안내가 필요하다. ⚠️ 확인 필요 - 즉시 테스트 실행 기능의 존재 여부." },
    ],
    mission: {
      title: "미션, 예약 걸고 커넥터 조합하기",
      goal: "이전에 연결한 커넥터를 활용해, 반복되는 일을 예약으로 자동화합니다.",
      steps: [
        "챕터 4에서 연결한 커넥터(노션·Gmail·캘린더 중 하나)를 확인한다",
        "그 커넥터를 활용할 반복 작업을 하나 정한다",
        "예약 만들기에서 <b>내용·주기·시각</b>을 정해 요청을 작성한다",
        "예약을 생성한다",
        "테스트 실행이 가능하면 실행해 결과를 확인한다",
      ],
      fields: [
        { n: "①", label: "예약에 사용한 요청 문구", ph: "내용·주기·시각이 다 들어간 문장을 그대로 붙여넣으세요" },
      ],
      checklist: [
        "예약 요청에 <b>커넥터(노션/Gmail/캘린더)</b>가 활용돼 있다",
        "<b>주기</b>(매일/매주)와 <b>시각</b>이 지정돼 있다",
        "예약이 <b>생성된 화면</b>이 보인다",
      ],
      submit: { what: "예약 생성 화면 + 요청 문구", format: "이미지 + 텍스트", detail: "요청 문구는 위 <b>답변 작성</b> 칸에 적고, 예약이 만들어진 화면(내용·주기·시각이 보이도록)을 아래에 첨부해주세요" },
      tip: "커넥터를 하나도 안 쓰고 계셨다면 지금이라도 하나 연결해보세요. Day 16의 그 화면, 기억하실 거예요 😊",
    },
  };
})();

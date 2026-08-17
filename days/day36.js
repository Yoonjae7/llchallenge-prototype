/*
 * Day 36 · PJT 3 (2/2) - 배포하고 완성하기
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 다른 순서 슬라이드들과 같은 세로 스테퍼(StepFlow)를 쓴다 - PJT 1·2 의 순서 슬라이드와
     같은 문법이라야 "아, 프로젝트 2일차구나"가 바로 읽힌다. 서브도메인 단계만 통과 기준이라
     아래에 따로 강조 바를 붙였다 */
  V.pjt3Day2Steps = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { StepFlow, IconUpload, IconPencil, IconPhone, IconDocFold } = UI;
    const steps = [
      { Icon: IconUpload, label: "「이 폴더를 Vercel에 배포해줘」", tone: "bg-sky-100 text-sky-600" },
      { Icon: IconPencil, label: "주소 앞부분을 내 이름으로", tone: "bg-brand-100 text-brand-600" },
      { Icon: IconPhone, label: "휴대폰으로 열어 확인", tone: "bg-violet-100 text-violet-600" },
      { Icon: IconDocFold, label: "설명 PDF 만들기", tone: "bg-emerald-100 text-emerald-600" },
    ];
    return (
      <div className={card}>
        <StepFlow steps={steps} />
        <div className="mt-3 rounded-xl px-3 py-2.5 text-center text-[10px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#FF8747,#E05500)", animation: "revealUp .4s .6s both" }}>
          2번이 <span className="text-white">통과 기준</span>이에요, 꼭 바꾸세요
        </div>
      </div>
    );
  }`);

  D[36] = {
    kind: "project",
    title: "PJT 3, 내 사이트 만들어서 배포하기 (2/2일차)",
    slides: [
      { title: "PJT 3 · 2일차, 배포하고 완성하기",
        body: "어제 만든 사이트, 오늘 <b>진짜 인터넷에 올립니다.</b>\n\n챕터 9에서 배운 그대로예요. 배포하고, 주소를 내 이름으로 바꾸고, 설명 PDF까지 만들면 끝이에요.",
        note: "챕터 9에서 익힌 배포 절차를 여기서 그대로 회수. 새로운 개념은 없고 실전 적용만 남는다." },
      { title: "순서",
        visual: "pjt3Day2Steps",
        body: "어제 그 프로젝트를 이어서 열고, 네 단계만 밟으면 끝이에요.\n\n설명 PDF는 길 필요 없어요. <b>뭘 만들었고 왜 만들었는지</b>가 들어가면 충분해요.",
        note: "챕터 9 마지막 Day에서 익힌 배포+서브도메인 절차를 그대로 적용. PDF는 pdf 스킬로 간단히 생성. 순서는 StepFlow(pjt3Day2Steps)가 맡고 글은 PDF 기준만 짚는다." },
      { title: "완성했어요 🎉",
        body: "{{name}}님 이름이 들어간 주소, 이제 누구에게나 보낼 수 있어요.\n\n「나 이런 거 만들었어」가 아니라 <b>「여기 들어와봐」</b>로 자랑하시면 돼요 😊",
        note: "완성의 성취감으로 마무리. 다음 프로젝트에 대한 언급 없이 이 프로젝트 자체로 닫는다." },
    ],
    mission: {
      title: "PJT 3 (2/2), 배포하고 완성하기",
      goal: "어제 만든 사이트를 Vercel에 배포하고, 커스텀 서브도메인을 설정한 뒤, 설명 PDF를 작성합니다.",
      steps: [
        "어제 만든 프로젝트를 이어서 연다",
        "클로드 코드에게 「이 폴더를 Vercel에 배포해줘」라고 요청한다",
        "배포된 주소의 앞부분을 <b>내 이름</b>으로 바꾼다",
        "휴대폰으로 열어 실제로 접속되는지 확인한다",
        "클로드에게 이 사이트를 설명하는 PDF를 만들어달라고 요청한다",
      ],
      fields: [
        { n: "①", label: "완성된 사이트 주소", ph: "예: https://내이름.vercel.app" },
      ],
      checklist: [
        "주소 앞부분에 <b>내 이름이나 내가 정한 단어</b>가 들어 있다 (커스텀 서브도메인)",
        "그 주소가 <b>실제로 열린다</b>",
        "클릭하거나 입력하면 반응하는 동작이 <b>1개 이상</b> 있다",
        "뭘 만들었고 왜 만들었는지 담은 <b>설명 PDF</b> 1개가 있다",
      ],
      submit: { what: "사이트 주소 + 설명 PDF", format: "텍스트 + 파일 첨부", detail: "사이트 주소는 위 <b>답변 작성</b> 칸에 적고, 설명 PDF 파일을 아래에 첨부해주세요" },
      tip: "이름이 이미 쓰이고 있다고 나오면 -dev, 숫자 같은 걸 붙여보세요. PDF는 길 필요 없어요, 2페이지 이내면 충분해요.",
    },
  };
})();

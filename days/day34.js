/*
 * Day 34 · 챕터 9 - 계정 만들고 배포 → 재배포 → 커스텀 서브도메인 (실습)
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* PJT 3 통과 기준이기도 한 서브도메인 변경. 설명보다 주소창을 그대로 보여주는 게 빠르다.
     위는 배포 직후의 정체불명 주소, 아래는 내 이름이 박힌 주소. 아래 주소창만 브랜드색
     테두리로 살리고 자물쇠·커서를 넣어 "진짜 열리는 주소"처럼 보이게 했다 */
  V.subdomainRename = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconArrowSm } = UI;
    const Bar = ({ url, hi, sub }) => (
      <div className={"rounded-xl border px-2.5 py-2 " + (hi ? "border-brand-300 bg-brand-50/70 shadow-soft" : "border-gray-200 bg-white")}>
        <div className="flex items-center gap-1.5">
          <span className={"shrink-0 w-2.5 h-2.5 rounded-full " + (hi ? "bg-emerald-500" : "bg-gray-300")} />
          <span className={"text-[9.5px] font-black truncate " + (hi ? "text-brand-700" : "text-gray-400")}>{url}</span>
        </div>
        <div className={"mt-1 text-[8px] font-semibold " + (hi ? "text-brand-600" : "text-gray-400")}>{sub}</div>
      </div>
    );
    return (
      <div className={card}>
        <div style={{ animation: "revealUp .4s both" }}>
          <Bar url="wispy-forest-a7f3k2.vercel.app" sub="배포하면 처음엔 이런 주소예요" />
        </div>

        <div className="flex justify-center py-1.5">
          <span className="text-brand-400 rotate-90" style={{ animation: "nudgeR 1.6s ease-in-out infinite" }}>
            <IconArrowSm />
          </span>
        </div>

        <div style={{ animation: "revealUp .4s .35s both" }}>
          <Bar url="yunjae.vercel.app" hi sub="앞부분만 바꾸면 이력서에 적을 수 있는 주소가 돼요" />
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {["yunjae", "yunjae-dev", "yunjae-portfolio"].map((n, i) => (
            <div key={i} className="rounded-lg bg-white border border-gray-100 px-1.5 py-1.5 text-center"
              style={{ animation: "popIn .3s " + (.6 + i * .1) + "s cubic-bezier(.2,.9,.3,1.15) both" }}>
              <div className="text-[8px] font-black text-gray-600 truncate">{n}</div>
            </div>
          ))}
        </div>
        <div className="mt-1 text-center text-[8px] font-semibold text-gray-400">
          이미 쓰는 이름이면 뒤에 뭘 붙이면 돼요
        </div>

        <div className="mt-2.5 rounded-xl px-3 py-2.5 text-center text-[10px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#FF8747,#E05500)" }}>
          이게 <span className="text-white">PJT 3의 통과 기준</span>이에요
        </div>
      </div>
    );
  }`);

  D[34] = {
    kind: "practice",
    title: "계정 만들고 배포, 재배포, 서브도메인",
    slides: [
      { title: "오늘, 주소가 생기고 그게 내 이름이 돼요 🌐",
        body: "오늘 하루의 목표는 이거예요.\n\n<b>{{name}}님이 만든 것이 인터넷에 올라가고, 누구나 들어올 수 있는 주소를 갖는 것. 그리고 그 주소를 내 이름으로 바꾸는 것까지.</b>\n\n계정 만들기부터 배포, 주소 바꾸기까지 오늘 안에 다 합니다. 계정만 만들고 끝내면 아무 감흥이 없거든요 😄",
        note: "계정 생성만으로 하루를 끝내면 성취감이 없다. 반드시 살아있는 URL, 그리고 서브도메인까지 도달하게 설계, 두 실습 Day를 하나로 합친 결과." },
      { title: "계정 만들기, 2분이면 끝",
        body: "Vercel 사이트에 가서 가입하시면 돼요.\n\n<b>깃허브(GitHub) 계정으로 가입</b>하는 게 가장 편해요. 깃허브가 없으시면 그것도 같이 만들게 되는데, 이것도 몇 분이면 돼요.\n\n왜 깃허브냐고요? 나중에 파일을 올리고 고칠 때 이 둘이 연결돼 있으면 훨씬 수월하거든요.\n\n결제 정보는 <b>안 물어봐요.</b> 물어보는 화면이 나오면 무료 플랜을 고르셨는지 확인해보세요 😊",
        note: "⚠️ 확인 필요, Vercel 가입 흐름(깃허브 연동 포함)의 실제 화면을 캡처해 첨부. 가입 방식은 변동 가능하므로 출시 시점 재확인 필수." },
      { title: "그리고 배포, 클로드에게 맡기세요",
        body: "여기서 좋은 소식. <b>{{name}}님이 직접 안 하셔도 돼요.</b>\n\n클로드 코드에게 이렇게 말하면 돼요. 「<b>이 폴더를 Vercel에 배포해줘.</b> 필요한 게 있으면 뭘 해야 하는지 알려줘」\n\n그러면 클로드가 순서를 안내하고 필요한 작업을 대신 해줘요. 로그인하거나 승인해야 하는 화면이 나오면 그때만 눌러주시면 돼요.\n\n막히면? <b>Day 32에서 배운 그거요.</b> 화면에 뜬 메시지를 그대로 복사해서 붙여넣으세요 😊",
        note: "Day 32의 에러 복붙 습관이 여기서 실전으로 회수된다. 배포는 막히는 지점이 많아 이 안내가 필수." },
      { title: "주소가 나오면 꼭 해보세요 📱",
        body: "배포가 끝나면 <b>xxx.vercel.app</b> 같은 주소가 나와요. 그 주소를 받으면 <b>꼭 이 두 가지를 해보세요.</b>\n\n<b>휴대폰으로 열어보기</b>, 내 컴퓨터가 아닌 곳에서도 열리는지\n<b>친구에게 보내보기</b>, 진짜로 남이 볼 수 있는지\n\n이 순간이 좀 뭉클해요. 며칠 전까지 코드 근처도 안 가던 분이 <b>인터넷에 자기 사이트를 가진</b> 거니까요.",
        note: "이 챕터의 첫 wow 모먼트. 휴대폰 확인을 반드시 시켜야 '진짜 배포됐다'는 실감이 온다." },
      { title: "고치면 어떻게 되나요?",
        body: "내용을 고치고 싶어지면 <b>또 배포하면 돼요.</b> 그리고 중요한 건, <b>주소는 그대로예요.</b>\n\n친구한테 이미 보낸 주소가 바뀌면 곤란하잖아요. 그럴 일 없어요. 내용만 새 걸로 갈아끼워집니다.\n\n방법도 아까랑 같아요. 클로드에게 「<b>수정한 내용으로 다시 배포해줘</b>」라고 하면 끝이에요 😊",
        note: "재배포 시 URL 유지는 학습자가 가장 궁금해하는 지점. 명확히 짚어준다." },
      { title: "주소 앞부분을 내 이름으로",
        visual: "subdomainRename",
        body: "지금 주소가 이상한 형태죠? 앞부분을 바꿀 수 있어요.\n\nVercel 프로젝트 설정에서 이름을 바꾸면 주소도 따라 바뀌어요. 이미 누가 쓰고 있는 이름은 못 쓰니 그럴 땐 뒤에 뭘 붙이면 돼요.\n\n<b>그리고 이거, PJT 3의 통과 기준이에요.</b> 오늘 꼭 손에 익혀두세요 😉",
        note: "⚠️ 확인 필요, 프로젝트 이름 변경 경로와 서브도메인 반영 방식을 실제 화면으로 확인해 스크린샷 첨부. PJT 3 통과 기준이므로 반드시 성공시킨다. 주소창 before/after 그림(subdomainRename)이 설명을 대신한다." },
      { title: "진짜 내 도메인도 가능해요 (선택)",
        body: "<b>yunjae.com</b> 같은 진짜 도메인도 연결할 수 있어요. 다만 이건 <b>돈이 들어요.</b> 보통 1년에 만 원대부터 시작해요.\n\n<b>이건 선택이에요.</b> 챌린지 통과와는 아무 상관 없어요.\n\n관심 있으시면 클로드에게 「Vercel에 내 도메인을 연결하는 방법 알려줘」라고 물어보세요.\n\n안 하셔도 <b>xxx.vercel.app</b>으로 충분히 멋져요 👍",
        note: "선택 항목임을 반복 명시. 비용이 드는 항목이라 통과 기준과 무관함을 분명히 해야 한다." },
      { title: "오늘의 미션",
        body: "① 계정 만들고 배포해서 주소 얻기 ② 고쳐서 다시 배포하기 ③ 주소를 내 이름으로 바꾸기. 세 가지예요.\n\n오늘로 배포 챕터가 끝나요. 그리고 내일부터는… <b>PJT 3</b>예요.\n\n지금까지 배운 디자인, 코드, 배포를 전부 꺼내서 <b>진짜 내 사이트</b>를 만드는 이틀이에요 💪",
        note: "PJT 3 예고. 서브도메인이 통과 기준임을 다시 상기시킨다." },
    ],
    mission: {
      title: "미션, 계정 만들고 배포부터 내 이름 주소까지",
      goal: "Vercel 계정을 만들어 첫 배포로 살아있는 주소를 얻고, 수정 후 재배포와 서브도메인 변경까지 한 번에 경험합니다.",
      steps: [
        "Vercel에 가입한다 (깃허브 계정 연동을 권장)",
        "클로드 코드에서 「이 폴더를 Vercel에 배포해줘」라고 요청한다",
        "로그인, 승인 화면이 나오면 눌러준다, 막히면 화면 메시지를 그대로 복사해 클로드에게 붙여넣는다",
        "배포가 끝나면 나온 주소를 <b>휴대폰으로</b> 열어본다",
        "눈에 띄는 부분을 하나 수정하고 「수정한 내용으로 다시 배포해줘」라고 요청한다, 주소가 그대로인지 확인한다",
        "Vercel에서 프로젝트 이름을 바꿔 <b>주소 앞부분을 내 이름</b>으로 만든다",
      ],
      fields: [
        { n: "①", label: "최종 사이트 주소 (내 이름으로 바꾼 것)", ph: "예: https://내이름.vercel.app" },
        { n: "②", label: "무엇을 수정했나요?", ph: "재배포 전에 고친 부분을 한 줄로 적어주세요" },
      ],
      checklist: [
        "<b>xxx.vercel.app</b> 형태의 주소가 생겼고, 실제로 열린다",
        "<b>휴대폰</b>에서 열어본 화면이 있다 (내 컴퓨터 밖에서도 열린다는 증거)",
        "수정한 내용이 재배포 후 사이트에 <b>반영</b>돼 있다",
        "주소 앞부분에 <b>내 이름이나 내가 정한 단어</b>가 들어 있고, 그 주소가 실제로 열린다",
      ],
      submit: { what: "최종 주소 + 휴대폰 화면 + 접속 화면", format: "텍스트 + 이미지", detail: "주소와 수정 내용은 위 <b>답변 작성</b> 칸에 적고, ① 휴대폰으로 연 화면 ② 새 주소로 접속한 화면을 아래에 첨부해주세요" },
      tip: "배포는 한 번에 되는 경우가 오히려 드물어요. 두세 번 왔다 갔다 하는 게 정상이니, 막히면 <b>메시지 복붙</b> 하세요 😄\n\n이름이 이미 쓰이고 있다고 나오면 <b>-dev</b>, <b>-portfolio</b>, 숫자 같은 걸 붙여보세요. 세상엔 사람이 많아요 😅",
    },
  };
})();

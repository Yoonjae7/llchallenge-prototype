/*
 * 멋쟁이 챌린지 · "클로드 배워서 인생 바꾸기"
 * ------------------------------------------------------------------
 * 프로토타입 데이터 모델 (실제 서비스에 그대로 이식 가능한 구조)
 *
 *   product   : 상품 정보 (가격 · 기간 · 환급 등)
 *   progress  : 데모용 진행 상태 (개인별 코호트 / 롤링 시작)
 *   weeks     : 1~30일 4주 + 마무리 구성 (동사형 이름)
 *   days      : Day 1~30 상세 (유형 · 제목 · 오늘의 결과물)
 *   lockedDays: 31~60일 잠금 구간 티저
 *   unitAreas : Day 유닛 10개 영역 구조 (1-4)
 *
 * status 는 progress.currentDay 기준으로 런타임에서 계산한다.
 *   day  < currentDay  → 'done'    (✅ 완료)
 *   day == currentDay  → 'current' (🔸 진행중)
 *   day  > currentDay  → 'todo'    (○  미완료)
 * ------------------------------------------------------------------
 */
window.MJC_DATA = {
  product: {
    name: "멋쟁이 챌린지",
    course: "클로드 배워서 인생 바꾸기",
    tagline: "챗봇만 써봤다면, 여기가 시작점입니다",
    price: 200000,
    priceLabel: "20만원",
    days: 60,
    refundRateMax: 0.5,       // 완주 시 최대 50% 환급
    openDate: "8월 3일",
    seats: 100,
  },

  // 데모용: "완주 중인 실제 유저" 느낌을 위해 상태를 섞는다.
  progress: {
    totalDays: 60,
    completedDays: 11,   // Day 1~11 완료
    currentDay: 12,      // Day 12 진행중 (하이라이트)
    percent: 20,         // 60일 중 지나온 비율 (12 / 60)
  },

  // 유형 메타 (색상으로 구분: 개념=회색 / 실전=오렌지 / 교차=연오렌지)
  typeMeta: {
    concept: { label: "개념", desc: "사이트 안에서 완결되는 워밍업" },
    live:    { label: "실전", desc: "옆 Claude 창에서 직접 해보는 날" },
    cross:   { label: "교차", desc: "개념 → 다음날 실전을 이어가는 날" },
  },

  weeks: [
    {
      id: "w1",
      code: "1주차",
      range: "D1~7",
      name: "제대로 물어본다",
      feature: "프롬프트 기본기 · 파일 업로드 · 대화 관리",
      outcome: "질문 하나로 결과가 달라지는 것을 체감한다",
      emoji: "💬",
      dayRange: [1, 7],
    },
    {
      id: "w2",
      code: "2주차",
      range: "D8~14",
      name: "내 작업실을 만든다",
      feature: "프로젝트 · 지식 파일 · 커스텀 지시",
      outcome: "매번 설명하지 않아도 되는 상태가 된다",
      emoji: "🗂️",
      dayRange: [8, 14],
    },
    {
      id: "w3",
      code: "3주차",
      range: "D15~21",
      name: "결과물로 뽑아낸다",
      feature: "아티팩트 · 문서·표·대시보드 생성",
      outcome: "보고서·자료를 형태 있는 산출물로 받는다",
      emoji: "📄",
      dayRange: [15, 21],
    },
    {
      id: "w4",
      code: "4주차",
      range: "D22~28",
      name: "내 도구와 연결한다",
      feature: "커넥터 · 스킬 · 리서치 모드",
      outcome: "내 메일·드라이브·노션 데이터로 일한다",
      emoji: "🔌",
      dayRange: [22, 28],
    },
    {
      id: "wf",
      code: "마무리",
      range: "D29~30",
      name: "합쳐서 하나 만든다",
      feature: "미니 프로젝트 · 30일 회고",
      outcome: "앞의 기능을 조합해 업무용 결과물 1개를 완성한다",
      emoji: "🎁",
      dayRange: [29, 30],
    },
  ],

  // Day 1~30 상세. title 은 "이럴 때 씁니다" 톤(상황 중심).
  days: [
    // ── 1주차 · 제대로 물어본다 (D1~7) ─────────────────────────
    { day: 1,  week: "w1", type: "concept", title: "AI에게 뭘 맡길지 감이 안 올 때",       output: "시뮬레이터 퀴즈 완료" },
    { day: 2,  week: "w1", type: "concept", title: "질문했는데 엉뚱한 답이 올 때",          output: "업무용 프롬프트 초안 1개" },
    { day: 3,  week: "w1", type: "concept", title: "매번 배경 설명하기 지칠 때",            output: "맥락 넣은 프롬프트 3개" },
    { day: 4,  week: "w1", type: "concept", title: "어떤 모델·설정을 골라야 할지 모를 때",  output: "내 작업용 기본 세팅 정하기" },
    { day: 5,  week: "w1", type: "concept", title: "대화가 산으로 갈 때",                   output: "오답노트 + 분할 화면 세팅" },
    { day: 6,  week: "w1", type: "live",    title: "쌓인 파일을 대신 정리시키고 싶을 때",   output: "엑셀·PDF 요약 결과 1건" },
    { day: 7,  week: "w1", type: "live",    title: "여러 파일을 한 번에 정리하고 싶을 때",  output: "정리·요약 결과 1건" },

    // ── 2주차 · 내 작업실을 만든다 (D8~14) ────────────────────
    { day: 8,  week: "w2", type: "cross",   title: "같은 일을 매번 새로 설명할 때",         output: "프로젝트 개념 이해" },
    { day: 9,  week: "w2", type: "cross",   title: "내 전용 작업 공간을 갖고 싶을 때",       output: "내 업무 프로젝트 1개 생성" },
    { day: 10, week: "w2", type: "cross",   title: "매번 자료를 다시 올리기 귀찮을 때",     output: "프로젝트에 지식 파일 등록" },
    { day: 11, week: "w2", type: "cross",   title: "올린 자료로 바로 일 시키고 싶을 때",    output: "내 업무 프로젝트 세팅 완료" },
    { day: 12, week: "w2", type: "cross",   title: "말투·형식을 매번 지시하기 싫을 때",     output: "커스텀 지시 1세트 작성" },
    { day: 13, week: "w2", type: "cross",   title: "매주 반복하는 업무가 있을 때",          output: "반복 업무 1건 정리" },
    { day: 14, week: "w2", type: "cross",   title: "그 반복 업무를 통째로 맡기고 싶을 때",  output: "반복 업무 1건 프로젝트화" },

    // ── 3주차 · 결과물로 뽑아낸다 (D15~21) ────────────────────
    { day: 15, week: "w3", type: "cross",   title: "답변을 문서 형태로 받고 싶을 때",       output: "아티팩트 첫 생성" },
    { day: 16, week: "w3", type: "cross",   title: "보고서를 대신 써줬으면 할 때",          output: "보고서 초안 1개" },
    { day: 17, week: "w3", type: "cross",   title: "표로 깔끔히 정리해야 할 때",            output: "정리 표 1개" },
    { day: 18, week: "w3", type: "cross",   title: "만든 문서를 다듬고 싶을 때",            output: "수정본 1개" },
    { day: 19, week: "w3", type: "cross",   title: "숫자를 한눈에 보고 싶을 때",            output: "간단 대시보드 1개" },
    { day: 20, week: "w3", type: "cross",   title: "만든 걸 팀과 나누고 싶을 때",           output: "공유 링크 1개" },
    { day: 21, week: "w3", type: "cross",   title: "작은 업무 도구가 필요할 때",            output: "업무용 간단 도구 1개" },

    // ── 4주차 · 내 도구와 연결한다 (D22~28) ───────────────────
    { day: 22, week: "w4", type: "cross",   title: "메일·드라이브 자료로 일 시키고 싶을 때", output: "커넥터 개념 이해" },
    { day: 23, week: "w4", type: "cross",   title: "내 메일 내용을 정리시키고 싶을 때",      output: "메일 취합 결과 1건" },
    { day: 24, week: "w4", type: "cross",   title: "드라이브 문서를 바로 쓰고 싶을 때",      output: "드라이브 자료 활용 1건" },
    { day: 25, week: "w4", type: "cross",   title: "노션 자료와 연결하고 싶을 때",           output: "내 데이터 취합 결과 1건" },
    { day: 26, week: "w4", type: "cross",   title: "반복 절차를 저장해두고 싶을 때",         output: "반복 절차 스킬 1개" },
    { day: 27, week: "w4", type: "cross",   title: "그 절차를 언제든 불러 쓰고 싶을 때",     output: "내 스킬 1개 완성" },
    { day: 28, week: "w4", type: "cross",   title: "깊게 조사해야 할 때",                   output: "조사 리포트 1건" },

    // ── 마무리 · 합쳐서 하나 만든다 (D29~30) ──────────────────
    { day: 29, week: "wf", type: "live",    title: "배운 걸 하나로 합칠 때",                output: "업무용 완성 결과물 1개" },
    { day: 30, week: "wf", type: "live",    title: "30일을 돌아볼 때",                      output: "30일 회고 + 다음 목표" },
  ],

  // 31~60일 잠금 구간 — 방향만 티저로.
  lockedTeaser: {
    code: "31일차부터",
    title: "내 업무를 실제로 바꾼다",
    desc: "Claude Code와 Cowork, 예약 작업으로 — 30일간 익힌 것을 조합해 진짜 업무를 바꿉니다",
    note: "1~30일 완주 후 자동으로 열립니다",
  },
  lockedDays: [
    { day: 31, title: "Claude Code로 작은 도구 만들기" },
    { day: 38, title: "Cowork로 함께 일하기" },
    { day: 45, title: "예약 작업으로 자동화하기" },
    { day: 52, title: "여러 도구를 엮어 업무 바꾸기" },
    { day: 60, title: "60일 회고 · 나만의 업무 시스템" },
  ],

  // Day 유닛 10개 영역 구조 (1-4). 미리보기/모달에서 사용.
  unitAreas: [
    { n: "①", key: "progress", icon: "📊", name: "상단 진행 바",   desc: "Day X / 60 + 이번 주 목표, 화면에 고정" },
    { n: "②", key: "oneline",  icon: "💬", name: "오늘의 한 줄",   desc: "‘이럴 때 씁니다’ — 기능이 아니라 상황으로" },
    { n: "③", key: "video",    icon: "🎬", name: "러프 영상",       desc: "화면 조작이 필요할 때만 30~60초" },
    { n: "④", key: "concept",  icon: "🃏", name: "개념 카드",       desc: "슬라이드 스타일 시각 자산 + 짧은 설명" },
    { n: "⑤", key: "guide",    icon: "🧭", name: "선택 가이드",     desc: "‘잘 모르겠으면 여기!’ 추천 배지" },
    { n: "⑥", key: "mission",  icon: "🎯", name: "미션",            desc: "오늘 해낼 딱 한 가지 (옆 Claude 창에서)" },
    { n: "⑦", key: "verify",   icon: "📸", name: "인증",            desc: "스크린샷·링크 제출" },
    { n: "⑧", key: "quiz",     icon: "❓", name: "퀴즈",            desc: "상황형 2~3문항, 오답 시 설명 제공" },
    { n: "⑨", key: "output",   icon: "📋", name: "오늘의 결과물",   desc: "복붙 가능한 템플릿 · 원클릭 복사" },
    { n: "⑩", key: "nav",      icon: "↔️", name: "하단 고정 네비",  desc: "이전 / 다음 + 이어하기(Resume)" },
  ],

  // ── Day 1 · 무조건 동기부여(motivation) 화면 ─────────────────
  // "와 나 돈 지르길 잘했다" 하고 시작하게 만드는 첫날.
  day1: {
    kicker: "DAY 1 · 오늘부터 시작이에요",
    greeting: "잘 왔어요. 여기가 시작점이에요.",
    lead: "오늘은 아무것도 외우지 않아도 돼요. 딱 하나, 머릿속 스위치만 바꾸고 갈 거예요.",
    mindsetBefore: "AI로 뭘 하지?",
    mindsetAfter: "이 일을, 어떻게 AI에게 맡기지?",
    mindsetPunch: "질문 하나 바꿨을 뿐인데, 전부가 바뀌었습니다.",
    todosTitle: "오늘, 이 세 가지만 해주세요",
    todos: [
      { icon: "🔥", title: "최대한 적극적으로", desc: "구경 말고 직접. 망쳐도 됩니다 — 그게 실습이에요." },
      { icon: "🧠", title: "머리에 쥐가 나도록", desc: "‘이 일을 어떻게 맡길까’를 하루 종일 생각하세요." },
      { icon: "🙋", title: "끝날 때까지 질문", desc: "궁금한 건 그 자리에서. 캠프파이어 채팅도 늘 열려 있어요." },
    ],
    promise: "그러면 오늘, 산출물 3종에 더해 ‘어? 이 일, 맡기면 되겠는데?’ 하는 레이더를 켜고 나갑니다.",
    mission: "옆에 진짜 Claude를 띄우고, ‘요즘 제일 귀찮은 반복 업무’ 하나를 그냥 털어놓아 보세요. 잘 쓰려 애쓰지 말고, 그냥 말 걸듯이.",
    missionResult: "‘맡기고 싶은 내 업무’ 3개 메모",
  },

  // ── 규칙 안내 페이지 ─────────────────────────────────────────
  rules: {
    title: "이 챌린지, 이렇게 굴러가요",
    subtitle: "복잡하지 않아요. 딱 다섯 가지만 기억하면 됩니다.",
    items: [
      { icon: "📅", title: "매일 하루가 자동으로 열려요", desc: "Day 1을 끝내면 Day 2가, 그 다음엔 Day 3이 — 듀오링고처럼 하루에 하나씩 자동으로 다음 날이 열립니다." },
      { icon: "🙈", title: "오늘 할 일만 보여줘요", desc: "전체 커리큘럼은 미리 보여주지 않아요. 오늘의 미션에만 집중하고, 다 끝내면 ‘내일 뭐 할지’ 살짝 알려드릴게요." },
      { icon: "🌙", title: "시간은 넉넉하게", desc: "밤 11시 59분에 시작해도, 자정을 넘겨 끝내도 괜찮아요. 그 날 안에 시작했다면 그 날의 미션으로 인정됩니다." },
      { icon: "🔥", title: "매일매일이 핵심이에요", desc: "미룬 미션을 나중에 몰아서 하는 건 인정되지 않아요. 그날의 미션은 그날 — 이게 실력이 붙는 유일한 방법이에요." },
      { icon: "🗓️", title: "시작일은 내가 골라요 (한 번만)", desc: "결제 후 한 달 안에서 시작일을 직접 정할 수 있어요. 단, 한 번 정하면 바꿀 수 없으니 신중히!" },
    ],
  },

  // ── 환급 안내 페이지 ─────────────────────────────────────────
  refund: {
    title: "완주하면, 절반을 돌려드려요",
    subtitle: "끝까지 해낸 사람에게 돌아가는, 스스로에게 주는 보상이에요.",
    before: "20만원",
    after: "10만원 돌려받기",
    conditions: [
      { icon: "✅", title: "모든 미션을 완료", desc: "60일 전부, 하루도 빠짐없이 그날의 미션을 끝내야 해요. 부분 완료로는 환급되지 않아요." },
      { icon: "🚫", title: "몰아서 하기는 안 돼요", desc: "밀린 미션을 한 번에 몰아 처리하는 방식은 완주로 치지 않아요. 매일매일이 조건이에요." },
      { icon: "🔥", title: "스트릭이 곧 자격이에요", desc: "하루라도 놓치면 환급 자격이 사라져요. 그때는 진행 바가 조용히 사라지니, 부담은 내려놓고 학습 자체에 집중하면 돼요." },
    ],
    note: "왜 이렇게 엄격하냐고요? 진짜로 끝까지 해낸 사람에게만 정직하게 돌려주기 위해서예요. 느슨한 약속은 아무도 지키지 않으니까요.",
  },
};

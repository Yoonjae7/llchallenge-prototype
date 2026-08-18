/*
 * Day 43 · PJT 4 (1/2) - 폴더 통째로 맡기기
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* PJT 4 의 와우는 "내가 한 게 폴더 지정뿐"이라는 것. 그 낙차를 만들려면 먼저 폴더가 얼마나
     엉망인지가 보여야 한다. 그래서 파일명·확장자가 제각각인 목록을 그대로 그렸다.
     한 문장 요청 카드 안에 네 가지 일이 들어 있다는 걸 칩으로 쪼개 보여줘, 문장 하나의
     무게를 느끼게 했다 */
  V.messyFolder = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconDocFold, IconFolder } = UI;
    const files = [
      "새 문서 (3).docx", "스캔_0417.pdf", "IMG_2231.jpg", "무제.txt",
      "회의 최종_v2_진짜최종.docx", "카톡_캡처.png", "영수증001.pdf",
    ];
    const jobs = ["파일 순회", "종류별 정리", "요약 취합", "PDF 생성"];
    return (
      <div className={card}>
        <div className="rounded-2xl bg-white border border-gray-100 shadow-soft overflow-hidden">
          <div className="px-2.5 py-1.5 bg-gray-50/80 border-b border-gray-100 flex items-center gap-1.5">
            <span className="w-3 h-3 text-gray-400"><IconFolder /></span>
            <span className="text-[9px] font-black text-gray-500">이번 달 자료</span>
            <span className="ml-auto text-[8px] font-bold text-rose-400">이름도 형식도 제각각</span>
          </div>
          <div className="p-1.5 grid grid-cols-2 gap-1">
            {files.map((f, i) => (
              <div key={i} className="flex items-center gap-1 rounded-md bg-gray-50/70 px-1.5 py-1"
                style={{ animation: "popIn .28s " + (i * .06) + "s both" }}>
                <span className="shrink-0 w-2.5 h-2.5 text-gray-300"><IconDocFold /></span>
                <span className="text-[7px] font-bold text-gray-400 truncate">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2.5 rounded-2xl border border-brand-200 bg-brand-50/70 px-2.5 py-2"
          style={{ animation: "revealUp .4s .55s both" }}>
          <div className="text-[8.5px] font-bold text-gray-700 leading-snug">
            "전부 훑어보고, 종류별로 정리하고, 이번 달 업무 요약 보고서로 취합해서 PDF로 만들어줘"
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {jobs.map((j, i) => (
              <span key={i} className="rounded-full bg-white border border-brand-200 px-1.5 py-[2px] text-[7.5px] font-black text-brand-700"
                style={{ animation: "popIn .3s " + (.75 + i * .1) + "s cubic-bezier(.2,.9,.3,1.15) both" }}>{j}</span>
            ))}
          </div>
        </div>

        <div className="mt-2 rounded-xl px-3 py-2.5 text-center text-[10px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#EC4899,#9D174D)" }}>
          한 문장에 <span className="text-white">네 가지 일</span>이 들어 있어요
        </div>
      </div>
    );
  }`);

  D[43] = {
    kind: "project",
    title: "PJT 4, 폴더 통째로 맡기기 (1/2일차)",
    slides: [
      { title: "PJT 4 · 1일차, 폴더 하나 통째로 맡기기",
        body: "이 코스의 <b>마지막 프로젝트</b>예요. 오늘은 <b>어질러진 폴더</b>를 Cowork에 통째로 맡깁니다.\n\n{{name}}님이 할 일은 <b>폴더를 지정하고 문장 하나 던지는 것</b>뿐이에요. 나머지는 Cowork가 알아서 순회하며 처리해요.",
        note: "PJT 4는 이 코스의 마지막 프로젝트. '내가 한 게 폴더 지정뿐이다'라는 와우를 슬라이드에서부터 예고." },
      { title: "오늘의 폴더와 한 문장",
        visual: "messyFolder",
        body: "이름은 제각각이고 형식도 메모·스캔·문서가 뒤섞인 폴더를 준비하세요. 이번 달 업무 자료면 딱 좋아요.\n\n그리고 미션의 요청문을 <b>그대로</b> 보내세요. 문장 하나에 네 가지 일이 들어 있어요.\n\n진행 상황 패널을 지켜보세요. 챕터 10에서 봤던 그 화면이에요.",
        note: "⚠️ 확인 필요 - 실제 샘플 폴더 제작 시 파일 15~20개, 이름 제각각, 형식 혼재로 구성. 어질러진 상태와 한 문장의 무게를 그림(messyFolder)이 보여준다." },
      { title: "내일 이어서 씁니다",
        body: "오늘은 <b>맡기고 진행 상황을 지켜보는 날</b>이었어요. 결과가 다 안 나왔어도 괜찮아요.\n\n내일 결과물을 확인하고, 부족한 부분을 추가로 시켜서 완성합니다.",
        note: "1일차는 위임+관찰, 2일차는 확인+보완으로 역할 분리." },
    ],
    mission: {
      title: "PJT 4 (1/2), 폴더 통째로 맡기기",
      goal: "어질러진 폴더를 Cowork에 한 문장으로 위임하고, 처리 과정을 지켜봅니다.",
      steps: [
        "이름·형식이 제각각인 폴더를 하나 준비한다 (파일 10~20개, <b>복사본</b>으로)",
        "위임 전 폴더 화면을 캡처한다",
        "Cowork를 열고 아래 요청문을 <b>그대로</b> 보낸다",
        "진행 상황 패널을 지켜보며 어떤 단계를 거치는지 확인한다",
      ],
      given: {
        label: "복사해서 그대로 쓰세요",
        text: "이 폴더 파일들을 전부 훑어보고, 종류별로 정리한 다음, 이번 달 업무 요약 보고서 하나로 취합해서 PDF로 만들어줘. 파일 이름도 내용에 맞게 정리해줘.",
      },
      fields: [
        { n: "①", label: "Cowork가 거친 단계", ph: "진행 상황 패널에서 본 단계를 순서대로 적어주세요\n예: 파일 훑기 → 분류 → 요약 → PDF 생성" },
      ],
      checklist: [
        "위임 <b>전</b> 폴더 화면이 있다 (어질러진 상태 그대로)",
        "Cowork <b>진행 상황 패널</b> 화면이 있다 - 여러 단계를 실제로 수행한 기록이 보인다",
        "요청 문구를 그대로 보냈다 (문장을 바꾸지 않았다)",
      ],
      submit: { what: "위임 전 폴더 화면 + 진행 상황 패널 화면", format: "이미지 2장 + 텍스트", detail: "거친 단계는 위 <b>답변 작성</b> 칸에 적고, ① 맡기기 전 폴더 화면 ② 처리 중인 진행 상황 패널 화면을 아래에 첨부해주세요" },
      tip: "시간이 좀 걸려요. 다른 일을 하면서 기다리셔도 돼요 - 그게 Cowork를 쓰는 방식이에요 😊\n\n원본이 소중한 폴더라면 <b>꼭 복사본으로</b> 하세요. 되돌리기 버튼이 없어요.",
    },
  };
})();

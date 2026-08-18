/*
 * Day 44 · PJT 4 (2/2) - 확인하고 완성하기
 */
(function () {
  "use strict";
  const D = (window.MJC_EXT_DAYS = window.MJC_EXT_DAYS || {});
  const V = (window.MJC_VISUALS = window.MJC_VISUALS || {});

  /* 어제 그림(messyFolder)의 짝. 같은 폴더가 어떻게 바뀌었는지를 나란히 놓아야 비포/애프터가
     성립한다. 왼쪽은 어제와 같은 뒤죽박죽 목록, 오른쪽은 종류별 하위 폴더 + 보고서 PDF.
     맨 아래 "내가 한 일" 한 줄이 이 프로젝트의 결론이다 */
  V.beforeAfterFolder = MJC_JSX(`function (ctx) {
    const { card, UI } = ctx;
    const { IconFolder, IconDocFold, IconArrowSm } = UI;
    const before = ["새 문서 (3).docx", "스캔_0417.pdf", "IMG_2231.jpg", "무제.txt"];
    const after = [
      { n: "회의록", folder: true },
      { n: "영수증", folder: true },
      { n: "참고자료", folder: true },
      { n: "이번달_업무요약.pdf", folder: false },
    ];
    return (
      <div className={card}>
        <div className="flex items-stretch gap-1.5">
          <div className="flex-1 min-w-0 rounded-xl bg-white border border-gray-200 overflow-hidden shadow-soft"
            style={{ animation: "revealUp .4s both" }}>
            <div className="px-2 py-1 bg-gray-50 border-b border-gray-100 text-[8px] font-black text-gray-400">전</div>
            <div className="p-1.5 space-y-1">
              {before.map((f, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="shrink-0 w-2 h-2 text-gray-300"><IconDocFold /></span>
                  <span className="text-[6.5px] font-bold text-gray-400 truncate">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <span className="self-center shrink-0 text-brand-400"
            style={{ animation: "nudgeR 1.7s ease-in-out infinite" }}><IconArrowSm /></span>

          <div className="flex-1 min-w-0 rounded-xl bg-white border border-emerald-200 overflow-hidden shadow-soft"
            style={{ animation: "revealUp .4s .2s both" }}>
            <div className="px-2 py-1 bg-emerald-50 border-b border-emerald-100 text-[8px] font-black text-emerald-600">후</div>
            <div className="p-1.5 space-y-1">
              {after.map((f, i) => (
                <div key={i} className="flex items-center gap-1"
                  style={{ animation: "popIn .3s " + (.4 + i * .12) + "s cubic-bezier(.2,.9,.3,1.15) both" }}>
                  <span className={"shrink-0 w-2 h-2 " + (f.folder ? "text-emerald-500" : "text-rose-500")}>
                    {f.folder ? <IconFolder /> : <IconDocFold />}
                  </span>
                  <span className="text-[6.5px] font-bold text-gray-600 truncate">{f.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2.5 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-3 py-2 text-center">
          <div className="text-[8.5px] font-bold text-gray-400">내가 한 일</div>
          <div className="mt-0.5 text-[10px] font-black text-ink">폴더 지정 + 문장 하나</div>
        </div>

        <div className="mt-2 rounded-xl px-3 py-2.5 text-center text-[10px] font-black text-white leading-snug"
          style={{ background: "linear-gradient(135deg,#EC4899,#9D174D)" }}>
          말로 시키면, <span className="text-white">컴퓨터가 알아서 해요</span>
        </div>
      </div>
    );
  }`);

  D[44] = {
    kind: "project",
    title: "PJT 4, 폴더 통째로 맡기기 (2/2일차)",
    slides: [
      { title: "PJT 4, 2일차, 확인하고 완성하기",
        body: "어제 맡긴 게 다 끝났을 거예요. 오늘은 <b>결과를 확인</b>하고, 부족한 부분을 <b>추가로 시켜서</b> 완성합니다.\n\n맡겼으면 확인하는 것까지가 한 세트예요. 챕터 1부터 계속 말씀드린 그 태도요 😊",
        note: "위임 후 검증 습관, 챕터 1부터 일관되게 강조해온 태도의 최종 적용." },
      { title: "확인할 것들",
        visual: "beforeAfterFolder",
        body: "파일들이 <b>종류별로</b> 잘 나뉘었는지, 이름이 <b>내용에 맞게</b> 바뀌었는지, 요약 보고서 <b>PDF</b>가 실제로 만들어졌는지, 보고서에 <b>빠진 내용</b>은 없는지 보세요.\n\n부족한 부분이 있으면 그대로 말하면 돼요. 「<b>OO 부분이 빠졌어, 추가해줘</b>」처럼요.",
        note: "체크리스트 형태로 검증 기준을 명확히 제시. 재요청이 정상적인 흐름임을 강조. 비포/애프터 그림(beforeAfterFolder)이 어제 폴더와 짝을 이룬다." },
      { title: "완성했어요 🎉",
        body: "어질러진 폴더 하나를 통째로 넘겨서, 정리된 폴더와 완성된 보고서를 받으셨어요.\n\n{{name}}님이 한 일은 <b>폴더를 지정하고 문장 하나 던진 것</b>뿐이에요. 나머지는 전부 Cowork가 했어요.\n\n이 코스에서 배운 모든 게 결국 여기로 왔어요. <b>말로 시키면, 컴퓨터가 알아서 한다.</b>",
        note: "코스 전체를 관통하는 메시지로 마무리. PJT 4가 마지막 프로젝트이므로 완주 자체의 의미로 닫는다." },
    ],
    mission: {
      title: "PJT 4 (2/2), 결과 확인하고 완성하기",
      goal: "Cowork가 처리한 결과를 확인하고, 부족한 부분을 추가로 요청해 최종 산출물을 완성합니다.",
      steps: [
        "정리된 폴더와 생성된 PDF를 연다",
        "파일 분류, 이름, 보고서 내용을 확인한다",
        "부족하거나 이상한 부분이 있으면 <b>구체적으로</b> 다시 요청한다",
        "최종 결과물을 확인하고 파일을 첨부한다",
      ],
      fields: [
        { n: "①", label: "확인 후 추가로 요청한 내용", ph: "예: 영수증 항목이 요약에서 빠져 있어서 추가해달라고 했어요" },
      ],
      checklist: [
        "정리 <b>후</b> 폴더 화면이 있다 (분류, 이름이 정돈된 상태)",
        "완성된 <b>업무 요약 보고서 PDF</b> 파일이 있다",
        "확인 후 <b>추가로 요청한 내용</b>이 최소 1건 적혀 있다",
      ],
      submit: { what: "정리 후 폴더 화면 + 완성 PDF + 추가 요청 내용", format: "이미지 + 파일 첨부 + 텍스트", detail: "추가 요청 내용은 위 <b>답변 작성</b> 칸에 적고, 정리된 폴더 화면과 완성된 보고서 PDF를 아래에 첨부해주세요" },
      tip: "한 번에 완벽하지 않아도 괜찮아요. 맡기고 확인하고 고쳐 시키는 게 Cowork를 쓰는 정상적인 리듬이에요.",
    },
  };
})();

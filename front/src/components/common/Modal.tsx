import { ModalButon } from "@/components/Home/Modal/ModalButton";
import { ModalExamButton } from "@/components/Home/Modal/ModalExamButton";

import { RecommendExamNameType } from "@/types";
import { RECOMMEND_EXAM_TIME } from "@/constants";

interface Props {
  examName: RecommendExamNameType;
  onClick: () => void;
}

export function Modal({ examName, onClick }: Props) {
  return (
    <div>
      <div className="modal-overlay" onClick={onClick}></div>
      <div className="absolute w-10/12 h-10/12 flex flex-col gap-6 py-5 px-5 bg-white dark:bg-black rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-full flex item-center justify-center">
          <span className="text-xl font-semibold text-text-default dark:text-text-dark">
            {examName}
          </span>
        </div>
        <div className="flex flex-col gap-3 w-full h-[250px] overflow-scroll">
          {RECOMMEND_EXAM_TIME[examName].map((exam) => (
            <ModalExamButton
              key={exam.title}
              title={exam.title}
              time={exam.time}
              onClick={() => {}}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <ModalButon title="닫기" isMain={false} onClick={() => {}} isActive />
          <ModalButon title="시작하기" isMain onClick={() => {}} isActive />
        </div>
      </div>
    </div>
  );
}
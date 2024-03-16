import { ModalButon } from "@/components/Home/Modal/ModalButton";
import { ExamModal } from "@/components/common/ExamModal";
import { TimeSlider } from "@/components/CreateExam/TimeSlider";

import { useModalContext } from "@/hooks/useModalContext";

import {
  DBExamInfoType,
  RecommendExamNameType,
  StartExamContentType,
} from "@/types";
import { ModalType } from "@/constants";
import { CheckTimeInfo } from "./CheckTimeInfo";

interface Props {
  type: ModalType;
  examName?: RecommendExamNameType;
  inputExamName?: string;
  selectedExam?: DBExamInfoType;
  onClick: () => void;
}

export function PopupModal({
  type,
  examName,
  selectedExam,
  inputExamName,
  onClick,
}: Props) {
  const { handleClose } = useModalContext();

  const state = (function () {
    switch (type) {
      case ModalType.START_EXAM:
        return {
          text: "시작하기",
          content: <StartExamContent examInfo={selectedExam!} />,
        };
      case ModalType.STOP_EXAM:
        return {
          text: "시험 종료",
          content: <StopExamConent />,
        };
      case ModalType.SELECT_EXAM:
        return {
          text: "시작하기",
          content: <ExamModal examName={examName!} />,
        };
      case ModalType.DELETE_EXAM:
        return {
          text: "삭제하기",
          content: <DeleteExamConent />,
        };
      case ModalType.SET_TIME:
        return {
          text: "설정",
          content: <TimeSlider />,
        };
      case ModalType.CHECK_INPUT_INFO:
        return {
          text: "만들기",
          content: <CheckTimeInfo examTitle={inputExamName!} />,
        };
    }
  })();

  return (
    <div className="absolute w-10/12 h-10/12 flex flex-col gap-6 py-5 px-5 bg-modal-bg dark:bg-modal-bg-dark rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {state?.content}
      <div className="flex gap-2">
        <ModalButon
          title="닫기"
          isMain={false}
          isActive
          onClick={handleClose}
        />
        <ModalButon title={state!.text} isMain onClick={onClick} isActive />
      </div>
    </div>
  );

  function StartExamContent({ examInfo }: StartExamContentType) {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <h3 className="text-center text-xl text-text dark:text-text-dark font-semibold">
            {examInfo.examName}
          </h3>
        </div>
        <div className="w-full flex items-center justify-center py-2">
          <span className="text-text dark:text-text-dark text-base font-semibold">
            시험을 시작할까요?
          </span>
        </div>
      </div>
    );
  }

  function StopExamConent() {
    return (
      <div className="w-full flex items-center justify-center py-2">
        <span className="text-text dark:text-text-dark text-base font-semibold">
          시험을 종료할까요?
        </span>
      </div>
    );
  }

  function DeleteExamConent() {
    return (
      <div className="w-full flex items-center justify-center py-2">
        <span className="text-text dark:text-text-dark text-base font-semibold">
          선택한 시험을 삭제할까요?
        </span>
      </div>
    );
  }
}

import { MouseEvent, useRef, useState } from "react";

import { SectionTitle } from "@/components/Home/SectionTitle";
import { TestButton } from "@/components/Home/TestButton";
import { Title } from "@/components/common/Title";
import { ModalPortal } from "@/components/common/ModalPortal";
import { PopupModal } from "@/components/common/PopupModal";
import { ExamPlusButton } from "@/components/Home/ExamPlusButton";

import { useModalContext } from "@/hooks/useModalContext";

import { RecommendExamNameType } from "@/types";
import { ModalType, RECOMMEND_EXAM_TIME } from "@/constants";

export function Exam() {
  const [exam, setExam] = useState<RecommendExamNameType | null>();
  const [isEdit, setIsEdit] = useState(true);

  const modalType = useRef<ModalType | null>();

  const { handleOpen, handleClose } = useModalContext();

  const handleExamButtonClick = (examName: RecommendExamNameType) => {
    setExam(examName);
    modalType.current = ModalType.SELECT_EXAM;
    handleOpen();
  };

  const handleExamStartButtonClick = () => {
    // TODO: 시험정보 인자로 받기
    modalType.current = ModalType.START_EXAM;
    handleOpen();
  };

  const handleStartButtonClick = (modalType: ModalType) => {
    switch (modalType) {
      case ModalType.CREATE_EXAM:
        // TODO: 시험 생성 처리 로직 설계
        break;
      case ModalType.DELETE_EXAM:
        // TODO: 시험 삭제 처리 로직 설계
        break;
      case ModalType.SELECT_EXAM:
        // TODO: 시험 선택 처리 로직 설계
        break;
      case ModalType.START_EXAM:
        // TODO: 시험 시작 처리 로직 설계
        break;
    }
    handleClose();
  };

  const handleEditButtonClick = () => {
    setIsEdit((prev) => !prev);
  };

  const handleExamPlusButtonClick = () => {
    modalType.current = ModalType.CREATE_EXAM;
    handleOpen();
  };

  const handleExamDeleteButtonClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    modalType.current = ModalType.DELETE_EXAM;
    handleOpen();
  };

  return (
    <main>
      <Title />
      <div className="px-4">
        <section className="py-2">
          <SectionTitle title="추천" hasButton={false} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
            {Object.keys(RECOMMEND_EXAM_TIME).map((examName) => (
              <TestButton
                key={examName}
                title={examName}
                onExamBtnClick={() =>
                  handleExamButtonClick(examName as RecommendExamNameType)
                }
              />
            ))}
          </div>
        </section>
        <section className="py-2">
          <SectionTitle
            title="나의 시험"
            hasButton
            onClick={handleEditButtonClick}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {isEdit && <ExamPlusButton onClick={handleExamPlusButtonClick} />}
            {Object.keys(RECOMMEND_EXAM_TIME).map((examName) => (
              <TestButton
                key={examName}
                title={examName}
                onExamBtnClick={handleExamStartButtonClick}
                onDeleteBtnClick={handleExamDeleteButtonClick}
                isEdit={isEdit}
              />
            ))}
          </div>
        </section>
      </div>
      <ModalPortal>
        <PopupModal
          type={modalType.current!}
          onClick={() => handleStartButtonClick(modalType.current!)}
          examName={exam!}
        />
      </ModalPortal>
    </main>
  );
}

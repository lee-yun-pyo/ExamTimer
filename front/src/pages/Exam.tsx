import { MouseEvent, useRef, useState } from "react";

import { SectionTitle } from "@/components/Home/SectionTitle";
import { TestButton } from "@/components/Home/TestButton";
import { Title } from "@/components/common/Title";
import { ModalPortal } from "@/components/common/ModalPortal";
import { PopupModal } from "@/components/common/PopupModal";
import { ExamPlusButton } from "@/components/Home/ExamPlusButton";

import { DBExamInfoType, RecommendExamNameType } from "@/types";
import { ModalType, RECOMMEND_EXAM_TIME } from "@/constants";

import { useModalContext } from "@/hooks/useModalContext";
import { useExamDataStore } from "@/hooks/useExamDataStore";
import { usePostRequest } from "@/hooks/usePostRequest";

export function Exam() {
  const modalType = useRef<ModalType | null>();
  const examIdRef = useRef<number>(0);
  const [isEdit, setIsEdit] = useState(false);
  const [exam, setExam] = useState<RecommendExamNameType | null>();
  const [selectedExam, setSelectedExam] = useState<DBExamInfoType | null>(null);

  const { result: examData, handleDelete } = useExamDataStore<DBExamInfoType[]>(
    {
      method: "GET_ALL",
    }
  );
  const { postProcessData } = usePostRequest<DBExamInfoType>();
  const { handleOpen, handleClose } = useModalContext();

  const handleRecommendExamClick = (examName: RecommendExamNameType) => {
    setExam(examName);
    showModalByModalType(ModalType.SELECT_EXAM);
  };

  const handleExamStartButtonClick = (selectedExam: DBExamInfoType) => {
    setSelectedExam(selectedExam);
    showModalByModalType(ModalType.START_EXAM);
  };

  const handleExamDeleteButtonClick = (
    event: MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    event.stopPropagation();
    examIdRef.current = id;
    showModalByModalType(ModalType.DELETE_EXAM);
  };

  const showModalByModalType = (type: ModalType) => {
    modalType.current = type;
    handleOpen();
  };

  const handleStartButtonClick = (modalType: ModalType) => {
    switch (modalType) {
      case ModalType.CREATE_EXAM:
        // TODO: 시험 생성 처리 로직 설계
        break;
      case ModalType.DELETE_EXAM:
        handleDelete(examIdRef.current);
        postProcessData({ method: "DELETE", id: examIdRef.current });
        break;
      case ModalType.SELECT_EXAM:
        // TODO: 시험 선택 처리 로직 설계
        break;
      case ModalType.START_EXAM:
        // TODO: 시험 시작 처리 로직 설계
        // data 를 가지고 navigate하고 타이머 페이지에서 data가져오기
        break;
    }
    handleClose();
  };

  const handleEditButtonClick = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <main>
      <Title />
      <div className="container">
        <section className="py-2">
          <SectionTitle title="추천" hasButton={false} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
            {Object.keys(RECOMMEND_EXAM_TIME).map((examName) => (
              <TestButton
                key={examName}
                title={examName}
                onExamBtnClick={() =>
                  handleRecommendExamClick(examName as RecommendExamNameType)
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
            {isEdit && <ExamPlusButton />}
            {examData !== undefined &&
              examData.map((exam, idx) => (
                <TestButton
                  key={idx}
                  startTime={exam.startTime}
                  endTime={exam.endTime}
                  title={exam.examName}
                  onExamBtnClick={() => handleExamStartButtonClick(exam)}
                  onDeleteBtnClick={(event) =>
                    handleExamDeleteButtonClick(event, exam.id)
                  }
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
          selectedExam={selectedExam!}
          examName={exam!}
        />
      </ModalPortal>
    </main>
  );
}

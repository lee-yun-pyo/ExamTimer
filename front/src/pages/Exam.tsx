import { MouseEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [recommendExam, setRecommendExam] =
    useState<RecommendExamNameType | null>();
  const [selectedExam, setSelectedExam] = useState<DBExamInfoType | null>(null);

  const { result: examData, handleDelete } = useExamDataStore<DBExamInfoType[]>(
    {
      method: "GET_ALL",
    }
  );
  const { postProcessData } = usePostRequest<DBExamInfoType>();
  const { handleOpen, handleClose } = useModalContext();

  const navigate = useNavigate();

  const handleSetSelectedExam = (exam: DBExamInfoType) => {
    setSelectedExam(exam);
  };

  const handleRecommendExamClick = (examName: RecommendExamNameType) => {
    setRecommendExam(examName);
    showModalByModalType(ModalType.SELECT_EXAM);
  };

  const handleExamStartButtonClick = (selectedExam: DBExamInfoType) => {
    handleSetSelectedExam(selectedExam);
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
      case ModalType.DELETE_EXAM:
        setIsEdit(false);
        handleDelete(examIdRef.current);
        postProcessData({ method: "DELETE", id: examIdRef.current });
        break;
      case ModalType.SELECT_EXAM:
        navigate("/timer", { state: selectedExam });
        break;
      case ModalType.START_EXAM:
        navigate("/timer", { state: selectedExam });
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
            hasButton={examData?.length !== 0}
            onClick={handleEditButtonClick}
          />
          {examData?.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-text dark:text-text-dark text-lg font-semibold">
                나의 시험이 없습니다
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {examData !== undefined &&
                examData.map((exam, idx) => (
                  <TestButton
                    key={idx}
                    startTime={exam.startTime}
                    endTime={exam.endTime}
                    title={exam.examName}
                    onExamBtnClick={() => handleExamStartButtonClick(exam)}
                    onDeleteBtnClick={(event) =>
                      handleExamDeleteButtonClick(event, exam.id!)
                    }
                    isEdit={isEdit}
                  />
                ))}
            </div>
          )}
        </section>
        <ExamPlusButton />
      </div>
      <ModalPortal>
        <PopupModal
          type={modalType.current!}
          onClick={() => handleStartButtonClick(modalType.current!)}
          selectedExam={selectedExam!}
          examName={recommendExam!}
          onSelectExam={handleSetSelectedExam}
        />
      </ModalPortal>
    </main>
  );
}

import { MouseEvent, useEffect, useRef, useState } from "react";

import { SectionTitle } from "@/components/Home/SectionTitle";
import { TestButton } from "@/components/Home/TestButton";
import { Title } from "@/components/common/Title";
import { ModalPortal } from "@/components/common/ModalPortal";
import { PopupModal } from "@/components/common/PopupModal";
import { ExamPlusButton } from "@/components/Home/ExamPlusButton";

import { useModalContext } from "@/hooks/useModalContext";

import { DBExamInfoType, RecommendExamNameType } from "@/types";
import { ModalType, RECOMMEND_EXAM_TIME } from "@/constants";

import { createExamDB } from "@/db/ExamData";

export function Exam() {
  const [isEdit, setIsEdit] = useState(false);
  const [exam, setExam] = useState<RecommendExamNameType | null>();
  const [fetchedData, setFetchedData] = useState<DBExamInfoType[]>([]);
  const [selectedExam, setSelectedExam] = useState<DBExamInfoType | null>(null);

  const modalType = useRef<ModalType | null>();

  const { handleOpen, handleClose } = useModalContext();

  const handleRecommendExamClick = (examName: RecommendExamNameType) => {
    setExam(examName);
    showModalByModalType(ModalType.SELECT_EXAM);
  };

  const handleExamStartButtonClick = (selectedExam: DBExamInfoType) => {
    setSelectedExam(selectedExam);
    showModalByModalType(ModalType.START_EXAM);
  };

  const handleExamDeleteButtonClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
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
        // TODO: 시험 삭제 처리 로직 설계
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

  useEffect(() => {
    async function initDB() {
      try {
        let examDataDB = await createExamDB("example");

        const result = await examDataDB.getAllExamData();
        setFetchedData(result.examList);
      } catch {
        console.log("시험을 불러올 수 없습니다.");
        throw new Error("시험을 불러올 수 없습니다.");
      }
    }

    initDB();
  }, []);

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
            {fetchedData.map((exam, idx) => (
              <TestButton
                key={idx}
                startTime={exam.startTime}
                endTime={exam.endTime}
                title={exam.examName}
                onExamBtnClick={() => handleExamStartButtonClick(exam)}
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
          selectedExam={selectedExam!}
          examName={exam!}
        />
      </ModalPortal>
    </main>
  );
}

import { useState } from "react";

import { SectionTitle } from "@/components/Home/SectionTitle";
import { TestButton } from "@/components/Home/TestButton";
import { Title } from "@/components/common/Title";
import { ModalPortal } from "@/components/common/ModalPortal";
import { PopupModal } from "@/components/common/PopupModal";

import { useModalContext } from "@/hooks/useModalContext";

import { RecommendExamNameType } from "@/types";
import { ModalType, RECOMMEND_EXAM_TIME } from "@/constants";

export function Exam() {
  const [exam, setExam] = useState<RecommendExamNameType>("수능");

  const { handleOpen, handleClose } = useModalContext();

  const handleExamButtonClick = (examName: RecommendExamNameType) => {
    setExam(examName);
    handleOpen();
  };

  const handleStartButtonClick = () => {
    // TODO: 시험시작 처리 로직 설계
    handleClose();
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
                onClick={() =>
                  handleExamButtonClick(examName as RecommendExamNameType)
                }
              />
            ))}
          </div>
        </section>
        <section className="py-2">
          <SectionTitle title="나의 시험" hasButton />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 "></div>
        </section>
      </div>
      <ModalPortal>
        <PopupModal
          type={ModalType.START_EXAM}
          onClick={handleStartButtonClick}
          examName={exam}
        />
      </ModalPortal>
    </main>
  );
}

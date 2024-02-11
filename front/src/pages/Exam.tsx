import { useState } from "react";
import { createPortal } from "react-dom";

import { SectionTitle } from "@/components/Home/SectionTitle";
import { TestButton } from "@/components/Home/TestButton";
import { Title } from "@/components/common/Title";
import { Modal } from "@/components/common/Modal";

import { RecommendExamNameType } from "@/types";
import { RECOMMEND_EXAM_TIME } from "@/constants";

export function Exam() {
  const [showModal, setShowModal] = useState(false);
  const [exam, setExam] = useState<RecommendExamNameType>("수능");

  const handleExamButtonClick = (examName: RecommendExamNameType) => {
    setShowModal(true);
    setExam(examName);
  };

  const removeModal = () => {
    setShowModal(false);
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
      {showModal &&
        createPortal(
          <Modal examName={exam} removeModal={removeModal} />,
          document.body
        )}
    </main>
  );
}

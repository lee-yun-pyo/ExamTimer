import { useState } from "react";
import { createPortal } from "react-dom";

import { SectionTitle } from "@/components/Home/SectionTitle";
import { TestButton } from "@/components/Home/TestButton";
import { Title } from "@/components/common/Title";
import { Modal } from "@/components/common/Modal";

export function Exam() {
  const [showModal, setShowModal] = useState(false);
  const [exam, setExam] = useState("");

  const handleExamButtonClick = (examName: string) => {
    setShowModal(true);
    setExam(examName);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      <Title />
      <div className="px-4">
        <section className="py-2">
          <SectionTitle title="추천" hasButton={false} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
            <TestButton
              title="수능"
              onClick={() => handleExamButtonClick("수능")}
            />
            <TestButton
              title="토익"
              onClick={() => handleExamButtonClick("토익")}
            />
            <TestButton
              title="기사"
              onClick={() => handleExamButtonClick("기사")}
            />
          </div>
        </section>
        <section className="py-2">
          <SectionTitle title="나의 시험" hasButton />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 "></div>
        </section>
      </div>
      {showModal &&
        createPortal(
          <Modal examName={exam} onClick={hideModal} />,
          document.body
        )}
    </main>
  );
}

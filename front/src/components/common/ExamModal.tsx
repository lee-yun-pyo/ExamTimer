import { Fragment, useEffect, useState } from "react";

import { ModalExamButton } from "@/components/Home/Modal/ModalExamButton";

import { DBExamInfoType, RecommendExamNameType } from "@/types";
import { RECOMMEND_EXAM_TIME } from "@/constants";

interface Props {
  examName: RecommendExamNameType;
  onSelectExam: (exam: DBExamInfoType) => void;
}

export function ExamModal({ examName, onSelectExam }: Props) {
  const [selectIndex, setSelectIndex] = useState(0);

  const handleExamButtonClick = (exam: DBExamInfoType, index: number) => {
    setSelectIndex(index);
    onSelectExam(exam);
  };

  useEffect(() => {
    onSelectExam(RECOMMEND_EXAM_TIME[examName][selectIndex]);
  }, []);

  return (
    <Fragment>
      <div className="w-full flex item-center justify-center">
        <span className="text-xl font-semibold text-text dark:text-text-dark">
          {examName}
        </span>
      </div>
      <div className="flex flex-col gap-3 w-full h-[250px] overflow-scroll">
        {RECOMMEND_EXAM_TIME[examName].map((exam, index) => (
          <ModalExamButton
            key={exam.examName}
            title={exam.examName}
            startTime={exam.startTime}
            endTime={exam.endTime}
            isSelected={index === selectIndex}
            onClick={() => {
              handleExamButtonClick(exam, index);
            }}
          />
        ))}
      </div>
    </Fragment>
  );
}

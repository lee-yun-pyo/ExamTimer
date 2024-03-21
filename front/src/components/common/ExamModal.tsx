import { Fragment, useState } from "react";

import { ModalExamButton } from "@/components/Home/Modal/ModalExamButton";

import { ExamInfoType, RecommendExamNameType } from "@/types";
import { RECOMMEND_EXAM_TIME } from "@/constants";

interface Props {
  examName: RecommendExamNameType;
}

export function ExamModal({ examName }: Props) {
  const [selectedExam, setSelectedExam] = useState<ExamInfoType | null>(null);

  const handleExamButtonClick = (exam: ExamInfoType) => {
    setSelectedExam(exam);
  };

  return (
    <Fragment>
      <div className="w-full flex item-center justify-center">
        <span className="text-xl font-semibold text-text dark:text-text-dark">
          {examName}
        </span>
      </div>
      <div className="flex flex-col gap-3 w-full h-[250px] overflow-scroll">
        {RECOMMEND_EXAM_TIME[examName].map((exam) => (
          <ModalExamButton
            key={exam.title}
            title={exam.title}
            startTime={exam.startTime}
            endTime={exam.endTime}
            isSelected={exam.title === selectedExam?.title}
            onClick={() => {
              handleExamButtonClick(exam);
            }}
          />
        ))}
      </div>
    </Fragment>
  );
}

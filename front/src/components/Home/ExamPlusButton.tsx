import { Fragment } from "react";

interface Props {
  onClick: () => void;
}

export function ExamPlusButton({ onClick }: Props) {
  return (
    <Fragment>
      <div
        className="gap-px bg-button-bg dark:bg-button-bg-dark rounded-xl flex flex-col items-center justify-center shadow-md h-16 cursor-pointer"
        onClick={onClick}
      >
        <span className="font-semibold text-3xl text-text dark:text-text-dark">
          +
        </span>
      </div>
    </Fragment>
  );
}

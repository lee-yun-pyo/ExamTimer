import { Link } from "react-router-dom";

export function ExamPlusButton() {
  return (
    <Link to="create-exam">
      <div className="gap-px bg-button-bg dark:bg-button-bg-dark rounded-xl flex flex-col items-center justify-center shadow-md h-16 cursor-pointer">
        <span className="font-semibold text-3xl text-text dark:text-text-dark">
          +
        </span>
      </div>
    </Link>
  );
}

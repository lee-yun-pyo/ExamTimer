import { Link } from "react-router-dom";

export function ExamPlusButton() {
  const navElement = document.getElementById("navigation") as HTMLElement;
  const heightOfNav = navElement?.offsetHeight;

  return (
    <Link to="create-exam">
      <div
        style={{ bottom: `${heightOfNav + 20}px` }}
        className="absolute left-1/2 transform -translate-x-1/2 bg-main-color-light dark:bg-main-color-dark rounded-full 
            flex flex-col items-center justify-center shadow-md py-2.5 px-3 cursor-pointer"
      >
        <span className="font-semibold text-base text-text-dark">
          + 시험 만들기
        </span>
      </div>
    </Link>
  );
}

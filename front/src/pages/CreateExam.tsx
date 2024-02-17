import { BackIcon } from "@/components/Icons/BackIcon";
import { DownArrorIcon } from "@/components/Icons/DownArrowIcon";

export function CreateExam() {
  return (
    <div className="w-full h-screen px-4 py-4 bg-theme-light dark:bg-theme-dark">
      <nav className="my-2">
        <BackIcon size={25} />
      </nav>
      <h1 className="font-semibold text-xl text-text dark:text-text-dark">
        시험 타이머 설정
      </h1>
      <form>
        <div className="relative my-3">
          <input
            id="examTitle"
            type="text"
            placeholder="adsf"
            className="text-left text-lg px-2 py-3 w-full outline-none 
            bg-theme-light dark:bg-theme-dark border-border border-b-2
            text-text dark:text-text-dark placeholder:opacity-0	
            focus:border-main-color dark:focus:border-main-color-dark 
             [&~label]:focus:scale-[60%] [&~label]:focus:translate-y-[-22px]
             [&~label]:[&:not(:placeholder-shown)]:scale-[60%] 
             [&~label]:[&:not(:placeholder-shown)]:translate-y-[-22px]"
          />
          <label
            htmlFor="examTitle"
            className="absolute left-2 top-3 text-lg text-text-sub-light origin-left duration-200 pointer-events-none"
          >
            시험 이름 입력
          </label>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between px-4 py-4 bg-button-bg dark:bg-button-bg-dark rounded-lg font-semibold">
            <span className="text-text dark:text-text-dark">시작 시간</span>
            <div className="flex items-center gap-2">
              <span className="text-text dark:text-text-dark">11:00 AM</span>
              <DownArrorIcon size={20} />
            </div>
          </div>
          <div className="flex justify-between px-4 py-4 bg-button-bg dark:bg-button-bg-dark rounded-lg font-semibold">
            <span className="text-text dark:text-text-dark">종료 시간</span>
            <div className="flex items-center gap-2">
              <span className="text-text dark:text-text-dark">12:00 PM</span>
              <DownArrorIcon size={20} />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="설정하기"
          className="fixed bottom-6 left-0 right-0 mx-auto w-11/12 bg-main-color dark:bg-main-color-dark py-3 text-text-dark font-semibold rounded-lg"
        />
      </form>
    </div>
  );
}

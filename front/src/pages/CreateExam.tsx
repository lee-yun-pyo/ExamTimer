import { useRef } from "react";

import { BackIcon } from "@/components/Icons/BackIcon";
import { DownArrorIcon } from "@/components/Icons/DownArrowIcon";
import { ModalPortal } from "@/components/common/ModalPortal";
import { PopupModal } from "@/components/common/PopupModal";

import { ModalType } from "@/constants";

import { useSetTimeContext } from "@/hooks/useSetTimeContext";
import { useModalContext } from "@/hooks/useModalContext";

export function CreateExam() {
  const modalType = useRef<ModalType | null>();

  const { handleOpen, handleClose } = useModalContext();
  const { handleChangeTimeState, startTime, endTime, handleSetTimeMode } =
    useSetTimeContext();

  /**
   * 시간 종류 버튼 클릭 시
   * @param mode 시간 종류 (1. 시작시간, 2. 종료 시간)
   */
  const handleSetTimerBtnClick = (mode: number) => {
    modalType.current = ModalType.SET_TIME;
    handleSetTimeMode(mode);
    handleOpen();
  };

  /**
   * 시간 설정 모달창 확인 버튼 클릭 시
   */
  const handleSetTimerConfirm = () => {
    handleChangeTimeState();
    handleClose();
  };

  const handleSubmit = () => {};

  return (
    <div className="w-full h-screen px-4 py-4 bg-theme-light dark:bg-theme-dark">
      <nav className="flex my-2">
        <BackIcon size={25} />
      </nav>
      <h1 className="font-semibold text-xl text-text dark:text-text-dark">
        시험 타이머 설정
      </h1>
      <form onSubmit={handleSubmit}>
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
          <div
            className="flex justify-between px-4 py-4 bg-button-bg dark:bg-button-bg-dark rounded-lg font-semibold text-text dark:text-text-dark"
            onClick={() => handleSetTimerBtnClick(1)}
          >
            <span>시작 시간</span>
            <div className="flex items-center gap-2">
              <span>{startTime}</span>
              <DownArrorIcon size={20} />
            </div>
          </div>
          <div
            className="flex justify-between px-4 py-4 bg-button-bg dark:bg-button-bg-dark rounded-lg font-semibold text-text dark:text-text-dark"
            onClick={() => handleSetTimerBtnClick(2)}
          >
            <span>종료 시간</span>
            <div className="flex items-center gap-2">
              <span>{endTime}</span>
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
      <ModalPortal>
        <PopupModal type={modalType.current!} onClick={handleSetTimerConfirm} />
      </ModalPortal>
    </div>
  );
}

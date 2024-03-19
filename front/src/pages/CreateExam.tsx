import { useEffect, useRef, useState } from "react";

import { BackIcon } from "@/components/Icons/BackIcon";
import { DownArrorIcon } from "@/components/Icons/DownArrowIcon";
import { ModalPortal } from "@/components/common/ModalPortal";
import { PopupModal } from "@/components/common/PopupModal";

import { ModalType } from "@/constants";
import { calculateTimeDifference } from "@/utils";
import { DBExamInfoType } from "@/types";

import { useSetTimeContext } from "@/hooks/useSetTimeContext";
import { useModalContext } from "@/hooks/useModalContext";
import { usePostRequest } from "@/hooks/usePostRequest";

export function CreateExam() {
  const [hasWarning, setHasWarning] = useState("");
  const [examName, setExamName] = useState("");

  const modalType = useRef<ModalType | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { handleOpen, handleClose } = useModalContext();
  const { handleChangeTimeState, startTime, endTime, handleSetTimeMode } =
    useSetTimeContext();

  const { postProcessData } = usePostRequest<DBExamInfoType>();

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
   * 모달 확인 버튼 이벤트
   * @param modalType 모달 타입
   */
  const handleModalConfirm = (modalType: ModalType) => {
    switch (modalType) {
      case ModalType.SET_TIME:
        handleChangeTimeState();
        break;
      case ModalType.CHECK_INPUT_INFO:
        const createdExam = {
          examName,
          startTime,
          endTime,
        };
        postProcessData({ method: "CREATE", data: createdExam });
        break;
    }
    handleClose();
  };

  /**
   * 설정하기 버튼 클릭 시 => 입력정보 확인 모달 출력
   */
  const handleSettingBtnClick = () => {
    setHasWarning("");
    if (inputRef.current) {
      if (inputRef.current.value === "") {
        setHasWarning("시험 이름을 입력하세요");
        return;
      }
      setExamName(inputRef.current.value);
    }
    const timeDiff = calculateTimeDifference(startTime, endTime);
    if (timeDiff <= 0) {
      setHasWarning("시작 또는 종료 시간을 조절해주세요");
      return;
    }
    modalType.current = ModalType.CHECK_INPUT_INFO;
    handleOpen();
  };

  useEffect(() => {
    if (hasWarning !== "") {
      setTimeout(() => {
        setHasWarning("");
      }, 2000);
    }
  }, [hasWarning]);

  return (
    <div className="w-full h-screen px-4 py-4 bg-theme-light dark:bg-theme-dark">
      <nav className="flex my-2">
        <BackIcon size={25} />
      </nav>
      <h1 className="font-semibold text-xl text-text dark:text-text-dark">
        시험 타이머 설정
      </h1>
      <div className="relative my-3">
        <input
          ref={inputRef}
          id="examTitle"
          maxLength={10}
          type="text"
          placeholder=""
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
          시험 이름 입력 (최대 10자)
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
      <div
        className={`fixed w-fit flex bottom-24 left-0 right-0 mx-auto justify-center px-6 py-3 bg-button-bg dark:bg-button-bg-dark rounded-full ${
          hasWarning !== "" ? "animate-showing" : "animate-hiding"
        }`}
      >
        <p
          className={`inline-block font-semibold text-base text-warning-light dark:text-warning-dark`}
        >
          {hasWarning}
        </p>
      </div>
      <button
        className="fixed bottom-6 left-0 right-0 mx-auto w-11/12 bg-main-color dark:bg-main-color-dark py-3 text-text-dark font-semibold rounded-lg"
        onClick={handleSettingBtnClick}
      >
        설정하기
      </button>
      <ModalPortal>
        <PopupModal
          type={modalType.current!}
          onClick={() => handleModalConfirm(modalType.current!)}
          inputExamName={examName}
        />
      </ModalPortal>
    </div>
  );
}

import { RecommendExamInfoType } from "@/types";

export const MY_COLOR = "#3782cc";
export const IS_DARK_MODE = document.documentElement.classList.contains("dark");

export const NAVIGATION_ITEMS = {
    "": {
        title: "시험 타이머",
        icon: "ExamTimer",
    },
    "1hour": {
        title: "1시간 집중",
        icon: "HourClock",
    },
    calendar: {
        title: "캘린더",
        icon: "Calendar",
    },
};

export const RECOMMEND_EXAM_TIME: RecommendExamInfoType = {
    토익: [
        {examName: "오전", startTime: "10:10", endTime: "12:10" },
        {examName: "오후", startTime: "15:15", endTime: "17:10" },
        {examName: "RC (오전)", startTime: "10:55", endTime: "12:10" },
        {examName: "RC (오후)", startTime: "15:55", endTime: "17:10" },
    ],
    수능: [
        {examName: "국어", startTime: "08:40", endTime: "10:00" },
        {examName: "수학", startTime: "10:30", endTime: "12:10" },
        {examName: "영어", startTime: "13:10", endTime: "14:20" },
        {examName: "탐구1", startTime: "15:35", endTime: "16:05" },
        {examName: "탐구2", startTime: "16:07", endTime: "16:37" },
    ] 
} as const;

export enum ModalType {
    START_EXAM = "START_EXAM",
    SELECT_EXAM = "SELECT_EXAM",
    STOP_EXAM = "STOP_EXAM",
    CREATE_EXAM = "CREATE_EXAM",
    DELETE_EXAM = "DELETE_EXAM",
    SET_TIME = "SET_TIME",
    CHECK_INPUT_INFO = "CHECK_INPUT_INFO",
}

export const HOURS = Array.from({ length: 24 }, (_, index) =>
  index.toString().padStart(2, "0")
);

export const MINUTES = Array.from({ length: 60 }, (_, index) =>
  index.toString().padStart(2, "0")
);

export enum TimeUnitType {
    MINUTES = "MINUTES",
    HOURS = "HOURS",
}

export const DB_NAME = "example";
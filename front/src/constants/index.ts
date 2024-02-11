import { RecommendExamInfoType } from "@/types";

export const MY_COLOR = "#3782cc";

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
        {title: "오전", time: "10:10 - 12:10"},
        {title: "오후", time: "15:15 ~ 17:10"},
        {title: "RC (오전)", time: "10:55 - 12:10"},
        {title: "RC (오후)", time: "15:55 ~ 17:10"},
    ],
    수능: [
        {title: "국어", time: "08:40 ~ 10:00"},
        {title: "수학", time: "10:30 ~ 12:10"},
        {title: "영어", time: "13:10 ~ 14:20"},
        {title: "탐구1", time: "15:35 ~ 16:05"},
        {title: "탐구2", time: "16:07 ~ 16:37"},
    ] 
} as const;

export enum ModalType {
    START_EXAM = "START_EXAM",
    SELECT_EXAM = "SELECT_EXAM",
    STOP_EXAM = "STOP_EXAM",
}
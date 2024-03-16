import { RECOMMEND_EXAM_TIME } from "@/constants";

export interface ExamInfoType {
    title: string;
    time: string;
}

export interface RecommendExamInfoType {
    토익: ExamInfoType[];
    수능: ExamInfoType[];
}

export type RecommendExamNameType = keyof typeof RECOMMEND_EXAM_TIME;

export interface DBExamInfoType {
    examName: string;
    startTime: string;
    endTime: string;
}

export interface StartExamContentType {
    examInfo: DBExamInfoType
}
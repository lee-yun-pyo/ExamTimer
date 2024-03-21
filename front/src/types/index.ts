import { RECOMMEND_EXAM_TIME } from "@/constants";

export interface DBExamInfoType {
    id?: number;
    examName: string;
    startTime: string;
    endTime: string;
}

export interface StartExamContentType {
    examInfo: DBExamInfoType
}

export interface RecommendExamInfoType {
    토익: DBExamInfoType[];
    수능: DBExamInfoType[];
}

export type RecommendExamNameType = keyof typeof RECOMMEND_EXAM_TIME;

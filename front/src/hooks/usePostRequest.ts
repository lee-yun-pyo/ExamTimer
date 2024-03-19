import { useState } from "react";

import { createExamDB } from "@/db/ExamData";
import { DBExamInfoType } from "@/types";
import { DB_NAME } from "@/constants";

export function usePostRequest<T>() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<T | undefined>();
  const [error, setError] = useState("");

  interface PostProcessDataProps {
    method: "CREATE" | "DELETE" | "UPDATE";
    data?: DBExamInfoType;
    id?: number;
  }

  async function postProcessData({ method, data, id }: PostProcessDataProps) {
    setIsLoading(true);
    try {
      let response;
      const examDataDB = await createExamDB(DB_NAME);

      switch (method) {
        case "CREATE":
          response = await examDataDB.createExamData(data!);
          break;
        case "DELETE":
          response = await examDataDB.deleteExam(id!);
          break;
        case "UPDATE":
          break;
      }
      setResult(response as T);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      setError(String(error));
      setIsLoading(false);
      setIsSuccess(false);
    }
  }

  return { postProcessData, isLoading, isSuccess, error, result };
}

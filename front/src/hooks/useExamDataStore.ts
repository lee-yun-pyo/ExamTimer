import { useEffect, useState } from "react";

import { createExamDB } from "@/db/ExamData";
import { DBExamInfoType } from "@/types";
import { DB_NAME } from "@/constants";


interface Props {
  method: "GET_ALL" | "GET";
  id?: number;
  body?: DBExamInfoType;
}

export function useExamDataStore<T>({  method, id, body }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<T | undefined>();
  const [error, setError] = useState("");

  useEffect(() => {
    async function initDB() {
      setIsLoading(true);
      try {
        let response;
        const examDataDB = await createExamDB(DB_NAME);

        switch (method) {
          case "GET":
            response = await examDataDB.getExam(id!);
            setResult(response.exam as T);
            break;
          case "GET_ALL":
            response = await examDataDB.getAllExamData();
            setResult(response.examList as T);
            break;
        }
      } catch(error) {
        setError(String(error))
      }
      setIsLoading(false);
    }

    initDB();
  }, [method, id, body]);

  return { result, isLoading, error };
}

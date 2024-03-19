import { useEffect, useState } from "react";

import { createExamDB } from "@/db/ExamData";
import { DB_NAME } from "@/constants";

interface Props {
  method: "GET_ALL" | "GET";
  id?: number;
}

export function useExamDataStore<T>({ method, id }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<T | undefined>();
  const [error, setError] = useState("");

  function handleDelete (id: number) {
    const newResult = (result as T[]).filter((prev: T) => prev["id" as keyof typeof prev] !== id);
    setResult(newResult as T);
  }

  async function fetcher() {
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

  useEffect(() => {
    fetcher();
  }, [method, id]);

  return { result, isLoading, error, handleDelete };
}

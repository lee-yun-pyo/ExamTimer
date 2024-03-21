/**
 * 시, 분, AM|PM 을 입력받아서 시간 형식 문자열로 리턴
 * @param hour 시
 * @param minute 분
 * @returns 시간 형식 문자열
 */
export function convertToTimeFormat (hour: number, minute: number) {
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
}

/**
 * 시작 시간과 종료 시간 간 시간 차 구하기 (분 단위)
 * @param startTime 시작 시간
 * @param endTime 종료 시간
 * @returns 시간 차 (분)
 */
export function calculateTimeDifference(startTime: string, endTime: string): number {
  // 시간을 24시간 형식으로 변환
  const start = new Date(`2000-01-01 ${startTime}`);
  const end = new Date(`2000-01-01 ${endTime}`);

  // 두 시간 사이의 차이 계산
  const timeDifferenceInMillis = end.getTime() - start.getTime();

  // 분으로 변환
  const timeDifferenceInMinutes = timeDifferenceInMillis / (1000 * 60);

  return timeDifferenceInMinutes;
}
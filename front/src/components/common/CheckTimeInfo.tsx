import { useSetTimeContext } from "@/hooks/useSetTimeContext";

import { calculateTimeDifference } from "@/utils";

type InfoTextType = "시작 시간" | "종료 시간" | "소요 시간";

interface InfoContentProps {
  text: InfoTextType;
  value: string;
}

interface Props {
  examTitle: string;
}

export function CheckTimeInfo({ examTitle }: Props) {
  const { startTime, endTime } = useSetTimeContext();
  const timeDifference = calculateTimeDifference(startTime, endTime);

  const infoTexts = [
    { text: "시작 시간", value: startTime },
    { text: "종료 시간", value: endTime },
    { text: "소요 시간", value: `${timeDifference}분` },
  ] as InfoContentProps[];

  function InfoContent({ text, value }: InfoContentProps) {
    return (
      <div className="flex justify-between text-base font-semibold text-text-light dark:text-text-dark">
        <span className="text-text-sub-light">{text}</span>
        <span className="tracking-wide">{value}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-xl text-center font-semibold tracking-wide leading-relaxed text-text-light dark:text-text-dark">
        <span className="text-main-color dark:text-main-color-dark">
          {examTitle}
        </span>
        를
        <br />
        만들까요?
      </h2>
      <div className="flex flex-col gap-2 px-2">
        {infoTexts.map(({ text, value }) => (
          <InfoContent key={text} text={text} value={value} />
        ))}
      </div>
    </div>
  );
}

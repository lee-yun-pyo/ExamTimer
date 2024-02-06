import { SectionTitle } from "@/components/Home/SectionTitle";
import { TestButton } from "@/components/Home/TestButton";
import { Title } from "@/components/common/Title";

export function Exam() {
  return (
    <main>
      <Title />
      <div className="px-4">
        <section className="py-2">
          <SectionTitle title="추천" hasButton={false} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
            <TestButton title="수능" onClick={() => {}} />
            <TestButton title="토익" onClick={() => {}} />
            <TestButton title="기사" onClick={() => {}} />
          </div>
        </section>
        <section className="py-2">
          <SectionTitle title="나의 시험" hasButton />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 "></div>
        </section>
      </div>
    </main>
  );
}

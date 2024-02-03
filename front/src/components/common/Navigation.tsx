import { NavItem } from "./NavItem";

// 하단 네비게이션 아이템 정보
const SELECTIONS = [
  { title: "시험 타이머", icon: "ExamTimer", path: "/" },
  {
    title: "1시간 집중",
    icon: "HourClock",
    path: "/1hour",
  },
  {
    title: "캘린더",
    icon: "Calendar",
    path: "/calendar",
  },
];

export function Navigation() {
  return (
    <nav className="w-full fixed bottom-0 left-0 py-4 border-t border-border-default dark:border-border-dark rounded-t-3xl">
      <ul className="flex items-center justify-around">
        {SELECTIONS.map(({ icon, title, path }) => (
          <NavItem key={icon} title={title} iconName={icon} path={path} />
        ))}
      </ul>
    </nav>
  );
}

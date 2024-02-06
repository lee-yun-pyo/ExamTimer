import { useLocation } from "react-router-dom";

import { NavItemType } from "@/types/navigation";
import { NAVIGATION_ITEMS } from "@/constants";

export function Title() {
  const { pathname } = useLocation();
  const titlePath = pathname.split("/")[1] as NavItemType;
  const title = NAVIGATION_ITEMS[titlePath].title;
  return (
    <header className="w-full flex items-center justify-center py-4">
      <h1 className="text-lg font-semibold text-text-default dark:text-text-dark">
        {title}
      </h1>
    </header>
  );
}

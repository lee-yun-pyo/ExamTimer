import { useLocation } from "react-router-dom";

import { NavItem } from "./NavItem";

import { NAVIGATION_ITEMS } from "@/constants";
import { NavItemType } from "@/types/navigation";

export function Navigation() {
  const { pathname } = useLocation();
  const titlePath = pathname.split("/")[1] as NavItemType;
  return (
    <nav className="w-full fixed bottom-0 left-0 py-4 border-t border-border-default dark:border-border-dark rounded-t-3xl">
      <ul className="flex items-center justify-around">
        {Object.entries(NAVIGATION_ITEMS).map(([path, { title, icon }]) => (
          <NavItem
            key={icon}
            title={title}
            iconName={icon}
            path={path}
            isActive={titlePath === path}
          />
        ))}
      </ul>
    </nav>
  );
}

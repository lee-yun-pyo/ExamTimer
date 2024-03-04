import { Outlet } from "react-router-dom";

import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="w-full h-full absolute bg-theme dark:bg-theme-dark">
      <Outlet />
      <Navigation />
    </div>
  );
}

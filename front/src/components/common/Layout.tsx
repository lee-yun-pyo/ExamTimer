import { Outlet } from "react-router-dom";

import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="w-full h-full absolute dark:bg-black">
      <Outlet />
      <Navigation />
    </div>
  );
}

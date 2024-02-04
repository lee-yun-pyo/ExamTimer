import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/common/layout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <div>시험 타이머</div>,
      },
      {
        path: "1hour",
        element: <div>1시간 집중</div>,
      },
      {
        path: "calendar",
        element: <div>calendar</div>,
      },
    ],
  },
]);

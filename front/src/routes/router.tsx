import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/common/Layout";
import { Title } from "@/components/common/Title";
import { Exam } from "@/pages/Exam";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Exam />,
      },
      {
        path: "1hour",
        element: <Title />,
      },
      {
        path: "calendar",
        element: <Title />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/common/Layout";
import { Title } from "@/components/common/Title";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Title />,
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

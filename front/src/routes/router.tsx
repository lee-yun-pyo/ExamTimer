import { createBrowserRouter } from "react-router-dom";

import { Exam } from "@/pages/Exam";
import { CreateExam } from "@/pages/CreateExam";

import { Layout } from "@/components/common/Layout";
import { Title } from "@/components/common/Title";

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
  {
    path: "create-exam",
    element: <CreateExam />,
  },
]);

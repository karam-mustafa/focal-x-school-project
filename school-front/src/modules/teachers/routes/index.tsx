import { Children } from "react";
import Teachers from "../pages/Teachers";
import TeachersList from "../components/TeachersList";
import AddNewTeacher from "../pages/AddNewTeacher";

export const routes = [
  {
    path: "teachers",
    element: <Teachers />,
    children: [
      {
        path: "list",
        element: <TeachersList />,
      },
      {
        path: "add",
        element: <AddNewTeacher />,
      },
    ],
  },
];

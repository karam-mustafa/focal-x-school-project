import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { routes as teacherRoutes } from "./modules/teachers/routes/index";
import { routes as studentRoutes } from "./modules/students/routes/index";
import { routes as coursesRoutes } from "./modules/courses/routes/index";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...teacherRoutes, ...studentRoutes, ...coursesRoutes],
  },
]);

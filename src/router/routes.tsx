import MainLayout from "@/layouts/MainLayout";
import Main from "@/pages/Main";
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";
import SignIn from "@/pages/SignIn";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

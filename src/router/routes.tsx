import MainLayout from "@/layouts/MainLayout";
import WelcomeLayout from "@/layouts/WelcomeLayout";
import Main from "@/pages/Main";
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";
import SignIn from "@/pages/SignIn";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <WelcomeLayout />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Projects />,
      },
    ],
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

import { ReactComponent as LogoIcon } from "@/assets/images/TSUlogo.svg";
import { NavLink } from "react-router-dom";

import SwitchThemeButton from "../SwitchThemeButton";
import styles from "./navbar.module.scss";

export const mainNavbarItems = [
  {
    key: "logo",
    label: (
      <NavLink to="/" className="flex items-center gap-2 text-lg">
        <LogoIcon />
        <div className="flex flex-col leading-none gap-1">
          <span className="text-white font-semibold">InTime</span> <span>DailyBot</span>
        </div>
      </NavLink>
    ),
    className: styles.logo,
  },
  {
    key: "/users",
    label: <NavLink to="/users">Пользователи</NavLink>,
    path: "/users",
    className: styles.navItem,
  },
  {
    key: "/projects",
    label: <NavLink to="/projects">Проекты</NavLink>,
    className: styles.navItem,
  },
  {
    key: "theme",
    label: <SwitchThemeButton />,
    className: `${styles.rightItems}`,
  },
  {
    key: "logout",
    label: (
      <NavLink to="/logout" className="ml-auto">
        Выйти
      </NavLink>
    ),
    className: `${styles.navItem}`,
  },
];

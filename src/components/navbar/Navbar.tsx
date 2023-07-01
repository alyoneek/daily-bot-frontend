import { ReactComponent as LogoIcon } from "@/assets/images/TSUlogo.svg";
import { Menu } from "antd";
import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import SwitchThemeButton from "../SwitchThemeButton";
import styles from "./navbar.module.scss";

const Navbar: FC = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const { pathname } = location;

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[pathname]}
      className={styles.navbar}
      items={[
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
            <a onClick={() => logout()} className="w-full">
              Выйти
            </a>
          ),
          className: `${styles.navItem}`,
        },
      ]}
    />
  );
};

export default Navbar;

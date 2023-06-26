import { Menu } from "antd";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import { mainNavbarItems } from "./data";

import styles from "./navbar.module.scss";

const Navbar: FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[pathname]}
      items={mainNavbarItems}
      className={styles.navbar}
      triggerSubMenuAction="hover"
    />
  );
};

export default Navbar;

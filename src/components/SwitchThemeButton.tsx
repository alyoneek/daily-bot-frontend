import { ThemeContext } from "@/Providers";
import { FC, useContext } from "react";

import { ReactComponent as MoonIcon } from "@/assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "@/assets/icons/sun.svg";

interface SwitchThemeButtonProps {
  size?: number;
}

const SwitchThemeButton: FC<SwitchThemeButtonProps> = ({ size = 30 }) => {
  const data = useContext(ThemeContext);
  return (
    <span
      onClick={() => data.setIsDarkMode && data.setIsDarkMode((prev) => !prev)}
      className="flex items-center cursor-pointer">
      {data.isDarkMode ? (
        <SunIcon width={size} height={size} fill="#fff" />
      ) : (
        <MoonIcon width={size} height={size} fill="#939393" />
      )}
    </span>
  );
};

export default SwitchThemeButton;

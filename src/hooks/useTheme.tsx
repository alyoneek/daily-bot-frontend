import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false,
  );

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  return { isDarkMode, setIsDarkMode };
};

export default useTheme;

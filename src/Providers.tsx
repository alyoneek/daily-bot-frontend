import { ConfigProvider, theme } from "antd";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "@/router/routes";
import { store } from "@/store";
import { Dispatch, createContext } from "react";
import useTheme from "./hooks/useTheme";

export const ThemeContext = createContext<{
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<React.SetStateAction<boolean>> | null;
}>({ isDarkMode: false, setIsDarkMode: null });

const Providers = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <ConfigProvider
          theme={{
            algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          }}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default Providers;

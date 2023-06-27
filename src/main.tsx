import { router } from "@/router/routes.tsx";
import { store } from "@/store";
import { ConfigProvider, theme } from "antd";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";

const { defaultAlgorithm, darkAlgorithm } = theme;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        algorithm: defaultAlgorithm,
      }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </Provider>,
);

import Navbar from "@/components/navbar/Navbar";
import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <Layout className="min-h-full">
      <Layout.Header>
        <Navbar />
      </Layout.Header>

      <Layout.Content className="min-h-full py-10 px-10">
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default MainLayout;

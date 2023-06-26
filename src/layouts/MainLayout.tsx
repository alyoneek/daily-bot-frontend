import Navbar from "@/components/navbar/Navbar";
import { Layout } from "antd";
import { FC } from "react";

const MainLayout: FC = () => {
  return (
    // <Layout className="layout">
    <>
      <Layout.Header className="">
        <Navbar />
      </Layout.Header>

      {/* 
      <Layout.Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">Content</div>
      </Layout.Content> */}
    </>
    // </Layout>
    // <div>
    //   MainLayout
    //   <Outlet />
    // </div>
  );
};

export default MainLayout;

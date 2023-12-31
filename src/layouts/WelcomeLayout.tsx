import DescriptionCard from "@/components/DescriptionCard";
import NewsCard from "@/components/NewsCard";
import SwitchThemeButton from "@/components/SwitchThemeButton";
import RepositoriesLogoCard from "@/components/logo/RepositoriesLogoCard";
import SystemsLogoCard from "@/components/logo/SystemsLogoCard";
import { Card, Col, Layout, Row } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const WelcomeLayout: FC = () => {
  return (
    <Layout className="min-h-full">
      <Layout.Content className="min-h-full py-10 px-10">
        <Row gutter={[16, 16]} className="min-h-[500px] mb-4">
          <Col flex="700px">
            <Outlet />
          </Col>
          <Col flex="auto">
            <DescriptionCard />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col flex="700px">
            <Row gutter={[16, 16]}>
              <Col>
                <RepositoriesLogoCard />
              </Col>
              <Col flex="auto">
                <SystemsLogoCard />
              </Col>
            </Row>
          </Col>
          <Col flex="auto">
            <div className="flex gap-3">
              <div className="flex-1">
                <NewsCard />
              </div>
              <div className="flex flex-col gap-3">
                <Card>
                  <SwitchThemeButton size={50} />
                </Card>
                {/* <Card>
                  <SwitchThemeButton size={50} />
                </Card> */}
              </div>
            </div>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default WelcomeLayout;

import DescriptionCard from "@/components/DescriptionCard";
import NewsCard from "@/components/NewsCard";
import RepositoriesLogoCard from "@/components/RepositoriesLogoCard";
import SystemsLogoCard from "@/components/SystemsLogoCard";
import { Card, Col, Layout, Row } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const WelcomeLayout: FC = () => {
  return (
    <Layout className="min-h-full">
      <Layout.Content className="min-h-full py-10 px-10">
        <Row gutter={[16, 16]} className="min-h-[500px] mb-4">
          <Col flex="700px">
            <Card className="h-full">
              <Outlet />
            </Card>
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
            <NewsCard />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default WelcomeLayout;

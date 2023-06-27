import { CreateProjectCard, ProjectsCard } from "@/components/projects";
import { Col, Row, Typography } from "antd";
import { FC } from "react";

const Projects: FC = () => {
  return (
    <>
      <Typography.Title>Проекты</Typography.Title>
      <Row gutter={[10, 10]}>
        <Col flex="600px">
          <ProjectsCard />
        </Col>
        <Col flex="auto">
          {/* <UserDetailsCard /> */}
          <CreateProjectCard />
        </Col>
      </Row>
    </>
  );
};

export default Projects;

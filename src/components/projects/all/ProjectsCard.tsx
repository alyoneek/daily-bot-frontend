import { Card } from "antd";
import { FC } from "react";

import AddProjectButton from "@components/projects/all/AddProjectButton";
import ProjectsList from "@components/projects/all/ProjectsList";
import ProjectsSearch from "@components/projects/all/ProjectsSearch";

const ProjectsCard: FC = () => {
  return (
    <Card
      title={
        <div className="flex gap-5">
          <ProjectsSearch />
          <AddProjectButton />
        </div>
      }>
      <ProjectsList />
    </Card>
  );
};

export default ProjectsCard;

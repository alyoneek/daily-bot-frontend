import { Card, Divider, Typography } from "antd";
import { FC } from "react";

import GroupsSection from "@/components/projects/groups/GroupsSection";
import RepositoriesSection from "@/components/projects/repositories/RepositoriesSection";
import DeleteProjectButton from "./DeleteProjectButton";

const ProjectDetailsCard: FC = () => {
  return (
    <Card>
      <div className="flex justify-between  gap-3">
        <Typography.Title level={2}>Стажеры УЦР+Креософт</Typography.Title>
        <DeleteProjectButton />
      </div>

      <GroupsSection />
      <Divider />

      <RepositoriesSection />
    </Card>
  );
};

export default ProjectDetailsCard;

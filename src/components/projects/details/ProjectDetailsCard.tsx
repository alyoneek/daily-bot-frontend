import { Card, Divider, Spin, Typography } from "antd";
import { FC } from "react";

import GroupsSection from "@/components/projects/groups/GroupsSection";
import RepositoriesSection from "@/components/projects/repositories/RepositoriesSection";
import { projectsApi } from "@/services/projectsApi";
import { useAppSelector } from "@/store";
import { selectChoosenProjectId } from "@/store/projects/projectsSelectors";
import { Id } from "@/types/common";
import UsersSection from "../users/UsersSection";
import DeleteProjectButton from "./DeleteProjectButton";

const ProjectDetailsCard: FC = () => {
  const choosenProjectId = useAppSelector(selectChoosenProjectId);
  const { data, isFetching } = projectsApi.useGetProjectByIdQuery(choosenProjectId as Id, {
    skip: !choosenProjectId,
  });

  if (isFetching) return <Spin />;
  if (!choosenProjectId || !data) return null;

  return (
    <Card>
      <div className="flex justify-between gap-3">
        <Typography.Title level={2}>{data.name}</Typography.Title>
        <DeleteProjectButton name={data.name} id={data.id} />
      </div>

      <GroupsSection values={data.groups} />
      <Divider />

      <UsersSection values={data.users} />
      <Divider />

      <RepositoriesSection values={data.repositories} />
    </Card>
  );
};

export default ProjectDetailsCard;

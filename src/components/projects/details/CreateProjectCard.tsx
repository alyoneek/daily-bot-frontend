import { Card } from "antd";
import { FC } from "react";

import AddProjectForm from "@/components/projects/forms/AddProjectForm";
import { useAppSelector } from "@/store";
import { selectIsProjectCreating } from "@/store/projects/projectsSelectors";

const CreateProjectCard: FC = () => {
  const isProjectCreating = useAppSelector(selectIsProjectCreating);

  if (!isProjectCreating) return null;

  return (
    <Card>
      <AddProjectForm />
    </Card>
  );
};

export default CreateProjectCard;

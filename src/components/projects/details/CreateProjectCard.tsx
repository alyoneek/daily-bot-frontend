import { Card } from "antd";
import { FC } from "react";

import AddProjectForm from "@/components/projects/forms/AddProjectForm";

const CreateProjectCard: FC = () => {
  return (
    <Card>
      <AddProjectForm />
    </Card>
  );
};

export default CreateProjectCard;

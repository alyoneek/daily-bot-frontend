import { Popconfirm, message } from "antd";
import { FC } from "react";

import { projectsApi } from "@/services/projectsApi";
import { Id } from "@/types/common";
import DeleteButton from "@/ui/DeleteButton";
import { QuestionCircleOutlined } from "@ant-design/icons";

interface DeleteProjectButtonProps {
  name: string;
  id: Id;
}

const DeleteProjectButton: FC<DeleteProjectButtonProps> = ({ name, id }) => {
  const [deleteProject, { isLoading }] = projectsApi.useDeleteProjectMutation();
  const handleDelete = async () => {
    await deleteProject(id)
      .unwrap()
      .then(() => {
        message.success("Проект удален");
      });
  };

  return (
    <Popconfirm
      title={`Вы уверены, что хотите удалить проект ${name}`}
      onConfirm={handleDelete}
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      okText="Да"
      cancelText="Нет"
      okButtonProps={{ loading: isLoading }}>
      <DeleteButton />
    </Popconfirm>
  );
};

export default DeleteProjectButton;

import DeleteButton from "@/ui/DeleteButton";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import { FC } from "react";

const DeleteProjectButton: FC = () => {
  return (
    <Popconfirm
      title={`Вы уверены, что хотите удалить проект`}
      //   onConfirm={confirm}
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      okText="Да"
      cancelText="Нет">
      <DeleteButton />
    </Popconfirm>
  );
};

export default DeleteProjectButton;

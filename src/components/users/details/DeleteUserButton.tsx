import DeleteButton from "@/ui/DeleteButton";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import { FC } from "react";

const DeleteUserButton: FC = () => {
  return (
    <Popconfirm
      title={`Вы уверены, что хотите удалить пользователя`}
      //   onConfirm={confirm}
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      okText="Да"
      cancelText="Нет">
      <DeleteButton size="small" />
    </Popconfirm>
  );
};

export default DeleteUserButton;

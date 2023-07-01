import { usersApi } from "@/services/usersApi";
import { Id } from "@/types/common";
import DeleteButton from "@/ui/DeleteButton";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
import { FC } from "react";

interface DeleteUserButtonProps {
  name: string;
  id: Id;
}

const DeleteUserButton: FC<DeleteUserButtonProps> = ({ name, id }) => {
  const [deleteUser, { isLoading }] = usersApi.useDeleteUserMutation();
  const handleDelete = async () => {
    await deleteUser(id)
      .unwrap()
      .then(() => {
        message.success("Пользователь удален");
      });
  };
  return (
    <Popconfirm
      title={`Вы уверены, что хотите удалить пользователя ${name}?`}
      onConfirm={handleDelete}
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      okText="Да"
      cancelText="Нет"
      okButtonProps={{ loading: isLoading }}>
      <DeleteButton size="small" />
    </Popconfirm>
  );
};

export default DeleteUserButton;

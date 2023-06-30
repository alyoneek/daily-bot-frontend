import { usersApi } from "@/services/usersApi";
import { IUser } from "@/types/users";
import DeleteButton from "@/ui/DeleteButton";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
import { FC } from "react";

interface DeleteUserButtonProps {
  user: IUser;
}

const DeleteUserButton: FC<DeleteUserButtonProps> = ({ user }) => {
  const [deleteUser, { isLoading }] = usersApi.useDeleteUserMutation();
  const handleDelete = async () => {
    await deleteUser(user.id)
      .unwrap()
      .then(() => {
        message.success("Пользователь удален");
      });
  };
  return (
    <Popconfirm
      title={`Вы уверены, что хотите удалить пользователя ${user.lastName} ${user.firstName} ${user.middleName}?`}
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

import { UserDetailsCard, UsersCard } from "@/components/users";
import { Typography } from "antd";
import { FC } from "react";

const Users: FC = () => {
  return (
    <>
      <Typography.Title>Пользователи</Typography.Title>
      <UsersCard />
      <UserDetailsCard />
    </>
  );
};

export default Users;

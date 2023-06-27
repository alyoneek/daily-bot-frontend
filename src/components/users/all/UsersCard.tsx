import { Card } from "antd";
import { FC } from "react";

import AddUserButton from "@/components/users/all/AddUserButton";
import UsersList from "@/components/users/all/UsersList";
import UsersSearch from "@/components/users/all/UsersSearch";

const UsersCard: FC = () => {
  return (
    <Card
      title={
        <div className="flex gap-5">
          <UsersSearch />
          <AddUserButton />
        </div>
      }>
      <UsersList />
    </Card>
  );
};

export default UsersCard;

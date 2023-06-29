import { List } from "antd";
import { FC } from "react";

import ScrollableList from "@/components/ScrollableList";
import { users } from "@/data/users";
import { useAppDispatch } from "@/store";
import { usersActions } from "@/store/users/usersSlice";

const UsersList: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <ScrollableList
      size="large"
      dataSource={users}
      renderItem={(item) => (
        <List.Item
          className="cursor-pointer hover:bg-slate-50 transition-colors"
          onClick={() => dispatch(usersActions.setChoosenUserId(item.id))}>
          {item.lastName} {item.firstName} {item.middleName}
        </List.Item>
      )}
    />
  );
};

export default UsersList;

import ScrollableList from "@/components/ScrollableList";
import { users } from "@/data/users";
import { useAppDispatch } from "@/store";
import { usersActions } from "@/store/users/usersSlice";
import { List } from "antd";
import { FC } from "react";

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
          {item.name}
        </List.Item>
      )}
    />
  );
};

export default UsersList;

import { List, Spin } from "antd";
import { FC } from "react";

import ScrollableList from "@/components/ScrollableList";
import { usersApi } from "@/services/usersApi";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectUsersSearch } from "@/store/users/usersSelectors";
import { usersActions } from "@/store/users/usersSlice";

const UsersList: FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectUsersSearch);
  const { data, isLoading } = usersApi.useGetUsersQuery(search);

  if (isLoading) return <Spin />;
  return (
    <ScrollableList
      size="large"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          className="cursor-pointer hover:bg-[#e6e6e62b] rounded-lg transition-colors"
          onClick={() => dispatch(usersActions.setChoosenUserId(item.id))}>
          {item.lastName} {item.firstName} {item.middleName}
        </List.Item>
      )}
    />
  );
};

export default UsersList;

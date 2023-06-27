import { useAppDispatch } from "@/store";
import { usersActions } from "@/store/users/usersSlice";
import { List } from "antd";
import { FC } from "react";

const data = [
  {
    id: "1",
    name: "Бердников Даниил",
  },
  {
    id: "2",
    name: "Нетаве Владислав",
  },
  {
    id: "3",
    name: "Потапов Степан",
  },
];

const UsersList: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <List
      dataSource={data}
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

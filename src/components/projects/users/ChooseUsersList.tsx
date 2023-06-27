import { users } from "@/data/users";
import { Empty, List } from "antd";
import { FC } from "react";

const ChooseUsersList: FC = () => {
  return (
    <List
      locale={{ emptyText: <Empty description="Пусто" /> }}
      size="small"
      bordered
      dataSource={users}
      renderItem={(item) => <List.Item>{item.name}</List.Item>}
    />
  );
};

export default ChooseUsersList;

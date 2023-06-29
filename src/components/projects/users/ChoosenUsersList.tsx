import { List, Typography } from "antd";
import { FC } from "react";

import ScrollableList from "@/components/ScrollableList";
import { Id } from "@/types/common";
import { CloseCircleOutlined } from "@ant-design/icons";

interface ChoosenUsersListProps {
  onDeleteUser: (id: Id) => void;
}

const ChoosenUsersList: FC<ChoosenUsersListProps> = ({ values, onDeleteUser }) => {
  return (
    <ScrollableList
      size="small"
      bordered
      fixed
      dataSource={values}
      renderItem={(item) => (
        <List.Item className="flex justify-between gap-3">
          <Typography.Text>{item.name}</Typography.Text>
          <CloseCircleOutlined style={{ color: "red" }} onClick={() => onDeleteUser(item.id)} />
        </List.Item>
      )}
    />
  );
};

export default ChoosenUsersList;

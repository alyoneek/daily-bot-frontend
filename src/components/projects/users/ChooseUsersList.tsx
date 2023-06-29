import { Checkbox, List } from "antd";
import { FC } from "react";

import ScrollableList from "@/components/ScrollableList";
import { CheckboxValueType } from "antd/es/checkbox/Group";

interface ChooseUsersListProps {
  onChangeUsers: (values: CheckboxValueType[]) => void;
  choosenUsers: CheckboxValueType[];
}

const ChooseUsersList: FC<ChooseUsersListProps> = ({ values, onChangeUsers, choosenUsers }) => {
  return (
    <Checkbox.Group onChange={onChangeUsers} className="w-full" value={choosenUsers}>
      <ScrollableList
        size="small"
        bordered
        fixed
        dataSource={values}
        renderItem={(item) => (
          <List.Item className="flex justify-between gap-3">
            <span>{item.name}</span>
            <Checkbox value={item.id} />
          </List.Item>
        )}
      />
    </Checkbox.Group>
  );
};

export default ChooseUsersList;

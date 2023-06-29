import { users } from "@/data/users";
import { Id } from "@/types/common";
import { Col, Input, Row, Typography } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { FC, useState } from "react";
import ChooseUsersList from "./ChooseUsersList";
import ChoosenUsersList from "./ChoosenUsersList";

interface UsersTransferProps {
  onChangeUsers: (values: CheckboxValueType[]) => void;
  // defaultValues
}

const UsersTransfer: FC<UsersTransferProps> = ({ onChangeUsers, defaultValues = [] }) => {
  const [choosenUsers, setChoosenUsers] = useState(defaultValues);

  const handleChangeUsers = (values: CheckboxValueType[]) => {
    setChoosenUsers(values);
    onChangeUsers(values);
  };

  const handleDeleteUsers = (id: Id) => {
    const newValues = choosenUsers.filter((userId) => userId !== id);
    handleChangeUsers(newValues);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Typography.Title level={3}>Выбранные пользователи:</Typography.Title>
      </Col>
      <Col span={12}>
        <Input.Search placeholder="Поиск" />
      </Col>
      <Col span={12}>
        <ChoosenUsersList
          values={choosenUsers.map((id) => users.find((user) => user.id === id))}
          onDeleteUser={handleDeleteUsers}
        />
      </Col>
      <Col span={12}>
        <ChooseUsersList
          values={users}
          onChangeUsers={handleChangeUsers}
          choosenUsers={choosenUsers}
        />
      </Col>
    </Row>
  );
};

export default UsersTransfer;

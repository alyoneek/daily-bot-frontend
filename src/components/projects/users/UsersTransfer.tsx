import { Col, Input, Row, Typography } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { FC, useState } from "react";

import { usersApi } from "@/services/usersApi";
import { Id } from "@/types/common";
import { IShortUser } from "@/types/users";
import ChooseUsersList from "./ChooseUsersList";
import ChoosenUsersList from "./ChoosenUsersList";

interface UsersTransferProps {
  defaultValues?: Id[];
  onChangeUsers: (values: CheckboxValueType[]) => void;
}

const UsersTransfer: FC<UsersTransferProps> = ({ onChangeUsers, defaultValues = [] }) => {
  const [search, setSearch] = useState("");
  const { data } = usersApi.useGetUsersQuery(search);

  const [choosenUsers, setChoosenUsers] = useState(defaultValues);

  const handleChangeUsers = (values: CheckboxValueType[]) => {
    setChoosenUsers(values as Id[]);
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
        <Input.Search placeholder="Поиск" onChange={(e) => setSearch(e.target.value)} />
      </Col>
      <Col span={12}>
        <ChoosenUsersList
          values={choosenUsers.map((id) => data?.find((user) => user.id === id) as IShortUser)}
          onDeleteUser={handleDeleteUsers}
        />
      </Col>
      <Col span={12}>
        <ChooseUsersList
          values={data ?? []}
          onChangeUsers={handleChangeUsers}
          choosenUsers={choosenUsers}
        />
      </Col>
    </Row>
  );
};

export default UsersTransfer;

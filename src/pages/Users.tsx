import { CreateUserCard, UserDetailsCard, UsersCard } from "@/components/users";
import { Col, Row, Typography } from "antd";
import { FC } from "react";

const Users: FC = () => {
  return (
    <>
      <Typography.Title>Пользователи</Typography.Title>
      <Row gutter={[10, 10]}>
        <Col flex="600px">
          <UsersCard />
        </Col>
        <Col flex="auto">
          <UserDetailsCard />
          <CreateUserCard />
        </Col>
      </Row>
    </>
  );
};

export default Users;

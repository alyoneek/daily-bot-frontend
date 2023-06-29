import { List, Typography } from "antd";
import { FC } from "react";

import ModalForm from "@/components/ModalForm";
import ScrollableList from "@/components/ScrollableList";
import useModal from "@/hooks/useModal";
import { IUsersToProjectRequest } from "@/types/projects";
import { IShortUser } from "@/types/users";
import EditButton from "@/ui/EditButton";
import EditUsersForm from "../forms/EditUsersForm";

interface UsersSectionProps {
  values?: IShortUser[];
  onAddUsers: (value: IUsersToProjectRequest) => void;
}

const UsersSection: FC<UsersSectionProps> = ({ values = [], onAddUsers }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="flex gap-3 mb-3">
        <Typography.Title level={3}>Пользователи:</Typography.Title>
        <EditButton type="primary" size="large" onClick={openModal} />
      </div>

      <ScrollableList
        bordered
        dataSource={values}
        renderItem={(item) => (
          <List.Item>
            {item.lastName} {item.firstName} {item.middleName}
          </List.Item>
        )}
      />

      <ModalForm open={isOpen} onCancel={closeModal}>
        <EditUsersForm defaultValues={values.map((item) => item.id)} onFinish={onAddUsers} />
      </ModalForm>
    </>
  );
};

export default UsersSection;

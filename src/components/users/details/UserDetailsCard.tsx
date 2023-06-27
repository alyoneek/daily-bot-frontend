import { Card, Modal, Typography } from "antd";
import { FC } from "react";

import useModal from "@/hooks/useModal";
import EditButton from "@/ui/EditButton";
import DeleteUserButton from "@components/users/details/DeleteUserButton";
import EditUserForm from "@components/users/forms/EditUserForm";

const UserDetailsCard: FC = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Card>
        <div className="flex justify-between items-center gap-3">
          <Typography.Title level={2}>Владимир Владимирович</Typography.Title>
          <div className="flex gap-2">
            <EditButton size="small" onClick={openModal} />
            <DeleteUserButton />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Typography.Text>discord ID 11111111111111</Typography.Text>
          <Typography.Text>gitlab ID 161</Typography.Text>
        </div>
      </Card>

      <Modal centered open={isOpen} onOk={openModal} onCancel={closeModal} footer={[]}>
        <EditUserForm />
      </Modal>
    </>
  );
};

export default UserDetailsCard;

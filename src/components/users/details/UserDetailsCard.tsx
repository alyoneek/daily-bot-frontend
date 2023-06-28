import { Card, Typography } from "antd";
import { FC } from "react";

import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import { useAppSelector } from "@/store";
import { selectChoosenUserId } from "@/store/users/usersSelectors";
import EditButton from "@/ui/EditButton";
import DeleteUserButton from "@components/users/details/DeleteUserButton";
import EditUserForm from "@components/users/forms/EditUserForm";

const UserDetailsCard: FC = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const choosenUserId = useAppSelector(selectChoosenUserId);

  if (!choosenUserId) return null;

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

      <ModalForm open={isOpen} onCancel={closeModal}>
        <EditUserForm />
      </ModalForm>
    </>
  );
};

export default UserDetailsCard;

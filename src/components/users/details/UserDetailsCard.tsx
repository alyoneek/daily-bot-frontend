import { Card, Spin, Typography } from "antd";
import { FC } from "react";

import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import { usersApi } from "@/services/usersApi";
import { useAppSelector } from "@/store";
import { selectChoosenUserId } from "@/store/users/usersSelectors";
import { Id } from "@/types/common";
import EditButton from "@/ui/EditButton";
import DeleteUserButton from "@components/users/details/DeleteUserButton";
import EditUserForm from "@components/users/forms/EditUserForm";

const UserDetailsCard: FC = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const choosenUserId = useAppSelector(selectChoosenUserId);
  const { data, isFetching } = usersApi.useGetUserByIdQuery(choosenUserId as Id, {
    skip: !choosenUserId,
  });

  if (isFetching) return <Spin />;
  if (!choosenUserId || !data) return null;

  return (
    <>
      <Card>
        <div className="flex justify-between items-center gap-3">
          <Typography.Title level={2}>
            {data.lastName} {data.firstName} {data.middleName}
          </Typography.Title>
          <div className="flex gap-2">
            <EditButton size="small" onClick={openModal} />
            <DeleteUserButton
              name={`${data.lastName} ${data.firstName} ${data.middleName}`}
              id={data.id}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Typography.Text>discord ID {data?.discordId}</Typography.Text>
          <Typography.Text>gitlab ID {data?.gitlabId}</Typography.Text>
        </div>
      </Card>

      <ModalForm open={isOpen} onCancel={closeModal}>
        <EditUserForm defaultValues={data} id={data.id} />
      </ModalForm>
    </>
  );
};

export default UserDetailsCard;

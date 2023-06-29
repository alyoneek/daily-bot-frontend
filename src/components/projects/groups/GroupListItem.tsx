import { List, Space, Typography } from "antd";
import { FC } from "react";

import ModalForm from "@/components/ModalForm";
import useModal from "@/hooks/useModal";
import { WithOrWithouIdType } from "@/types/common";
import { IGroupRequest, IShortGroup } from "@/types/groups";
import DeleteButton from "@/ui/DeleteButton";
import EditButton from "@/ui/EditButton";
import EditGroupForm from "../forms/EditGroupForm";

interface GroupListItemProps {
  value: WithOrWithouIdType<IShortGroup>;
  main?: boolean;
  onDeleteGroup: () => void;
  onEditGroup: (value: IGroupRequest) => void;
}

const GroupListItem: FC<GroupListItemProps> = ({
  value,
  main = false,
  onDeleteGroup,
  onEditGroup,
}) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <List.Item className="flex justify-between items-center gap-3">
        <>
          <Space>
            <span>{value.name}</span>
            {main && <Typography.Text type="secondary">Главная</Typography.Text>}
          </Space>
          <div className="flex gap-3">
            {!main && <DeleteButton onClick={onDeleteGroup} />}
            <EditButton onClick={openModal} />
          </div>
        </>
      </List.Item>

      <ModalForm open={isOpen} onCancel={closeModal}>
        <EditGroupForm
          defaultValues={value}
          onFinish={(values: IGroupRequest) => onEditGroup(values)}
        />
      </ModalForm>
    </>
  );
};

export default GroupListItem;

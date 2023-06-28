import { Typography } from "antd";
import { FC } from "react";

import ModalForm from "@/components/ModalForm";
import AddGroupForm from "@/components/projects/forms/AddGroupForm";
import GroupsList from "@/components/projects/groups/GroupsList";
import useModal from "@/hooks/useModal";
import AddButton from "@/ui/AddButton";

interface GroupsSectionProps {
  onAddGroup: (value: any) => void;
  onDeleteGroup: (id: number | string) => void;
  onEditGroup: (id: number | string, value: any) => void;
}

const GroupsSection: FC<GroupsSectionProps> = ({
  values = [],
  onAddGroup,
  onDeleteGroup,
  onEditGroup,
}) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="flex gap-3 mb-3">
        <Typography.Title level={3}>Группы:</Typography.Title>
        <AddButton type="primary" size="large" onClick={openModal} />
      </div>

      <GroupsList values={values} onDeleteGroup={onDeleteGroup} onEditGroup={onEditGroup} />

      <ModalForm open={isOpen} onCancel={closeModal}>
        <AddGroupForm onFinish={onAddGroup} />
      </ModalForm>
    </>
  );
};

export default GroupsSection;

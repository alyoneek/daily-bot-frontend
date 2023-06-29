import { Typography } from "antd";
import { FC } from "react";

import ModalForm from "@/components/ModalForm";
import ScrollableList from "@/components/ScrollableList";
import AddGroupForm from "@/components/projects/forms/AddGroupForm";
import useModal from "@/hooks/useModal";
import { Id, WithOrWithouIdType } from "@/types/common";
import { IGroupRequest, IShortGroup } from "@/types/groups";
import AddButton from "@/ui/AddButton";
import GroupListItem from "./GroupListItem";

interface GroupsSectionProps {
  values?: WithOrWithouIdType<IShortGroup>[];
  onAddGroup: (value: IGroupRequest) => void;
  onDeleteGroup: (id: number | Id) => void;
  onEditGroup: (id: number | Id, value: IGroupRequest) => void;
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

      <ScrollableList
        bordered
        dataSource={values}
        renderItem={(item, index) => (
          <GroupListItem
            value={item}
            main={index === 0}
            onDeleteGroup={() => onDeleteGroup(item.id ?? index)}
            onEditGroup={(value) => onEditGroup(item.id ?? index, value)}
          />
        )}
      />

      <ModalForm open={isOpen} onCancel={closeModal}>
        <AddGroupForm onFinish={onAddGroup} />
      </ModalForm>
    </>
  );
};

export default GroupsSection;

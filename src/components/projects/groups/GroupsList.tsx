import { List, Space, Typography } from "antd";
import { FC, useState } from "react";

import ModalForm from "@/components/ModalForm";
import ScrollableList from "@/components/ScrollableList";
import EditGroupForm from "@/components/projects/forms/EditGroupForm";
import useModal from "@/hooks/useModal";
import { Id, WithOrWithouIdType } from "@/types/common";
import { IGroupRequest, IShortGroup } from "@/types/groups";
import DeleteButton from "@/ui/DeleteButton";
import EditButton from "@/ui/EditButton";

interface GroupsListProps {
  values: WithOrWithouIdType<IShortGroup>[];
  onDeleteGroup: (id: number | Id) => void;
  onEditGroup: (id: number | Id, value: IGroupRequest) => void;
}

const GroupsList: FC<GroupsListProps> = ({ values, onDeleteGroup, onEditGroup }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [groupId, setGroupId] = useState<Id | number>();
  const [groupValue, setGroupValue] = useState<WithOrWithouIdType<IShortGroup>>();

  const handleEditClick = (value: WithOrWithouIdType<IShortGroup>, index: number) => {
    setGroupId(value.id ?? index);
    setGroupValue(value);
    openModal();
  };

  return (
    <>
      <ScrollableList
        bordered
        dataSource={values}
        renderItem={(item, index) => (
          <List.Item className="flex justify-between items-center gap-3">
            <>
              <Space>
                <span>{item.name}</span>
                {index === 0 && <Typography.Text type="secondary">Главная</Typography.Text>}
              </Space>
              <div className="flex gap-3">
                {index !== 0 && <DeleteButton onClick={() => onDeleteGroup(item.id ?? index)} />}
                <EditButton onClick={() => handleEditClick(item, index)} />
              </div>
            </>
          </List.Item>
        )}
      />

      {groupId && (
        <ModalForm open={isOpen} onCancel={closeModal}>
          <EditGroupForm
            defaultValues={groupValue}
            onFinish={(values: IGroupRequest) => onEditGroup(groupId, values)}
          />
        </ModalForm>
      )}
    </>
  );
};

export default GroupsList;

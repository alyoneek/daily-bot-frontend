import { List, Space, Typography } from "antd";
import { FC, useState } from "react";

import ModalForm from "@/components/ModalForm";
import ScrollableList from "@/components/ScrollableList";
import EditGroupForm from "@/components/projects/forms/EditGroupForm";
import useModal from "@/hooks/useModal";
import DeleteButton from "@/ui/DeleteButton";
import EditButton from "@/ui/EditButton";

interface GroupsListProps {
  onDeleteGroup: (id: string | number) => void;
  onEditGroup: (id: number | string, value: any) => void;
}

const GroupsList: FC<GroupsListProps> = ({ values, onDeleteGroup, onEditGroup }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [groupId, setGroupId] = useState();
  const [groupValue, setGroupValue] = useState();

  const handleEditClick = (value, index: number) => {
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

      <ModalForm open={isOpen} onCancel={closeModal}>
        <EditGroupForm
          defaultValues={groupValue}
          onFinish={(values) => onEditGroup(groupId, values)}
        />
      </ModalForm>
    </>
  );
};

export default GroupsList;

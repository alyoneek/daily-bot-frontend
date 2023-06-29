import { Typography } from "antd";
import { FC } from "react";

import ModalForm from "@/components/ModalForm";
import ScrollableList from "@/components/ScrollableList";
import AddRepositoryForm from "@/components/projects/forms/AddRepositoryForm";
import useModal from "@/hooks/useModal";
import { Id, WithOrWithouIdType } from "@/types/common";
import { IRepository, IRepositoryRequest } from "@/types/repositories";
import AddButton from "@/ui/AddButton";
import RepositoryListItem from "./RepositoryListItem";

interface RepositoriesSectionProps {
  values?: WithOrWithouIdType<IRepository>[];
  onAddRepository: (value: IRepositoryRequest) => void;
  onDeleteRepository: (id: number | Id) => void;
}

const RepositoriesSection: FC<RepositoriesSectionProps> = ({
  values = [],
  onAddRepository,
  onDeleteRepository,
}) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="flex gap-3 mb-3">
        <Typography.Title level={3}>Репозитории:</Typography.Title>
        <AddButton type="primary" size="large" onClick={openModal} />
      </div>

      <ScrollableList
        bordered
        dataSource={values}
        renderItem={(item, index) => (
          <RepositoryListItem
            value={item}
            onDeleteRepository={() => onDeleteRepository(item.id ?? index)}
          />
        )}
      />

      <ModalForm open={isOpen} onCancel={closeModal}>
        <AddRepositoryForm onFinish={onAddRepository} />
      </ModalForm>
    </>
  );
};

export default RepositoriesSection;

import { Modal, Typography } from "antd";
import { FC } from "react";

import AddRepositoryForm from "@/components/projects/forms/AddRepositoryForm";
import RepositoriesList from "@/components/projects/repositories/RepositoriesList";
import useModal from "@/hooks/useModal";
import AddButton from "@/ui/AddButton";

interface RepositoriesSectionProps {
  onAddRepository: (value: any) => void;
  onDeleteRepository: (id: number | string) => void;
}

const RepositoriesSection: FC<RepositoriesSectionProps> = ({
  values = [],
  onAddRepository,
  onDeleteRepository,
}) => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleRepositoryAdd = (values: any) => {
    onAddRepository(values);
    closeModal();
  };

  return (
    <>
      <div className="flex gap-3">
        <Typography.Title level={3}>Репозитории:</Typography.Title>
        <AddButton type="primary" size="large" onClick={openModal} />
      </div>

      <RepositoriesList values={values} onDeleteRepository={onDeleteRepository} />

      <Modal centered open={isOpen} onOk={openModal} onCancel={closeModal} footer={[]}>
        <AddRepositoryForm onFinish={handleRepositoryAdd} />
      </Modal>
    </>
  );
};

export default RepositoriesSection;

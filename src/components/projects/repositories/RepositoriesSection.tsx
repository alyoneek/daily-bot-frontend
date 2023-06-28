import { Typography } from "antd";
import { FC } from "react";

import ModalForm from "@/components/ModalForm";
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

  return (
    <>
      <div className="flex gap-3 mb-3">
        <Typography.Title level={3}>Репозитории:</Typography.Title>
        <AddButton type="primary" size="large" onClick={openModal} />
      </div>

      <RepositoriesList values={values} onDeleteRepository={onDeleteRepository} />

      <ModalForm open={isOpen} onCancel={closeModal}>
        <AddRepositoryForm onFinish={onAddRepository} />
      </ModalForm>
    </>
  );
};

export default RepositoriesSection;

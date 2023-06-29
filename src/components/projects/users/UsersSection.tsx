import { FC } from "react";

const UsersSection: FC = () => {
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

export default UsersSection;

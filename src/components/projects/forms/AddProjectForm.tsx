import { Button, Divider, Form, Input, Typography } from "antd";
import { FC } from "react";

import GroupsSection from "@/components/projects/groups/GroupsSection";
import RepositoriesSection from "@/components/projects/repositories/RepositoriesSection";
import useChangeFormFields from "@/hooks/useChangeFormFields";

const AddProjectForm: FC = () => {
  const [form] = Form.useForm();
  const { addValueToArray, deleteValueFromArray, editValueInArray } = useChangeFormFields(form);

  const repositories = Form.useWatch("repositories", form);
  const groups = Form.useWatch("groups", form);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    form.resetFields();
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Typography.Title level={2}>Создать проект</Typography.Title>

      <Form.Item
        name="name"
        label="Название"
        rules={[
          {
            required: true,
            message: "Поле обязательно для заполнения!",
          },
        ]}>
        <Input />
      </Form.Item>

      <Divider />

      <Form.Item name="groups">
        <GroupsSection
          values={groups}
          onAddGroup={(value) => addValueToArray(value, "groups")}
          onDeleteGroup={(id) => deleteValueFromArray(id, "groups")}
          onEditGroup={(id, value) => editValueInArray(id, value, "groups")}
        />
      </Form.Item>

      <Divider />

      <Form.Item name="repositories">
        <RepositoriesSection
          values={repositories}
          onAddRepository={(value) => addValueToArray(value, "repositories")}
          onDeleteRepository={(id) => deleteValueFromArray(id, "repositories")}
        />
      </Form.Item>

      <Divider />

      <Button type="primary" htmlType="submit" className="w-full">
        Создать новый проект
      </Button>
    </Form>
  );
};

export default AddProjectForm;

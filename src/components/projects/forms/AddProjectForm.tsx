import { Button, Divider, Form, Input, Typography } from "antd";
import { FC, useState } from "react";

import RepositoriesSection from "@/components/projects/repositories/RepositoriesSection";

const AddProjectForm: FC = () => {
  const [form] = Form.useForm();
  const [repositories, setRepositories] = useState([]);

  const setRepositoriesField = (values: any) => {
    form.setFieldValue("repositories", values);
    setRepositories(values);
  };

  // TODO
  const addRepository = (value: any) => {
    const newValues = form.getFieldValue("repositories")
      ? [...form.getFieldValue("repositories"), value]
      : [value];
    setRepositoriesField(newValues);
  };

  const deleteRepository = (id: number | string) => {
    const newValues = form.getFieldValue("repositories").filter((_, index) => index !== id);
    setRepositoriesField(newValues);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
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

      <Form.Item name="repositories">
        <RepositoriesSection
          onAddRepository={addRepository}
          onDeleteRepository={deleteRepository}
          values={repositories}
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

import { Button, Divider, Form, Input, Typography } from "antd";
import { FC } from "react";

import { groupDefaultValues } from "@/data/groups";
import { FormProps } from "@/types/form";
import UsersTransfer from "../users/UsersTransfer";
import AddSurveyForm from "./AddSurveyForm";

const AddGroupForm: FC<FormProps> = ({ afterSubmit, onFinish, form }) => {
  const handleFinish = (values: any) => {
    onFinish && onFinish(values);
    afterSubmit && afterSubmit();
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleFinish} initialValues={groupDefaultValues}>
      <Typography.Title level={3}>Новая группа</Typography.Title>

      <Form.Item
        name="name"
        label="Название группы"
        rules={[
          {
            required: true,
            message: "Поле обязательно для заполнения!",
          },
        ]}>
        <Input />
      </Form.Item>

      <Divider />

      <Form.Item name="users">
        <UsersTransfer onChangeUsers={(values) => form?.setFieldValue("users", values)} />
      </Form.Item>

      <Divider />

      <AddSurveyForm />
      <Divider />

      <Button type="primary" htmlType="submit" className="w-full">
        Добавить группу
      </Button>
    </Form>
  );
};

export default AddGroupForm;

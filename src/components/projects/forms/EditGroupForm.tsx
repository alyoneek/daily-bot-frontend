import { Button, Divider, Form, Input, Typography } from "antd";
import { FC, useEffect } from "react";

import { required } from "@/helpers/validation";
import { FormProps } from "@/types/form";
import { IGroupRequest } from "@/types/groups";
import UsersTransfer from "../users/UsersTransfer";
import AddSurveyForm from "./AddSurveyForm";

const EditGroupForm: FC<FormProps> = ({ defaultValues, form, onFinish, afterSubmit }) => {
  const handleFinish = (values: IGroupRequest) => {
    onFinish && onFinish(values);
    afterSubmit && afterSubmit();
  };

  useEffect(() => form?.resetFields(), [form, defaultValues]);

  return (
    <Form layout="vertical" form={form} onFinish={handleFinish} initialValues={defaultValues}>
      <Typography.Title level={2}>Редактировать группу</Typography.Title>

      <Form.Item name="name" label="Название группы" rules={[required]}>
        <Input />
      </Form.Item>

      <Divider />

      <Form.Item name="users">
        <UsersTransfer
          onChangeUsers={(values) => form?.setFieldValue("users", values)}
          defaultValues={defaultValues.users}
        />
      </Form.Item>

      <Divider />

      <AddSurveyForm />
      <Divider />

      <Button type="primary" htmlType="submit" className="w-full">
        Сохранить
      </Button>
    </Form>
  );
};

export default EditGroupForm;

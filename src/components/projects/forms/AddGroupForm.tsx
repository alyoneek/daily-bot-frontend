import { Button, Divider, Form, Input, Typography } from "antd";
import { FC } from "react";

import { groupDefaultValues } from "@/data/groups";
import { required } from "@/helpers/validation";
import { FormProps } from "@/types/form";
import { IGroupRequest } from "@/types/groups";
import UsersTransfer from "../users/UsersTransfer";
import AddSurveyForm from "./AddSurveyForm";

const AddGroupForm: FC<FormProps> = ({ afterSubmit, onFinish, form }) => {
  const handleFinish = (values: IGroupRequest) => {
    onFinish && onFinish(values);
    afterSubmit && afterSubmit();
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleFinish} initialValues={groupDefaultValues}>
      <Typography.Title level={2}>Новая группа</Typography.Title>

      <Form.Item name="name" label="Название группы" rules={[required]}>
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

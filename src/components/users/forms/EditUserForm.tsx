import { Button, Divider, Form, Input, InputNumber, Typography } from "antd";
import { FC } from "react";

import { required } from "@/helpers/validation";
import { FormProps } from "@/types/form";
import { IUserRequest } from "@/types/users";

const EditUserForm: FC<FormProps> = ({ afterSubmit, form }) => {
  const onFinish = (values: IUserRequest) => {
    console.log("Received values of form: ", values);
    afterSubmit && afterSubmit();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      //   initialValues={}
    >
      <Typography.Title level={2}>Редактировать пользователя</Typography.Title>

      <Form.Item name="lastName" label="Фамилия" rules={[required]}>
        <Input />
      </Form.Item>

      <Form.Item name="firstName" label="Имя" rules={[required]}>
        <Input />
      </Form.Item>

      <Form.Item name="middleName" label="Отчество" rules={[required]}>
        <Input />
      </Form.Item>

      <Form.Item name="discordId" label="Discord Id" rules={[required]}>
        <InputNumber min={1} className="w-full" />
      </Form.Item>

      <Form.Item name="gitlabId" label="Gitlab Id" rules={[required]}>
        <InputNumber min={1} className="w-full" />
      </Form.Item>

      <Divider />

      <Button type="primary" htmlType="submit" className="w-full">
        Редактировать пользователя
      </Button>
    </Form>
  );
};

export default EditUserForm;

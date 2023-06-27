import { Button, Divider, Form, Input, InputNumber, Typography } from "antd";
import { FC } from "react";

const AddUserForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Typography.Title level={2}>Добавить пользователя</Typography.Title>

      <Form.Item
        name="lastName"
        label="Фамилия"
        rules={[
          {
            required: true,
            message: "Поле обязательно для заполнения!",
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="firstName"
        label="Имя"
        rules={[
          {
            required: true,
            message: "Поле обязательно для заполнения!",
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="middleName"
        label="Отчество"
        rules={[
          {
            required: true,
            message: "Поле обязательно для заполнения!",
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="discordId"
        label="Discord Id"
        rules={[{ required: true, message: "Поле обязательно для заполнения!" }]}>
        <InputNumber min={1} className="w-full" />
      </Form.Item>

      <Form.Item
        name="gitlabId"
        label="Gitlab Id"
        rules={[{ required: true, message: "Поле обязательно для заполнения!" }]}>
        <InputNumber min={1} className="w-full" />
      </Form.Item>

      <Divider />

      <Button type="primary" htmlType="submit" className="w-full">
        Добавить пользователя
      </Button>
    </Form>
  );
};

export default AddUserForm;

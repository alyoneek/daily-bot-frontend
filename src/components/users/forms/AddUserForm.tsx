import { required } from "@/helpers/validation";
import { usersApi } from "@/services/usersApi";
import { IUserRequest } from "@/types/users";
import { Button, Divider, Form, Input, InputNumber, Typography, message } from "antd";
import { FC } from "react";

const AddUserForm: FC = () => {
  const [form] = Form.useForm();
  const [createUser, { isLoading }] = usersApi.useCreateUserMutation();

  const onFinish = async (values: IUserRequest) => {
    await createUser(values)
      .unwrap()
      .then(() => {
        message.success("Пользователь создан");
        form.resetFields();
      });
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Typography.Title level={2}>Добавить пользователя</Typography.Title>

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

      <Button type="primary" htmlType="submit" className="w-full" loading={isLoading}>
        Добавить пользователя
      </Button>
    </Form>
  );
};

export default AddUserForm;

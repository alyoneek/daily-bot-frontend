import { Button, Divider, Form, Input, InputNumber, Typography, message } from "antd";
import { FC } from "react";

import { required } from "@/helpers/validation";
import { usersApi } from "@/services/usersApi";
import { Id } from "@/types/common";
import { FormProps } from "@/types/form";
import { IUserRequest } from "@/types/users";

const EditUserForm: FC<FormProps & { id: Id }> = ({ afterSubmit, form, defaultValues, id }) => {
  const [updateUser, { isLoading }] = usersApi.useUpdateUserMutation();

  const onFinish = async (values: IUserRequest) => {
    await updateUser({ id, body: values })
      .unwrap()
      .then(() => {
        message.success("Пользователь отредактирован");
        afterSubmit && afterSubmit();
      });
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish} initialValues={defaultValues}>
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

      <Button type="primary" htmlType="submit" className="w-full" loading={isLoading}>
        Редактировать пользователя
      </Button>
    </Form>
  );
};

export default EditUserForm;

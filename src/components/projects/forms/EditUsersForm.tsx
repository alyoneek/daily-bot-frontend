import { FormProps } from "@/types/form";
import { IUsersToProjectRequest } from "@/types/projects";
import { Button, Divider, Form, Typography } from "antd";
import { FC } from "react";
import UsersTransfer from "../users/UsersTransfer";

const EditUsersForm: FC<FormProps> = ({ defaultValues, form, onFinish, afterSubmit }) => {
  const handleFinish = (values: IUsersToProjectRequest) => {
    onFinish && onFinish(values);
    afterSubmit && afterSubmit();
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleFinish}>
      <Typography.Title level={3}>Список пользователей</Typography.Title>

      <Form.Item name="users">
        <UsersTransfer
          defaultValues={defaultValues}
          onChangeUsers={(values) => form?.setFieldValue("users", values)}
        />
      </Form.Item>

      <Divider />

      <Button type="primary" htmlType="submit" className="w-full">
        Редактировать список
      </Button>
    </Form>
  );
};

export default EditUsersForm;

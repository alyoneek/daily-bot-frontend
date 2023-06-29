import { required } from "@/helpers/validation";
import { FormProps } from "@/types/form";
import { IRepositoryRequest } from "@/types/repositories";
import { Button, Divider, Form, Input, Typography } from "antd";
import { FC } from "react";

const AddRepositoryForm: FC<FormProps> = ({ afterSubmit, onFinish, form }) => {
  const handleFinish = (values: IRepositoryRequest) => {
    onFinish && onFinish(values);
    afterSubmit && afterSubmit();
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleFinish}>
      <Typography.Title level={2}>Добавить репозиторий</Typography.Title>

      <Form.Item name="name" label="Название репозитория" rules={[required]}>
        <Input />
      </Form.Item>

      <Form.Item name="gitlabUrl" label="Gitlab url" rules={[required]}>
        <Input />
      </Form.Item>

      <Divider />

      <Button type="primary" htmlType="submit" className="w-full">
        Добавить репозиторий
      </Button>
    </Form>
  );
};

export default AddRepositoryForm;

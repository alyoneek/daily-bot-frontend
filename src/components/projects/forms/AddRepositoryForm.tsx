import { FormProps } from "@/types/form";
import { Button, Divider, Form, Input, Typography } from "antd";
import { FC } from "react";

const AddRepositoryForm: FC<FormProps> = ({ afterSubmit, onFinish, form }) => {
  console.log(afterSubmit, form, onFinish);
  const handleFinish = (values: any) => {
    onFinish && onFinish(values);
    afterSubmit && afterSubmit();
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleFinish}>
      <Typography.Title level={3}>Добавить репозиторий</Typography.Title>

      <Form.Item
        name="name"
        label="Название репозитория"
        rules={[
          {
            required: true,
            message: "Поле обязательно для заполнения!",
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="gitlabUrl"
        label="Gitlab url"
        rules={[
          {
            required: true,
            message: "Поле обязательно для заполнения!",
          },
        ]}>
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

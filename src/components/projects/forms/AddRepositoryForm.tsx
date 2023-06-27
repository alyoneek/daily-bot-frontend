import { Button, Divider, Form, Input, Typography } from "antd";
import { FC } from "react";

interface AddRepositoryFormProps {
  onFinish: ((values: any) => void) | undefined;
}

const AddRepositoryForm: FC<AddRepositoryFormProps> = ({ onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
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

import { FormProps } from "@/types/form";
import { Button, Divider, Form, Input, Typography } from "antd";
import { FC, useEffect } from "react";
import AddSurveyForm from "./AddSurveyForm";

const EditGroupForm: FC<FormProps> = ({ defaultValues, form, onFinish, afterSubmit }) => {
  const handleFinish = (values: any) => {
    onFinish && onFinish(values);
    afterSubmit && afterSubmit();
  };

  useEffect(() => form?.resetFields(), [form, defaultValues]);

  return (
    <Form layout="vertical" form={form} onFinish={handleFinish} initialValues={defaultValues}>
      <Typography.Title level={3}>Редактировать группу</Typography.Title>

      <Form.Item
        name="name"
        label="Название группы"
        rules={[
          {
            required: true,
            message: "Поле обязательно для заполнения!",
          },
        ]}>
        <Input />
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

import { email, required } from "@/helpers/validation";
import { ISignInRequest } from "@/types/auth";
import { Button, Checkbox, Divider, Form, Input, Typography } from "antd";
import { FC } from "react";

const SignInForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: ISignInRequest) => {
    console.log("Received values of form: ", values);
    form.resetFields();
  };
  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Typography.Title level={2}>Войти</Typography.Title>

      <Divider />

      <Form.Item label="Электронная почта" name="email" rules={[required, email]}>
        <Input />
      </Form.Item>

      <Form.Item label="Пароль" name="password" rules={[required]}>
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember">
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Divider />

      <Button type="primary" htmlType="submit" className="w-full">
        Войти
      </Button>
    </Form>
  );
};

export default SignInForm;

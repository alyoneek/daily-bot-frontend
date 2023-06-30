import { email, required } from "@/helpers/validation";
import useAuth from "@/hooks/useAuth";
import { authApi } from "@/services/authApi";
import { ISignInRequest } from "@/types/auth";
import { Button, Checkbox, Divider, Form, Input, Typography, message } from "antd";
import { FC } from "react";

const SignInForm: FC = () => {
  const [form] = Form.useForm();
  const [signIn, { isLoading }] = authApi.useSignInMutation();
  const { login } = useAuth();

  const onFinish = async (values: ISignInRequest) => {
    await signIn(values)
      .unwrap()
      .then((response) => {
        login(response.token);
        message.success("Авторизация успешна");
      })
      .catch(() => message.error("Неверный логин или пароль"));
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

      <Button type="primary" htmlType="submit" className="w-full" loading={isLoading}>
        Войти
      </Button>
    </Form>
  );
};

export default SignInForm;

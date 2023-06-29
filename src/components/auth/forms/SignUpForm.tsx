import { email, max, min, required } from "@/helpers/validation";
import { ISignUpRequest } from "@/types/auth";
import { Button, Divider, Form, Input, Typography } from "antd";
import { Rule } from "antd/es/form";
import { FC } from "react";

const SignUpForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: ISignUpRequest) => {
    console.log("Received values of form: ", values);
    form.resetFields();
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Typography.Title level={2}>Зарегистрироваться</Typography.Title>

      <Divider />

      <Form.Item label="Электронная почта" name="email" rules={[required, email]}>
        <Input />
      </Form.Item>

      <Form.Item label="Пароль" name="password" rules={[required, min(6), max(32)]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Подтвердите пароль"
        name="confirmPassword"
        rules={[
          required,
          min(6),
          max(32),
          ({ getFieldValue }) => ({
            validator(_: Rule, value: string) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Пароли не совпадают");
            },
          }),
        ]}>
        <Input.Password />
      </Form.Item>

      <Divider />

      <Button type="primary" htmlType="submit" className="w-full">
        Зарегистрироваться
      </Button>
    </Form>
  );
};

export default SignUpForm;

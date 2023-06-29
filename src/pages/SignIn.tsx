import SignInForm from "@/components/auth/forms/SignInForm";
import { Button, Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const SignIn: FC = () => {
  return (
    <Card className="h-full">
      <SignInForm />
      <Link to="/signup">
        <Button className="w-full mt-3">Зарегистрироваться</Button>
      </Link>
    </Card>
  );
};

export default SignIn;

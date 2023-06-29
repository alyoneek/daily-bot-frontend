import SignUpForm from "@/components/auth/forms/SignUpForm";
import { Button, Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const SignUp: FC = () => {
  return (
    <Card className="h-full">
      <SignUpForm />
      <Link to="/signin">
        <Button className="w-full mt-3">Войти</Button>
      </Link>
    </Card>
  );
};

export default SignUp;

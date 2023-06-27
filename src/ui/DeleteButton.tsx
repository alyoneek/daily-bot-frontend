import { DeleteOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import { FC } from "react";

const DeleteButton: FC<ButtonProps> = (props) => {
  return <Button icon={<DeleteOutlined />} danger {...props} />;
};

export default DeleteButton;

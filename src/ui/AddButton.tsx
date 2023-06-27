import { PlusOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import { FC } from "react";

const AddButton: FC<ButtonProps> = (props) => {
  return <Button icon={<PlusOutlined />} {...props} />;
};

export default AddButton;

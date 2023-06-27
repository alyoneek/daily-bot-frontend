import { EditOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import { FC } from "react";

const EditButton: FC<ButtonProps> = (props) => {
  return <Button icon={<EditOutlined />} {...props} />;
};

export default EditButton;

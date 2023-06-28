import useResetFormOnCloseModal from "@/hooks/useResetFormOnCloseModal ";
import { Form, Modal } from "antd";
import { FC, ReactElement, cloneElement } from "react";

interface ModalFormProps {
  open: boolean;
  onCancel: () => void;
  children?: ReactElement;
}

const ModalForm: FC<ModalFormProps> = ({ open, onCancel, children }) => {
  const [form] = Form.useForm();

  useResetFormOnCloseModal({
    form,
    open,
  });

  const renderChildren = () => {
    if (children) {
      return cloneElement(children, {
        ...children.props,
        form: form,
        afterSubmit: onCancel,
      });
    }
    return null;
  };

  return (
    <Modal width={1000} centered open={open} onCancel={onCancel} footer={[]}>
      {renderChildren()}
    </Modal>
  );
};

export default ModalForm;

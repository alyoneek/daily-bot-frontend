import { FormInstance } from "antd";

export interface FormProps {
  afterSubmit?: () => void;
  form?: FormInstance<any>;
  onFinish?: (values: any) => void;
  defaultValues?: any;
}

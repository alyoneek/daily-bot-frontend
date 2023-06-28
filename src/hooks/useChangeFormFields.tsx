import { FormInstance } from "antd";

const useChangeFormFields = (form: FormInstance<any>) => {
  // TODO: generic types

  const addValueToArray = (value: any, name: string) => {
    const newValues = form.getFieldValue(name) ? [...form.getFieldValue(name), value] : [value];
    form.setFieldValue(name, newValues);
  };

  const deleteValueFromArray = (id: number | string, name: string) => {
    const newValues = form.getFieldValue(name).filter((_, index) => index !== id);
    form.setFieldValue(name, newValues);
  };

  const editValueInArray = (id: number | string, value: any, name: string) => {
    const newValues = form.getFieldValue(name).map((item, index) => {
      if (index === id) return value;
      return item;
    });
    form.setFieldValue(name, newValues);
  };
  return { addValueToArray, deleteValueFromArray, editValueInArray };
};

export default useChangeFormFields;

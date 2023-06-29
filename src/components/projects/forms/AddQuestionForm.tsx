import { CloseCircleOutlined } from "@ant-design/icons";
import { Form, Input, Typography } from "antd";
import { FC } from "react";

import { questionDefaultValues } from "@/data/groups";
import { required } from "@/helpers/validation";
import AddButton from "@/ui/AddButton";

interface AddQuestionFormProps {
  name: number;
}

const AddQuestionForm: FC<AddQuestionFormProps> = ({ name }) => {
  return (
    <Form.List name={[name, "questions"]}>
      {(questions, { add, remove }) => (
        <>
          <div className="flex gap-3">
            <Typography.Title level={4}>Вопросы:</Typography.Title>
            <AddButton type="primary" size="small" onClick={() => add(questionDefaultValues)} />
          </div>

          {questions.map((question) => (
            <div key={question.key} className="flex gap-5">
              <Form.Item
                name={[name, question.name]}
                label="Вопрос"
                rules={[required]}
                className="flex-1">
                <Input placeholder="Вопрос" />
              </Form.Item>

              {question.name !== 0 && (
                <CloseCircleOutlined
                  style={{ color: "red" }}
                  onClick={() => remove(question.name)}
                />
              )}
            </div>
          ))}
        </>
      )}
    </Form.List>
  );
};

export default AddQuestionForm;

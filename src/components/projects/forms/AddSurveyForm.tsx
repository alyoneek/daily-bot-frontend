import { Col, Divider, Form, Input, InputNumber, Radio, Row, TimePicker, Typography } from "antd";
import { FC } from "react";

import AddQuestionForm from "@/components/projects/forms/AddQuestionForm";
import { surveyDefaultValues } from "@/data/groups";
import { week } from "@/data/week";
import { required } from "@/helpers/validation";
import AddButton from "@/ui/AddButton";
import DeleteButton from "@/ui/DeleteButton";

const AddSurveyForm: FC = () => {
  return (
    <Form.List name="surveys">
      {(surveys, { add, remove }) => (
        <>
          <div className="flex gap-3">
            <Typography.Title level={3}>Опросники:</Typography.Title>
            <AddButton
              type="primary"
              onClick={() => surveys.length < 4 && add(surveyDefaultValues)}
            />
          </div>

          {surveys.map((survey) => (
            <div
              key={survey.key}
              className="border border-blue-400 border-dashed p-3 mb-4 rounded-lg">
              <div className="flex justify-between gap-3">
                <div className="flex-1 flex gap-3">
                  <Form.Item
                    name={[survey.name, "title"]}
                    label="Заголовок"
                    rules={[required]}
                    className="flex-1">
                    <Input placeholder="Заголовок" />
                  </Form.Item>

                  <Form.Item name={[survey.name, "chanelId"]} label="ID канала" rules={[required]}>
                    <InputNumber min={1} />
                  </Form.Item>
                </div>

                {survey.name !== 0 && (
                  <DeleteButton type="dashed" onClick={() => remove(survey.name)} />
                )}
              </div>

              <Form.Item label="Тип расписания" name={[survey.name, "type"]} rules={[required]}>
                <Radio.Group buttonStyle="solid" size="small">
                  <Radio.Button value="day"> Ежедневно </Radio.Button>
                  <Radio.Button value="week"> Еженедельно </Radio.Button>
                </Radio.Group>
              </Form.Item>

              <Divider />

              <Form.Item dependencies={[["surveys", survey.name, "type"]]} className="m-0">
                {({ getFieldValue, setFieldValue }) => {
                  const type = getFieldValue(["surveys", survey.name, "type"]);

                  // TODO remove setFieldValue
                  if (type === "day") {
                    setFieldValue(["surveys", survey.name, "interval"], null);
                    setFieldValue(["surveys", survey.name, "daysTime"], null);

                    return (
                      <>
                        <Form.Item
                          name={[survey.name, "time"]}
                          label="Время (HH:MM)"
                          rules={[required]}>
                          <TimePicker format="HH:mm" />
                        </Form.Item>
                        <Divider />
                      </>
                    );
                  } else {
                    setFieldValue(["surveys", survey.name, "time"], null);

                    return (
                      <>
                        <Form.Item
                          name={[survey.name, "interval"]}
                          label="Недельный интервал"
                          rules={[required]}>
                          <InputNumber min={0} />
                        </Form.Item>

                        <Divider />

                        <Typography.Title level={4}>Дни недели:</Typography.Title>
                        <Form.Item name={[survey.name, "daysTime"]}>
                          <Row gutter={[16, 16]}>
                            {week.map((day, index) => (
                              <Col span={6} key={index}>
                                <Form.Item
                                  name={[survey.name, "daysTime", day.name]}
                                  label={day.label}
                                  className="m-0">
                                  <TimePicker format="HH:mm" className="w-full" />
                                </Form.Item>
                              </Col>
                            ))}
                          </Row>
                        </Form.Item>
                        <Divider />
                      </>
                    );
                  }
                }}
              </Form.Item>
              <AddQuestionForm name={survey.name} />
            </div>
          ))}
        </>
      )}
    </Form.List>
  );
};

export default AddSurveyForm;

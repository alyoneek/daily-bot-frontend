import { Card, Divider, Typography } from "antd";
import { FC } from "react";

const DescriptionCard: FC = () => {
  return (
    <Card className="h-full">
      <Typography.Title>DailyBot</Typography.Title>
      <Divider />
      <Typography.Text>Описание</Typography.Text>
    </Card>
  );
};

export default DescriptionCard;

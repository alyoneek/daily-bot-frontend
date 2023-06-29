import { Card, Divider, Typography } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const NewsCard: FC = () => {
  return (
    <Card>
      <Typography.Title level={2}>Новости:</Typography.Title>
      <Divider />
      <div className="flex flex-col">
        <Link to="/">{`Обновление интерфейса (v.1.1.0)`}</Link>
        <Link to="/">{`Релиз (v.1.0.0)`}</Link>
      </div>
    </Card>
  );
};

export default NewsCard;

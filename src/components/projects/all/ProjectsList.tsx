import { Empty, List } from "antd";
import { FC } from "react";

const data = [
  {
    id: "1",
    name: "Стажеры УЦР+Креософт",
  },
  {
    id: "2",
    name: "Еще проект",
  },
  {
    id: "3",
    name: "Новый",
  },
];

const ProjectsList: FC = () => {
  return (
    <List
      locale={{ emptyText: <Empty description="Пусто" /> }}
      size="large"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          className="cursor-pointer hover:bg-slate-50 transition-colors"
          //   onClick={() => dispatch(usersActions.setChoosenUserId(item.id))}
        >
          {item.name}
        </List.Item>
      )}
    />
  );
};

export default ProjectsList;

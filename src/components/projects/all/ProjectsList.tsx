import ScrollableList from "@/components/ScrollableList";
import { List } from "antd";
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
  {
    id: "4",
    name: "Новый",
  },
  {
    id: "5",
    name: "Новый",
  },
  {
    id: "6",
    name: "Новый",
  },
];

const ProjectsList: FC = () => {
  return (
    <ScrollableList
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

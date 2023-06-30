import ScrollableList from "@/components/ScrollableList";
import { useAppDispatch } from "@/store";
import { projectsActions } from "@/store/projects/projectsSlice";
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
  const dispatch = useAppDispatch();
  return (
    <ScrollableList
      size="large"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          className="cursor-pointer hover:bg-[#e6e6e62b] rounded-lg transition-colors"
          onClick={() => dispatch(projectsActions.setChoosenProjectId(item.id))}>
          {item.name}
        </List.Item>
      )}
    />
  );
};

export default ProjectsList;

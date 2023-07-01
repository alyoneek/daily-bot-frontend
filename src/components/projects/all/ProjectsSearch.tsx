import { useAppDispatch } from "@/store";
import { projectsActions } from "@/store/projects/projectsSlice";
import { Input } from "antd";
import { FC } from "react";

const ProjectsSearch: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Input.Search
      placeholder="Поиск"
      onChange={(e) => dispatch(projectsActions.setSearch(e.target.value))}
    />
  );
};

export default ProjectsSearch;

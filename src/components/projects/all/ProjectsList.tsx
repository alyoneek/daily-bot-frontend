import { List, Spin } from "antd";
import { FC } from "react";

import ScrollableList from "@/components/ScrollableList";
import { projectsApi } from "@/services/projectsApi";
import { useAppDispatch, useAppSelector } from "@/store";
import { selectProjectsSearch } from "@/store/projects/projectsSelectors";
import { projectsActions } from "@/store/projects/projectsSlice";

const ProjectsList: FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectProjectsSearch);
  const { data, isLoading } = projectsApi.useGetProjectsQuery(search);

  if (isLoading) return <Spin />;

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

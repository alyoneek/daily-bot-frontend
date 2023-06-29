import { List } from "antd";
import { FC } from "react";

import ScrollableList from "@/components/ScrollableList";
import { WithOrWithouIdType } from "@/types/common";
import { IRepository } from "@/types/repositories";
import DeleteButton from "@/ui/DeleteButton";

interface RepositoriesListProps {
  values: WithOrWithouIdType<IRepository>[];
  onDeleteRepository: (id: string | number) => void;
}

const RepositoriesList: FC<RepositoriesListProps> = ({ values, onDeleteRepository }) => {
  return (
    <ScrollableList
      bordered
      dataSource={values}
      renderItem={(item, index) => (
        <List.Item className="flex justify-between items-center gap-3">
          <>
            <div className="flex flex-col gap-4">
              <span>{item.name}</span>
              <span>URL: {item.gitlabUrl}</span>
            </div>
            <DeleteButton onClick={() => onDeleteRepository(item.id ?? index)} />
          </>
        </List.Item>
      )}
    />
  );
};

export default RepositoriesList;

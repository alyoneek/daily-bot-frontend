import { WithOrWithouIdType } from "@/types/common";
import { IRepository } from "@/types/repositories";
import DeleteButton from "@/ui/DeleteButton";
import { List } from "antd";
import { FC } from "react";

interface RepositoryListItemProps {
  value: WithOrWithouIdType<IRepository>;
  onDeleteRepository: () => void;
}

const RepositoryListItem: FC<RepositoryListItemProps> = ({ value, onDeleteRepository }) => {
  return (
    <List.Item className="flex justify-between items-center gap-3">
      <>
        <div className="flex flex-col gap-4">
          <span>{value.name}</span>
          <span>
            URL: <a href={value.gitlabUrl}>{value.gitlabUrl}</a>
          </span>
        </div>
        <DeleteButton onClick={onDeleteRepository} />
      </>
    </List.Item>
  );
};

export default RepositoryListItem;

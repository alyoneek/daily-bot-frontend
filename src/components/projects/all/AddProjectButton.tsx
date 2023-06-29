import { useAppDispatch } from "@/store";
import { projectsActions } from "@/store/projects/projectsSlice";
import { Button } from "antd";
import { FC } from "react";

const AddProjectButton: FC = () => {
  const dispatch = useAppDispatch();

  return <Button onClick={() => dispatch(projectsActions.setCreateMode())}>Создать</Button>;
};

export default AddProjectButton;

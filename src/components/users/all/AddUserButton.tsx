import { Button } from "antd";
import { FC } from "react";

import { useAppDispatch } from "@/store";
import { usersActions } from "@/store/users/usersSlice";

const AddUserButton: FC = () => {
  const dispatch = useAppDispatch();

  return <Button onClick={() => dispatch(usersActions.setCreateMode())}>Добавить</Button>;
};

export default AddUserButton;

import { useAppDispatch } from "@/store";
import { usersActions } from "@/store/users/usersSlice";
import { Input } from "antd";
import { FC } from "react";

const UsersSearch: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Input.Search
      placeholder="Поиск"
      onChange={(e) => dispatch(usersActions.setSearch(e.target.value))}
    />
  );
};

export default UsersSearch;

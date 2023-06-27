import { Card } from "antd";
import { FC } from "react";

import AddUserForm from "@/components/users/forms/AddUserForm";
import { useAppSelector } from "@/store";
import { selectIsUserCreating } from "@/store/users/usersSelectors";

const CreateUserCard: FC = () => {
  const isUserCreating = useAppSelector(selectIsUserCreating);

  if (!isUserCreating) return null;

  return (
    <Card>
      <AddUserForm />
    </Card>
  );
};

export default CreateUserCard;

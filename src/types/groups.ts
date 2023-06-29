import { Id } from "./common";
import { ISurveyRequest } from "./surveys";
import { IShortUser } from "./users";

export interface IGroupRequest {
  name: string;
  users: Id[];
  surveys: ISurveyRequest[];
}

export interface IGroup extends Omit<IGroupRequest, "users"> {
  id: Id;
  users: IShortUser[];
}

export type IShortGroup = Pick<IGroup, "id" | "name">;

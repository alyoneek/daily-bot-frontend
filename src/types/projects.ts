import { Id } from "./common";
import { IGroupRequest, IShortGroup } from "./groups";
import { IRepository, IRepositoryRequest } from "./repositories";
import { IShortUser } from "./users";

export interface IProjectRequest {
  name: string;
  groups: IGroupRequest[];
  users: Id[];
  repositories: IRepositoryRequest[];
}

export interface IProject {
  id: Id;
  name: string;
  groups: IShortGroup[];
  users: IShortUser[];
  repositories: IRepository[];
}

export type IShortProject = Pick<IProject, "id" | "name">;

export interface IUsersToProjectRequest {
  users: Id[];
}

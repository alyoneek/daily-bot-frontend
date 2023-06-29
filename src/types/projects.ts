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
  groups: IShortGroup[];
  users: IShortUser[];
  repositories: IRepository[];
}

import { Id } from "./common";

export interface IRepositoryRequest {
  name: string;
  gitlabUrl: string;
}

export interface IRepository extends IRepositoryRequest {
  id: Id;
}

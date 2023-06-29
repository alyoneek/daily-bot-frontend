import { Id } from "./common";

export interface IRepositoryRequest {
  name: string;
  gitlabUrl: number;
}

export interface IRepository extends IRepositoryRequest {
  id: Id;
}

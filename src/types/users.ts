import { Id } from "./common";

export interface IUserRequest {
  lastName: string;
  firstName: string;
  middleName: string;
  discordId: number;
  gitlabId: number;
}

export interface IUser extends IUserRequest {
  id: Id;
}

export type IShortUser = Pick<IUser, "id" | "lastName" | "firstName" | "middleName">;

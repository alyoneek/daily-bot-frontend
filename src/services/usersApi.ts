import { Id } from "@/types/common";
import { IShortUser, IUser, IUserRequest } from "@/types/users";
import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IShortUser[], string | undefined>({
      query: (searchTerm) => `student?search=${searchTerm}`,
      providesTags: (result, error, arg) =>
        result ? [...result.map(({ id }) => ({ type: "Users" as const, id })), "Users"] : ["Users"],
    }),
    getUserById: builder.query<IUser, Id>({
      query: (id) => `student/${id}`,
      providesTags: (result, error, arg) => [{ type: "User", id: arg }],
    }),
    createUser: builder.mutation<IUser, IUserRequest>({
      query: (body) => ({
        url: `student`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Users" }],
    }),
    updateUser: builder.mutation<IUser, { id: Id; body: IUserRequest }>({
      query: (request) => ({
        url: `student/${request.id}`,
        method: "PUT",
        body: request.body,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Users", id: arg.id },
        { type: "User", id: arg.id },
      ],
    }),
    deleteUser: builder.mutation<void, Id>({
      query: (id) => ({
        url: `student/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Users" }],
    }),
  }),
  overrideExisting: false,
});

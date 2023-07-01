import { Id } from "@/types/common";
import { IProject, IProjectRequest, IShortProject } from "@/types/projects";
import { api } from "./api";

export const projectsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<IShortProject[], string | undefined>({
      query: (searchTerm) => `project?search=${searchTerm}`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Projects" as const, id })), "Projects"]
          : ["Projects"],
    }),
    getProjectById: builder.query<IProject, Id>({
      query: (id) => `project/${id}`,
      providesTags: (result, error, arg) => [{ type: "Project", id: arg }],
    }),
    createProject: builder.mutation<void, IProjectRequest>({
      query: (body) => ({
        url: `project`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Projects" }],
    }),
    // updateUser: builder.mutation<IUser, { id: Id; body: IUserRequest }>({
    //   query: (request) => ({
    //     url: `student/${request.id}`,
    //     method: "PUT",
    //     body: request.body,
    //   }),
    //   invalidatesTags: (result, error, arg) => [
    //     { type: "Users", id: arg.id },
    //     { type: "User", id: arg.id },
    //   ],
    // }),
    deleteProject: builder.mutation<void, Id>({
      query: (id) => ({
        url: `project/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Projects" }],
    }),
  }),
  overrideExisting: false,
});

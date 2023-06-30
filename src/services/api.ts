import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { redirect } from "react-router-dom";

const skipAuth = ["login", "register"];

const baseQuery = fetchBaseQuery({
  baseUrl: "https://daily-bot-backend-production.up.railway.app/",
  prepareHeaders: (headers, api) => {
    headers.set("accept", "application/json");

    const token = localStorage.getItem("token");

    if (token && !skipAuth.includes(api.endpoint)) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithResetToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    localStorage.removeItem("token");
    redirect("/signin");
  }
  return result;
};

export const api = createApi({
  reducerPath: "api",
  tagTypes: [],
  baseQuery: baseQueryWithResetToken,
  endpoints: (builder) => ({}),
});

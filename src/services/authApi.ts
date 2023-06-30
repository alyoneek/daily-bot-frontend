import { ISignInRequest, ISignUpRequest, ITokenResponse } from "@/types/auth";
import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<ITokenResponse, ISignInRequest>({
      query: (body) => ({
        url: `auth/login`,
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation<ITokenResponse, ISignUpRequest>({
      query: (body) => ({
        url: `auth/register`,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

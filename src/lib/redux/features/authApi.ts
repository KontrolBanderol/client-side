import { getRefreshToken } from "@/lib/cookie";
import { apiSlice } from "../api/apiSlice";
import { loginReq, loginRes } from "./interfaces/IAuth";
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<loginRes, loginReq>({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `auth/logout`,
        method: "DELETE",
        headers: {
          "x-refresh-token": getRefreshToken(),
        },
      }),
    }),
    registration: builder.mutation({
      query: (data) => ({
        url: `auth/registration`,
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `auth/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegistrationMutation,
  useForgotPasswordMutation,
} = authApi;

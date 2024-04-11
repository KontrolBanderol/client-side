import { getAccessToken, getRefreshToken, setToken } from "@/lib/cookie";
import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
interface RefreshResultData {
  ok: boolean;
  message: string;
  result: string;
}
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: "https://lr4wkl74-5001.euw.devtunnels.ms/",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = getAccessToken();
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = getRefreshToken();
        const refreshResult = await baseQuery(
          { url: "auth/refreshToken", method: "POST", body: { refreshToken } },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          const data: RefreshResultData =
            refreshResult.data as RefreshResultData;
          setToken(data.result, "");
          result = await baseQuery(args, api, extraOptions);
        } else {
          console.error("ERROR REFRESH TOKEN");
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

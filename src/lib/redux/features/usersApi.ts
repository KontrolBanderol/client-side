import { apiSlice } from '../api/apiSlice';
import UserData from './interfaces/IUsers';

export const authApi = apiSlice.injectEndpoints({
  // GET
  endpoints: (builder) => ({
    user: builder.query<UserData, string>({
      query: (data) => ({
        url: `users/profile/${data}`,
        method: 'GET',
      }),
    }),
    // PATCH
    notifications: builder.mutation({
      query: (data) => ({
        url: `users/update-notification`,
        method: 'PATCH',
        body: data,
      }),
    }),
    banner: builder.mutation({
      query: (data) => ({
        url: `users/${data.username}/cover`,
        method: 'PATCH',
        body: data.newCover,
      }),
    }),
    avatar: builder.mutation({
      query: (data) => ({
        url: `users/${data.username}/avatar`,
        method: 'PATCH',
        body: data.newAvatar,
      }),
    }),
    username: builder.mutation({
      query: (data) => ({
        url: `users/update-username`,
        method: 'PATCH',
        body: data,
      }),
    }),
    bio: builder.mutation({
      query: (data) => ({
        url: `users/update-description`,
        method: 'PATCH',
        body: data,
      }),
    }),
    social: builder.mutation({
      query: (data) => ({
        url: `users/update-social`,
        method: 'PATCH',
        body: data,
      }),
    }),
    likes: builder.mutation({
      query: (data) => ({
        url: `users/${data}/switch-like`,
        method: 'POST',
      }),
    }),
    view: builder.mutation({
      query: (data) => ({
        url: `users/add-view`,
        body: { contentId: data },
        method: 'POST',
      }),
    }),
    email: builder.mutation({
      query: (data) => ({
        url: `users/update-email`,
        method: 'PATCH',
        body: data,
      }),
    }),
    password: builder.mutation({
      query: (data) => ({
        url: `users/update-password`,
        method: 'PATCH',
        body: data,
      }),
    }),
    // DELETE
    delete: builder.mutation({
      query: () => ({
        url: `users`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useUserQuery,
  useBannerMutation,
  useAvatarMutation,
  useUsernameMutation,
  useBioMutation,
  useSocialMutation,
  useViewMutation,
  useLikesMutation,
  useEmailMutation,
  usePasswordMutation,
  useDeleteMutation,
  useNotificationsMutation,
} = authApi;

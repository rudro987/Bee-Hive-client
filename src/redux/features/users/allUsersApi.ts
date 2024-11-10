import { baseApi } from "../../api/baseApi";

const allUsersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getallUsers: builder.query({
      query: () => ({
        url: "/all-users",
        method: "GET",
      }),
      providesTags: ["allUsers"],
    }),
    updateUserRole: builder.mutation({
      query: ({ updateRoleData, id }) => ({
        url: `/all-users/${id}`,
        method: "PUT",
        body: updateRoleData,
      }),
      invalidatesTags: ["allUsers"],
    }),
  }),
});

export const { useGetallUsersQuery, useUpdateUserRoleMutation } = allUsersApi;

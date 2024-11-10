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
  }),
});

export const { useGetallUsersQuery } = allUsersApi;

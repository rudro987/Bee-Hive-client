import { baseApi } from "../../api/baseApi";

const userBookingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserBookings: builder.query({
            query: () => ({
                url: '/my-bookings',
                method: 'GET',
            }),
            providesTags: ['userBookings'],
        }),
    }),
});

export const { useGetUserBookingsQuery } = userBookingsApi;
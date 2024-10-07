import { baseApi } from "../../api/baseApi";

const bookingsManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: () => ({
                url: '/bookings',
                method: 'GET',
            }),
            providesTags: ['bookings'],
        }),
        updateBooking: builder.mutation({
            query: ({ bookingsUpdatedData, id }) => ({
                url: `/bookings/${id}`,
                method: 'PUT',
                body: bookingsUpdatedData,
            }),
            invalidatesTags: ['bookings', 'userBookings'],
        }),
        deleteBooking: builder.mutation({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['bookings', 'userBookings'],
        }),
    }),
});

export const { useGetAllBookingsQuery, useUpdateBookingMutation, useDeleteBookingMutation } = bookingsManagementApi;
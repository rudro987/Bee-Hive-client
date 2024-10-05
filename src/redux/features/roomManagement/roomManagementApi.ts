import { baseApi } from "../../api/baseApi";

const roomManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRooms: builder.query({
            query: () => ({
                url: '/rooms',
                method: 'GET',
            }),
            providesTags: ['rooms'],
        }),
        createRoom: builder.mutation({
            query: (data) => ({
                url: '/rooms',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['rooms'],
        }),
        updateRoom: builder.mutation({
            query: ({ productUpdatedData, id }) => ({
                url: `/rooms/${id}`,
                method: 'PATCH',
                body: productUpdatedData,
            }),
            invalidatesTags: ['rooms'],
        }),
        deleteRoom: builder.mutation({
            query: (id) => ({
                url: `/rooms/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['rooms'],
        }),
    }),
});

export const { useGetRoomsQuery, useCreateRoomMutation, useDeleteRoomMutation, useUpdateRoomMutation } = roomManagementApi;
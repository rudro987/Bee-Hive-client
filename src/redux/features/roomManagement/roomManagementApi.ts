import { baseApi } from "../../api/baseApi";
import qs from 'qs';

const roomManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRooms: builder.query({
            query: (query) => ({
                url: `/rooms?${qs.stringify(query, { skipNulls: true })}`,
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
            query: ({ roomUpdatedData, id }) => ({
                url: `/rooms/${id}`,
                method: 'PATCH',
                body: roomUpdatedData,
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
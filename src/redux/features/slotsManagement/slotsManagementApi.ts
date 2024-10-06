import { baseApi } from "../../api/baseApi";

const slotManagementAPi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSlots: builder.query({
            query: () => ({
                url: '/slots/availability',
                method: 'GET',
            }),
            providesTags: ['slots'],
        }),
        createSlot: builder.mutation({
            query: (data) => ({
                url: '/slots',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['slots'],
        }),
        updateSlot: builder.mutation({
            query: ({ slotsUpdatedData, id }) => ({
                url: `/slots/${id}`,
                method: 'PATCH',
                body: slotsUpdatedData,
            }),
            invalidatesTags: ['slots'],
        }),
        deleteSlot: builder.mutation({
            query: (id) => ({
                url: `/slots/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['slots'],
        }),
    }),
});

export const { useGetSlotsQuery, useCreateSlotMutation, useDeleteSlotMutation, useUpdateSlotMutation } = slotManagementAPi;
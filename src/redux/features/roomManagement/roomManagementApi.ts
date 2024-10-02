import { baseApi } from "../../api/baseApi";

const roomManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getRooms: builder.query({
            query: () => ({
                url: '/rooms',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetRoomsQuery } = roomManagementApi;
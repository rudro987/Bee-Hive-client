import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL2}/api`,
    credentials: 'include',
    prepareHeaders: (headers , { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithRefreshToken: BaseQueryFn = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions);

    if(result?.error?.status === 401){
        //* Send refresh token

        const res = await fetch(`${import.meta.env.VITE_API_URL2}/api/auth/refresh-token`, {
            method: 'POST',
            credentials: 'include'
        });
        
        const data = await res.json();

        if(data?.data?.accessToken){
            const user = (api.getState() as RootState).auth.user;

        api.dispatch(setUser({
            user,
            token: data.data.accessToken
        }));
        result = await baseQuery(args, api, extraOptions);
        }else{
            api.dispatch(logOut());
        }

    }
    return result;
}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ['rooms', 'slots', 'bookings'],
    endpoints: () => ({})
})
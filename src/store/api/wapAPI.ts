import { RootState } from "store/store";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const wapAPI = createApi({
    reducerPath: 'wapAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const accessToken = (getState() as RootState).user.auth.accessToken;

            if (accessToken !== "") {
                headers.set('authorization', `Bearer ${accessToken}`)
                headers.set('Content-Type', `application/json`)
            }

            return headers
        },
    }),
    
    endpoints: () => ({})
})
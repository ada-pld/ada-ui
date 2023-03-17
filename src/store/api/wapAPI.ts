import { RootState } from "store/store";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const wapAPI = createApi({
    reducerPath: 'wapAPI',
    keepUnusedDataFor: 1,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.BASE_API_URL,
        prepareHeaders: (headers, { getState }) => {
            const accessToken = (getState() as RootState).user.auth.accessToken;

            if (accessToken !== "")
                headers.set('authorization', `Bearer ${accessToken}`)

            if (!headers.has("Content-Type"))
                headers.set('Content-Type', `application/json`);
            
            if (headers.get("Content-Type") === "multipart/form-data")
                headers.delete("Content-Type");

            return headers
        },
    }),
    endpoints: () => ({})
})
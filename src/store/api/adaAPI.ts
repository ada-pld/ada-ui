import { RootState } from "store/store";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adaAPI = createApi({
    reducerPath: 'adaAPI',
    keepUnusedDataFor: 1,
    baseQuery: fetchBaseQuery({
        baseUrl: (process.env.BASE_URL || "") + "/api/",
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
    endpoints: (build) => ({
        checkError: build.query<void, void>({
            query: () => ({
                url: "health/",
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useCheckErrorQuery,
} = adaAPI;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const wapAPI = createApi({
    reducerPath: 'wapAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
    endpoints: () => ({})
})
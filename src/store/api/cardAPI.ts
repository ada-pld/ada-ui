import { wapAPI } from "./wapAPI";

const configApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        getCards: build.query<any, string>({
            query: (id) => ({
                url: `/users/${id}/cards`,
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const { useGetCardsQuery } = configApi;
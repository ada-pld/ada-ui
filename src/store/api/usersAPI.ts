import { wapAPI } from "./wapAPI";

const usersApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        listUsers: build.query<any, void>({
            query: () => ({
                url: "users/list",
                method: 'GET',
            }),
        }),
    }),
});
  
export const { useListUsersQuery } = usersApi;
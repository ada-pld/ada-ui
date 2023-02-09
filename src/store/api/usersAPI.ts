import { wapAPI } from "./wapAPI";

import { UsersList } from "./types/fetchedData";

const usersApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        listUsers: build.query<UsersList[], void>({
            query: () => ({
                url: "users/list",
                method: 'GET',
            }),
        }),
    }),
});
  
export const { useListUsersQuery } = usersApi;
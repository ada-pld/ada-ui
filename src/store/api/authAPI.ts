import { wapAPI } from "./wapAPI";

import { User, UserInfos } from "./types/fetchedData";
import { Login } from "./types/queryParams";

const authApi = wapAPI.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation<User, Login>({
            query: ({email, password}) => ({
                url: "auth/login",
                method: 'POST',
                body: {
                    email: email,
                    password: password,
                }
            }),
        }),
        userInfos: build.query<UserInfos, string>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const {
    useUserInfosQuery,
    useUserLoginMutation
} = authApi;
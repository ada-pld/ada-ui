import { adaAPI } from "./adaAPI";

import { User } from "./types/fetchedData";

import { Login } from "./types/queryParams";

const authApi = adaAPI.injectEndpoints({
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
        checkToken: build.query<void, string>({
            query: (token) => ({
                url: `auth/checkToken?token=${token}`,
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const {
    useUserLoginMutation,
    useCheckTokenQuery
} = authApi;
import { adaAPI } from "./adaAPI";

import { UserInfos, UsersList } from "./types/fetchedData";

import { CreateDefaultUser, CreateUser, EditUser } from "./types/queryParams";

const usersApi = adaAPI.injectEndpoints({
    endpoints: (build) => ({
        listUsers: build.query<UsersList[], void>({
            query: () => ({
                url: "users/list",
                method: 'GET',
            }),
        }),
        createUser: build.mutation<null, CreateUser>({
            query: ({firstname, lastname, email, role}) => ({
                url: "users/create",
                method: 'POST',
                body: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    role: role.toUpperCase(),
                }
            }),
        }),
        createDefaultUser: build.mutation<null, CreateDefaultUser>({
            query: ({firstname, lastname, email, password}) => ({
                url: "users/createDefault",
                method: 'POST',
                body: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password
                }
            }),
        }),
        editUser: build.mutation<void, EditUser>({
            query: ({id, firstname, lastname, email, password, role}) => ({
                url: "users/edit",
                method: 'POST',
                body: {
                    id: id,
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                    role: role?.toUpperCase(),
                }
            }),
        }),
        userInfos: build.query<UserInfos, string>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'GET',
            }),
        }),
        forgotPassword: build.mutation<void, string>({
            query: (email: string) => ({
                url: "users/forgotPassword",
                method: 'POST',
                body: {
                    email: email,
                }
            }),
        }),
    }),
    overrideExisting: true,
});
  
export const {
    useListUsersQuery,
    useCreateUserMutation,
    useEditUserMutation,
    useUserInfosQuery,
    useForgotPasswordMutation,
    useCreateDefaultUserMutation,
} = usersApi;
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserState } from "./types/userTypes";

const initialState: UserState = {
    isLoggedIn: false,
    auth: {
        userId: undefined,
        accessToken: undefined,
        refreshToken: undefined,
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserState>) => {
            state.isLoggedIn = true;
            state.auth = action.payload.auth;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.auth.userId = undefined;
            state.auth.accessToken = undefined;
            state.auth.refreshToken = undefined;
        },
    },
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
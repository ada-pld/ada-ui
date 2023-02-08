import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserState } from "./types/userTypes";

const initialState: UserState = {
    isLoggedIn: false,
    user: {
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
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user.userId = undefined;
            state.user.accessToken = undefined;
            state.user.refreshToken = undefined;
        },
    },
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
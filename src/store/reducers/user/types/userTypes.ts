export interface UserState {
    isLoggedIn: boolean;
    auth: {
        userId?: string;
        accessToken?: string;
        refreshToken?: string;
    }
}
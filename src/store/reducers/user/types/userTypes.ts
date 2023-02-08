export interface UserState {
    isLoggedIn: boolean;
    user: {
        userId?: string;
        accessToken?: string;
        refreshToken?: string;
    }
}
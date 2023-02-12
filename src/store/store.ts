import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';

import userReducer from './reducers/user/userSlice'
import { wapAPI } from './api/wapAPI'

import storage from './utils/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        [wapAPI.reducerPath]: wapAPI.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(wapAPI.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store);
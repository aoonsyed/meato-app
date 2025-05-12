import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import uiReducer from "./uiSlice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['isAuthenticated', 'user'],
}

const cartPersistConfig = {
    key: 'cart',
    storage,
    // No whitelist specified - entire cart state will be persisted
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        cart: persistedCartReducer,
        ui: uiReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        }
    }),
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export default store;
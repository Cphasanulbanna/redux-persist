import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "cart",
    storage,
};

//create persist storage reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },
});

//create persist store
export const persistedStore = persistStore(store);

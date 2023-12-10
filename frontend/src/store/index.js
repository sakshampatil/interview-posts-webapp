import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

import { authApi } from "./services/authApi";
import { postsApi } from "./services/postsApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([authApi.middleware, postsApi.middleware]),
});

export const persistedStore = persistStore(store);

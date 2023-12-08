import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSice";
import { authApi } from "./services/authApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware]),
});

import { configureStore } from "@reduxjs/toolkit";
import { restCountriesAPI } from "./services/restCountriesCore";

export const store = configureStore({
  reducer: {
    [restCountriesAPI.reducerPath]: restCountriesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restCountriesAPI.middleware),
});

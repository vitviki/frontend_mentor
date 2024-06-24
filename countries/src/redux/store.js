import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./features/modeSlice";
import { restCountriesAPI } from "./services/restCountriesCore";

export const store = configureStore({
  reducer: {
    [restCountriesAPI.reducerPath]: restCountriesAPI.reducer,
    mode: modeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restCountriesAPI.middleware),
});

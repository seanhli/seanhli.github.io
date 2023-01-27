import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import lightSwitchReducer from "./lightSwitchSlice";

export const store = configureStore({
  reducer: {
    lightSwitchSlice: lightSwitchReducer,
  },
});

setupListeners(store.dispatch);

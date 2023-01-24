import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import menuReducer from "./menu/menuUI";

export const store = configureStore({
  reducer: {
    menuSlice: menuReducer,
  },
});

setupListeners(store.dispatch);

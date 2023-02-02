import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import lightSwitchReducer from "./lightSwitchSlice";
import exitAnimationReducer from "./exitAnimationSlice";

export const store = configureStore({
  reducer: {
    lightSwitchSlice: lightSwitchReducer,
    exitAnimationSlice: exitAnimationReducer,
  },
});

setupListeners(store.dispatch);

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exiting: false,
  nextPage: "/",
};

export const exitAnimationSlice = createSlice({
  name: "exitAnimationSlice",
  initialState, // Set the initial state declared above
  reducers: {
    toggleExiting: (state, action) => {
      // action payload must come in as true or false
      state["exiting"] = action.payload;
    },
    changeNextPage: (state, action) => {
      // action payload should come in as the route name in string type
      state["nextPage"] = action.payload;
    },
  },
});

// Export our actions for use in our components
export const { toggleExiting, changeNextPage } = exitAnimationSlice.actions;

// Export the reducer to use in the declaration of our store in store.js
export default exitAnimationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
  delayedDarkMode: true,
};

export const lightSwitchSlice = createSlice({
  name: "lightSwitchSlice",
  initialState, // Set the initial state declared above
  reducers: {
    toggleLight: (state, action) => {
      state["darkMode"] = action.payload;
      const body = document.querySelector("body");
      if (!state["darkMode"] && !body.classList.contains("light")) {
        body.classList.add("light");
      } else if (state["darkMode"] && body.classList.contains("light")) {
        body.classList.remove("light");
      }
    },
    toggleDelay: (state) => {
      state["delayedDarkMode"] = state["darkMode"]
    }
  },
});

// Export our actions for use in our components
export const { toggleLight, toggleDelay } = lightSwitchSlice.actions;

// Export the reducer to use in the declaration of our store in store.js
export default lightSwitchSlice.reducer;

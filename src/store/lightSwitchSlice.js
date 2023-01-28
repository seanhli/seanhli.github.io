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
      state["darkMode"] = action.payload[0];
      //split page into sections (right, center, left)

      const footer = document.querySelector(".footer");
      const main = document.querySelector(".main-display");
      const menu = document.querySelector(".side-menu");
      if (!state["darkMode"]) {
        // right side (footer)
        setTimeout(() => {
          if (!footer.classList.contains("light")) {
            footer.classList.add("light");
          }
        }, action.payload[1]*0.05);
        // center (main display)
        setTimeout(() => {
          if (!main.classList.contains("light")) {
            main.classList.add("light");
          }
        }, action.payload[1]*0.6);
        // left side (side menu)
        setTimeout(() => {
          if (!menu.classList.contains("light")) {
            menu.classList.add("light");
          }
        }, action.payload[1]*0.8);
      } else {
        // right side (footer)
        setTimeout(() => {
          if (footer.classList.contains("light")) {
            footer.classList.remove("light");
          }
        }, action.payload[1]*0.05);
        // center (main display)
        setTimeout(() => {
          if (main.classList.contains("light")) {
            main.classList.remove("light");
          }
        }, action.payload[1]*0.6);
        // left side (side menu)
        setTimeout(() => {
          if (menu.classList.contains("light")) {
            menu.classList.remove("light");
          }
        }, action.payload[1]*0.8);
      }
    },
    toggleDelay: (state) => {
      state["delayedDarkMode"] = state["darkMode"];
    },
  },
});

// Export our actions for use in our components
export const { toggleLight, toggleDelay } = lightSwitchSlice.actions;

// Export the reducer to use in the declaration of our store in store.js
export default lightSwitchSlice.reducer;

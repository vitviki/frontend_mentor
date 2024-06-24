import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    flipMode: (state) => {
      try {
        state.mode = state.mode === "light" ? "dark" : "light";
      } catch (error) {
        return error;
      }
    },
  },
});

export const { flipMode } = modeSlice.actions;

export default modeSlice.reducer;

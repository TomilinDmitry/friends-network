import { createSlice } from "@reduxjs/toolkit";
export type TInitialState = {
  isHover: boolean;
};
export const initialState: TInitialState = {
  isHover: false,
};
export const hoverSlice = createSlice({
  name: "hoverSlice",
  initialState,
  reducers: {
    openNavigation: (state) => {
      state.isHover = true;
    },
    CloseNavigation: (state) => {
      state.isHover = false;
    },
  },
});

export const { openNavigation, CloseNavigation } = hoverSlice.actions;

export default hoverSlice.reducer;

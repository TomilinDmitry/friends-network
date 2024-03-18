import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type TInitialState = {
  query: string;
};
export const initialState: TInitialState = {
  query: "",
};
export const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    setQueryValue: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setQueryValue } = inputSlice.actions;

export default inputSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";
import hoverSlice from "./slice/hoverSlice";
import inputSlice from "./slice/inputSlice";

export const rootReducer = combineReducers({
  isHover: hoverSlice,
  query: inputSlice,
});

import userSlice from "../slices/user/user-slice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

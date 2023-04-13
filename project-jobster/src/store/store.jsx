import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user-slice";
import jobSlice from "./job/job-slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});

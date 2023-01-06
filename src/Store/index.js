import { configureStore } from "@reduxjs/toolkit";
import { errorReducers } from "./Error-Slice";

const store = configureStore({
  reducer: {
    error: errorReducers,
  },
});

export default store;

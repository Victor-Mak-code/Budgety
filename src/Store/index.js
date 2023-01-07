import { configureStore } from "@reduxjs/toolkit";
import { errorReducers } from "./Error-Slice";
import { preloadeReducers } from "./Preloader-Slice";

const store = configureStore({
  reducer: {
    error: errorReducers,
    preloader: preloadeReducers,
  },
});

export default store;

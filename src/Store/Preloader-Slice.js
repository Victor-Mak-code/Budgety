import { createSlice } from "@reduxjs/toolkit";

const preloaderSlice = createSlice({
  name: "preloader-slice",
  initialState: {
    showLoader: false,
  },
  reducers: {
    setShowLoader(state, actions) {
      state.showLoader = actions.payload;
    },
  },
});

export const preloaderActions = preloaderSlice.actions;
export const preloadeReducers = preloaderSlice.reducer;

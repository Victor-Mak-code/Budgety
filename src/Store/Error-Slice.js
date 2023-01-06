import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error-slice",
  initialState: {
    showError: false,
    errorMsg: "",
  },
  reducers: {
    setShowError(state, actions) {
      state.showError = actions.payload;
    },
    setErrorMsg(state, actions) {
      state.errorMsg = actions.payload;
    },
  },
});

export const errorActions = errorSlice.actions;
export const errorReducers = errorSlice.reducer;

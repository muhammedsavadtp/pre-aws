import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    userCred: null,
  },
  reducers: {
    setLoggedUserCred: (state, action) => {
      state.userCred = action.payload;
    },
  },
});

export const { setLoggedUserCred } = authSlice.actions;

export default authSlice.reducer;

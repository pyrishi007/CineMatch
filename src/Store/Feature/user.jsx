import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      action.payload && (state.user = action.payload);
    },
    removeUser: (state, action) => {
      return (state.user = null);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

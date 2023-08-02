// ./slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: null, // Set the initial state to null or an appropriate default value
  reducers: {
    addUser: (state, action) => {
      return action.payload; // Set the state to the payload value
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

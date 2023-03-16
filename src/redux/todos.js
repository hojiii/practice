import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: {},
});

// export const {} = todosSlice.actions;
export default todosSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    EditBooks(state, action) {
      state.books = action.payload;
    },
  },
});

export const { EditBooks } = bookSlice.actions;

const bookReducer = bookSlice.reducer;

export default bookReducer;

import { createSlice } from "@reduxjs/toolkit";

interface BookInfo {
  id: number;
  author: string;
  cover: string;
  isbn: string;
  pages: number;
  title: string;
  published: string;
}

interface Book {
  book: BookInfo;
  status: number;
}

export interface Books {
    books: Book[]
}

const initialState:Books = {
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

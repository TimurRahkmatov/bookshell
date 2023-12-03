import { createSlice } from "@reduxjs/toolkit";

interface BookInfo {
  id: number;
  author: string;
  cover: string;
  isbn: string;
  pages: number;
  title: string;
  published: number;
}

interface SearchBookInfo {
  author: string;
  cover: string;
  title: string;
  published: number
}

interface Book {
  book: BookInfo;
  status: number;
}

export interface Books {
  books: Book[];
  search: SearchBookInfo[];
}

const initialState: Books = {
  books: [],
  search: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    EditBooks(state, action) {
      state.books = action.payload;
    },
    CreateBook(state, action) {
      state?.books?.push(action.payload);
    },
    SearchFind(state, action) {
      state.search = action.payload;
    },
  },
});

export const { EditBooks, CreateBook, SearchFind } = bookSlice.actions;

const bookReducer = bookSlice.reducer;

export default bookReducer;

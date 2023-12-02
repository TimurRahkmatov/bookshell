import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/book";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
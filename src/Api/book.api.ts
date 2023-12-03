import axios from "axios";
import { BASE_URL } from "./auth.api";

export const book_api = {
  createBook: (body: any, sign: string) =>
    axios.post(BASE_URL + "/books", body, {
      headers: { Sign: sign },
    }),
  findBook: (sign: string) =>
    axios.get(BASE_URL + "/books", { headers: { Sign: sign } }),
  DeleteBook: (id: number, sign: string) =>
    axios.delete(BASE_URL + "/books/" + id, {
      headers: { Sign: sign },
    }),
  EditBook: (id: number, body: any, sign: string) =>
    axios.patch(BASE_URL + `/books/${id}`, body, {
      headers: { Sign: sign },
    }),
  SearchBook: (title: string, sign: string) =>
    axios.get(BASE_URL + "/books/" + title, {
      headers: {
        Sign: sign,
      },
    }),
};

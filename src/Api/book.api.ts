import axios from "axios";
import { BASE_URL } from "./auth.api";

const key = localStorage.getItem("Key")

export const book_api = {
  createBook: (body: any, sign: string) =>
    axios.post(BASE_URL + "/books", body, { headers: { Key: key, Sign: sign } }),
    findBook: (sign:string) => axios.get(BASE_URL + '/books' , {headers: {Key: key , Sign: sign}})
};

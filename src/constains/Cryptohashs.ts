import Crypto from 'crypto-js'

const SECRET = localStorage.getItem("Secret");
export const HASH_GET_BOOKS = Crypto.MD5("GET/books" + SECRET).toString()
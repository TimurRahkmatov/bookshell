import { Box } from "@mui/material";
import { Id } from "../../CardButtons/CardButtons";
import Crypto from "crypto-js";
import { book_api } from "../../../Api/book.api";

const DeleteBtn = ({ id }: Id) => {
  const SECRET = localStorage.getItem("Secret");
  const handleDeleteCard = async () => {
    try {
      const HASH_REMOVE_BOOK = Crypto.MD5(
        "DELETE/books/" + id + SECRET
      ).toString();
      const { data } = await book_api.DeleteBook(id, HASH_REMOVE_BOOK);
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      onClick={() => handleDeleteCard()}
      component="div"
      sx={{
        width: "33px",
        height: "33px",
        marginTop: "1rem",
        backgroundColor: "red",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        "&:hover": {
          backgroundColor: "#ff0000a6",
          transition: "0.2s",
        },
      }}
    >
     <i className="fa-solid fa-trash-can"></i>
    </Box>
  );
};

export default DeleteBtn;

import { Box, Container, FormLabel, Input } from "@mui/material";
import Avatar from "../../Images/avatar.png";
import LogoImg from "../../Images/logo.png";
import { useState } from "react";
import { book_api } from "../../Api/book.api";
import Crypto from "crypto-js";
import { useAppDispatch } from "../../store";
import Spinner from "../Spinner";
import { SearchFind } from "../../store/slices/book";

const Header = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const SECRET = localStorage.getItem("Secret");

  if (value === "") {
    dispatch(SearchFind(null));
  }




  const findSearchBooks = async () => {
    try {
      setLoading(true);
      const HASH_GET_SEARCH = Crypto.MD5(
        "GET/books/" + value + SECRET
      ).toString();
      const { data } = await book_api.SearchBook(value, HASH_GET_SEARCH);        
      if (data?.isOk === true) {
        dispatch(SearchFind(data?.data));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const keyDown = (event: any) => {
    if (event.key === "Enter") {
      findSearchBooks();
    }
  };

  return (
    <Box sx={{ padding: "1.5rem 0" }} component="header">
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1.4rem" }}>
            <img src={LogoImg} alt="" />
            <FormLabel htmlFor="my-input">
              <i
                style={{ color: "#fff" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </FormLabel>
            <Input
              onKeyDown={keyDown}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              sx={{ width: "250px", color: "#fff" }}
              id="my-input"
              name="my-input"
              placeholder="Search the book and press enter"
              aria-describedby="my-helper-text"
            />
          </Box>
          <Box
            component="div"
            display={{ lg: "flex", sm: "flex", md: "flex", xs: "none" }}
            sx={{ alignItems: "center", gap: "1.5rem" }}
          >
            <i
              style={{ fontSize: "1.5rem" }}
              className="fa-regular fa-bell"
            ></i>
            <img src={Avatar} alt="" />
          </Box>
        </Box>
      </Container>
      {loading === true ? <Spinner /> : ''}
    </Box>
  );
};

export default Header;

import { Box, Skeleton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { book_api } from "../../Api/book.api";
import { HASH_GET_BOOKS } from "../../constains/Cryptohashs";
import { EditBooks } from "../../store/slices/book";
import { useAppDispatch, useAppSelector } from "../../store";
import CardButtons from "../CardButtons";

const BookCard = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const state = useAppSelector((state) => state.books.books);
  const findBooks = async () => {
    try {
      setLoading(true);
      const { data } = await book_api.findBook(HASH_GET_BOOKS);
      dispatch(EditBooks(data?.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    findBooks();
  }, []);

  return (
    <>
      {loading == false
        ? state?.map((item) => (
            <Box sx={{ display: "flex" }}>
              <Box
                component="div"
                key={item?.book.id}
                sx={{
                  width: { lg: "370px", md: "380px", sm: "360px", xs: "340px" },
                  boxShadow: "0px 0px 20px #aaaaaa47",
                  backgroundColor: "#fff",
                  padding: "1.5rem",
                  minHeight: "200px",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "0.7rem",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.1rem", fontWeight: "600", width: "350px" }}
                >
                  {item?.book?.title}
                </Typography>
                <Typography sx={{ width: "350px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  minus. Nostrum iste!
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    {item?.book?.author}:
                    <Typography sx={{ color: "grey" }}>
                      {item?.book?.published}-year
                    </Typography>
                  </Typography>

                  <Box
                    sx={{
                      minWidth: "80px",
                      height: "23px",
                      borderRadius: "10px",
                      backgroundColor: "#EFE6FD",
                      display: "flex",
                      padding: "0 0.7rem",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#9654F4",
                    }}
                  >
                    {item?.book?.pages} {""}
                    pages
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "0.3rem",
                  }}
                ></Box>
              </Box>
              <CardButtons />
            </Box>
          ))
        : [0, 1, 2].map((index: number) => (
            <Skeleton
              key={index}
              animation="wave"
              variant="rectangular"
              width={360}
              height={200}
              sx={{ borderRadius: "7px", backgroundColor: "#6d6d6d4e" }}
            />
          ))}
    </>
  );
};

export default BookCard;

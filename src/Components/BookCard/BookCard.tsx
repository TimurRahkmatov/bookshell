import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { book_api } from "../../Api/book.api";
import { HASH_GET_BOOKS } from "../../constains/Cryptohashs";
import { EditBooks } from "../../store/slices/book";
import { useAppDispatch, useAppSelector } from "../../store";
import CardButtons from "../CardButtons";
import CardSkeleton from "../Skeleton/CardSkeleton";

const BookCard = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const state = useAppSelector((state) => state.books.books);
  const findBooks = async () => {
    try {
      setLoading(true);
      const { data } = await book_api.findBook(HASH_GET_BOOKS);
      if(data?.data === null) {
        dispatch(EditBooks([]));
      }else {
        dispatch(EditBooks(data?.data));
      }
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
            <Box key={item.book.id} sx={{ display: "flex" }}>
              <Box
                component="div"
                key={item?.book.id}
                sx={{
                  width: { lg: "370px", md: "380px", sm: "360px", xs: "330px" },
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
                <Typography sx={{ width: { lg: "340px", md: "330px", sm: "300px", xs: "300px" } }}>
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
                      fontSize: {xs: "15px"} 
                    }}
                    variant="body1"
                  >
                    {item?.book?.author}:
                    <Typography variant="body1" sx={{ color: "grey" , fontSize: {xs: "15px"} }}>
                      {item?.book?.published}-year
                    </Typography>
                  </Typography>

                  <Box
                    sx={{
                      maxWidth: "80px",
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
              <CardButtons id={item?.book?.id} />
            </Box>
          ))
        : (<CardSkeleton />)}
    </>
  );
};

export default BookCard;

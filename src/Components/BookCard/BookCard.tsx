import { Box, Typography } from "@mui/material";

const BookCard = () => {
  const state = [
    {
      status: 1,
      book: {
        id: "1",
        title: "nimadir zo'r kitob",
        author: "Timur Rahmatov",
        published: 2022,
        pages: 211,
      },
    },
  ];

  return (
    <>
      {state?.map((item) => (
        <Box
          key={item?.book.id}
          sx={{
            width: { lg: "370px", md: "370px", sm: "360px", xs: "340px" },
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
              sx={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
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
      ))}
    </>
  );
};

export default BookCard;

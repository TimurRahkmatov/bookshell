
import { useAppSelector } from "../../store";
import { Box , Typography } from "@mui/material";

const SearchCard = () => {
  const state = useAppSelector((state) => state.books.search);
  return (
    <>
      {state?.map((item , index) => (
        <Box sx={{ display: "flex" }}>
          <Box
            component="div"
            key={index}
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
              sx={{ fontSize: "1.1rem", fontWeight: "600", maxWidth: "350px" }}
            >
              {item.title}
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
                {item.author}:
                <Typography sx={{ color: "grey" }}>
                  {item.published}-year
                </Typography>
              </Typography>
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
        </Box>
      ))}
    </>
  );
};

export default SearchCard;

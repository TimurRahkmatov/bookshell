import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CreateBookModal from "../../Components/Modals/CreateBookModal";
import BookCard from "../../Components/BookCard";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ padding: "2rem 0" }} component="section">
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              color: "#fff",
              fontSize: "36px",
            }}
            variant="h4"
          >
            You've got{" "}
            <Typography sx={{ color: "#6200EE", fontSize: "36px" }}>
              7 books
            </Typography>
            
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <TextField
              id="outlined-basic"
              placeholder="Enter your name"
              variant="outlined"
              inputProps={{
                style: {
                  width: "220px",
                  height: "8px",
                },
              }}
              sx={{
                color: "black",
                backgroundColor: "#fff",
                borderRadius: "4px",
              }}
            />
            <Button
              onClick={() => setOpen(true)}
              sx={{
                backgroundColor: "#6200EE",
                color: "#fff",
                textTransform: "none",
                display: "flex",
                alignItems: " center",
                gap: "0.3rem",
                justifyContent: "center",
              }}
            >
              {" "}
              <i className="fa-solid fa-plus"></i> Create a book
            </Button>
          </Box>
        </Box>
        <CreateBookModal setOpen={setOpen} open={open} />
        <Box>
          <Typography
            sx={{
              marginTop: "0.6rem",
              color: "#fff",
              fontWeight: "400",
              fontSize: "20px",
            }}
            variant="h5"
          >
            Your task today
          </Typography>
          <Box sx={{marginTop: "1rem" , display: "flex" , alignItems: "center" , flexWrap: "wrap"}}>
            <BookCard />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;

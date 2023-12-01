import { Box, Button, Container, TextField, Typography } from "@mui/material";

const Home = () => {
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
          <Typography sx={{ display: "flex", gap: "1rem" }} variant="h4">
            You've got{" "}
            <Typography sx={{ color: "#6200EE" }} variant="h4">
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
      </Container>
    </Box>
  );
};

export default Home;

import { Box } from "@mui/material";

const CardButtons = () => {
  return (
    <Box>
      <Box
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
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </Box>
      <Box
        component="div"
        sx={{
          width: "33px",
          height: "33px",
          marginTop: "0.5rem",
          backgroundColor: "blue",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <i className="fa-solid fa-pencil"></i>
      </Box>
    </Box>
  );
};

export default CardButtons;

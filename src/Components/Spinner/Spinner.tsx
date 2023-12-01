import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ backgroundColor: "#00000024", position: "fixed" , width: "100%" , height: "100vh" , marginTop: "-5rem" , display: "flex" , justifyContent: "center" , alignItems: "center" }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;

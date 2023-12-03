import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ backgroundColor: "#00000048", position: "fixed" , width: "100%" , height: "100vh"  , display: "flex" , justifyContent: "center" , alignItems: "center" , zIndex: 1000 , marginTop: "-4.8rem" }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;

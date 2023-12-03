import BackgroundImage from "../../Images/background.png";
import NotFoundImg from "../../Images/404.png";
import { Box } from "@mui/material";
import SubmitButton from "../../Components/Buttons/SubmitBtn";
import { Link } from "react-router-dom";
import SubmitInfoButton from "../../Components/Buttons/SubmitInfoBtn";

const NotFound = () => {
  return (
    <Box>
      <img
        className="background_image"
        src={BackgroundImage}
        alt="background image"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <img src={NotFoundImg} alt="404 Page not found" />
        <Box
          sx={{
            width: "400px",
            display: "flex",
            justifyContent: { xs: "center", lg: "space-between" , md: "space-between" , sm: "space-between"},
            alignItems: "center",
            gap: "2rem",
            marginTop: "1rem",
          }}
          component="div"
        >
          <Box sx={{ width: { xs: "150px", lg: "100%" , md: "100%" , sm: "100%" } }}>
            <Link to="/">
              <SubmitButton>Go Home page</SubmitButton>
            </Link>
          </Box>
          <Box sx={{ width: { xs: "150px", lg: "100%" , md: "100%" , sm: "100%" } }}>
            <Link to="/">
              <SubmitInfoButton>Reaload page</SubmitInfoButton>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;

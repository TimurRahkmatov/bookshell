import BackgroundImage from "../../Images/background.png";
import NotFoundImg from "../../Images/404.png"
import { Box } from "@mui/material";
import SubmitButton from "../../Components/Buttons/SubmitBtn";
import { Link } from "react-router-dom";


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
        <Box sx={{width: '400px' , display: "flex" , justifyContent: "space-between" , alignItems: "center" , gap: "2rem" , marginTop: '1rem'}} component="div"> 
          <Link style={{width: "100%"}} to="/"><SubmitButton>Go Home page</SubmitButton></Link>
        </Box>
      </Box>
    </Box>
  )
}

export default NotFound
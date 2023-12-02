import { Outlet , Navigate} from "react-router-dom";
import { Box } from "@mui/material";
import BackgroundImage from "../../Images/background.png"
// import { KEY } from "../../constains/HeaderCase";
const Public = () => {
  const key = localStorage.getItem("Key")
  return key === null ? (
    <>
      <img
        className="background_image"
        src={BackgroundImage}
        alt="background image"
      />
      <Box sx={{height: "100vh", display:"flex" , justifyContent: "center" , alignItems: "center" , }}>
            <Outlet />
        </Box>
    </>
  ) : <Navigate to='/'/>;
};

export default Public;

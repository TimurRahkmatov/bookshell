import { Outlet , Navigate} from "react-router-dom";
import { Box } from "@mui/material";
import BackgroundImage from "../../Images/background.png"
import { KEY } from "../../constains/HeaderCase";
const Public = () => {

  return KEY == null ? (
    <>
      <img
        className="background_image"
        src={BackgroundImage}
        alt="background image"
      />
      <Box sx={{height: "100vh", display:"flex" , justifyContent: "center" , alignItems: "center" , }}>
            <Outlet />
        </Box>
      <Outlet />
    </>
  ) : <Navigate to='/' />;
};

export default Public;

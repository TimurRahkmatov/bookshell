import { Outlet, Navigate } from "react-router-dom";
import Header from "../../Components/Header";
import BackgroundImage from "../../Images/background.png";
import axios from "axios";
const Private = () => {
  
  const key = localStorage.getItem("Key")  
  if (key) axios.defaults.headers.common["Key"] = key;
  
  return key ? (
    <>
      <img
        className="background_image"
        src={BackgroundImage}
        alt="background image"
      />
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Private;

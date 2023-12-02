import { Outlet, Navigate } from "react-router-dom";
import Header from "../../Components/Header";
import BackgroundImage from "../../Images/background.png";
const Private = () => {
  const key = localStorage.getItem("Key")  
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

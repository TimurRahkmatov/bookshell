import { Outlet, Navigate } from "react-router-dom";
import Header from "../../Components/Header";
import { KEY } from "../../constains/HeaderCase";
import BackgroundImage from "../../Images/background.png";
const Private = () => {
  return KEY ? (
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

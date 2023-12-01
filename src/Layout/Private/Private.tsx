import { Outlet , Navigate } from "react-router-dom";
import Header from "../../Components/Header";
import { KEY } from "../../constains/HeaderCase";
const Private = () => {
  return KEY ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : <Navigate to="/login"/>;
};

export default Private;

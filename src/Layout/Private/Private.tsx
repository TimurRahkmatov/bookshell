import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";

const Private = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Private;

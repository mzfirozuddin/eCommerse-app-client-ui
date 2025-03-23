import Navbar from "@/custom-component/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;

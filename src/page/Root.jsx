/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = ({user, setUser}) => {

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Outlet />
    </div>
  );
};

export default Root;

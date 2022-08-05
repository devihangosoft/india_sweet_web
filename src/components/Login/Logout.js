import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  let navigate = useNavigate();
  sessionStorage.removeItem("user");
  useEffect(() => {
    navigate("/login");
  }, []);
  return <></>;
}

export default Logout;

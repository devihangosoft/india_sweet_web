import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function Logout() {
  let navigate = useNavigate();

  const [successmessage, setSuccessmessage] = useState("");
  const userData = JSON.parse( sessionStorage.getItem("user"));
  

  const [apiState, setapiState] = useState(1);
  const { response, loading, error } = useAxios({
    method: "post",
    url: "/logout",   
    body: JSON.stringify({
      "user_id": `${userData.data[0].user_id}`,      
    }),
    apiState: apiState,
  });

  useEffect(() => {
    if (response !== null) {
      console.log(response);      
      setTimeout(() => {
        navigate("/login");
        // sessionStorage.removeItem("user");
      }, 3000);
    }

    const resMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();    
  }, [response, error]);


  
  return <></>;
}

export default Logout;

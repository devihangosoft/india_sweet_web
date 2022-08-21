import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Swal from 'sweetalert2'

function Logout() {
  let navigate = useNavigate();

  const [successmessage, setSuccessmessage] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));
  //console.log(userData)
  // console.log(userData.data.data[0].public_id)
  const [apiState, setapiState] = useState(1);
  const { response, loading, error } = useAxios({
    method: "post",
    url: "/logout",
    body: JSON.stringify({
      user_id: `${userData.data.data[0].user_id}`,
    }),
    apiState: apiState,
  });

  useEffect(() => {
    console.log(response)
    if (response !== null) {
      console.log(response);
      Swal.fire({
        confirmButtonColor: 'orange',
        icon: 'success',
        title: 'Logout',
        text: 'User logout successfully..!!',
      }).then(() => {
        navigate("/login");
      })

      setTimeout(() => {
        navigate("/login");
        localStorage.removeItem("user");
      }, 5000);
    }

    const resMessage = (error.response && error.response.data && error.response.data.message) ||
      error.message ||  error.toString(); }, [response, error]);

  return <></>;
}

export default Logout;

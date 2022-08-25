import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Swal from 'sweetalert2'

function Logout() {
  let navigate = useNavigate();
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
        showConfirmButton: false,
        icon: 'success',
        title: 'Logout',
        text: 'User logout successfully..!!',
      })
      setTimeout(() => {
        Swal.close();
        localStorage.removeItem("user")
        navigate('/login')
      }, 2000);
      
    }

    const resMessage = (error.response && error.response.data && error.response.data.message) ||
      error.message ||  error.toString(); }, [response, error]);

  return <></>;
}

export default Logout;

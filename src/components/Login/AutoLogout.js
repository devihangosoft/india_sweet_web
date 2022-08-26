import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Swal from 'sweetalert2'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";

function AutoLogout() {
  let navigate = useNavigate();

  const { user } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {

      dispatch({ type: "deleteUserDetails" });
      localStorage.removeItem("user")
      navigate('/login')

  }, []);

  return <></>;
}

export default AutoLogout;

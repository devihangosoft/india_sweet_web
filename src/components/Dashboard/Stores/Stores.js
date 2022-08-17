import React, { useState, useEffect } from "react";
import Tables from "../../DataTables/Tables";
import Filter from "../../Elements/Filter/Filter";
import Adduserform from "../../Configurations/UserConfig/Adduserform";
import { useDispatch } from "react-redux/es/exports";
import useAxios from "../../hooks/useAxios";
import MuiTable from "../../DataTables/MuiTable";
import StoresForm from "./StoresForm";


function Stores() {
  const dispatch = useDispatch();
  const handleShow = () =>
    dispatch({ type: "openModal", payload: <StoresForm/> });

  const userData = JSON.parse( sessionStorage.getItem("user"));
  
  const [apiState, setapiState] = useState(1);
  const { response, loading, error } = useAxios({
    method: "get",
    url: "/getstoredetails", 
    apiState: apiState,
  });

  useEffect(() => {
    if (response !== null) {
      console.log(response);      
    }

    const resMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(resMessage)    
  }, [response, error]);



  return (
    <>
      <div className="row pb-4">
        <div className="col-6">
          <button class="btn btn-theme mt-2" variant="primary" onClick={handleShow}>Add Store</button>
        </div>
        <div className="col-6 ">
          {/* <Filter /> */}
        </div>
      </div>
      <div className="row align-items-center justify-content-between">
        <div className="col-md-12">
          {/* <Tables /> */}
          <MuiTable data={response} />
        </div>
      </div>
    </>
  );
}

export default Stores;

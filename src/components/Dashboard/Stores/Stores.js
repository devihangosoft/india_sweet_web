import React, { useState, useEffect } from "react";
import Tables from "../../DataTables/Tables";
import Filter from "../../Elements/Filter/Filter";
import Adduserform from "../../Configurations/UserConfig/Adduserform";
import { useDispatch } from "react-redux/es/exports";
import useAxios from "../../hooks/useAxios";
import MuiTable from "../../DataTables/MuiTable";
import StoresForm from "./StoresForm";
import UpdateStoreForm from "./UpdateStoreForm";


function Stores() {
  const dispatch = useDispatch();
  const [apiState, setapiState] = useState(1);
  
  const handleShow = () =>
    dispatch({ type: "openModal", payload: <StoresForm callback={()=>setapiState(apiState+1)} /> });

  const userData = JSON.parse( localStorage.getItem("user"));
  
  const { response, loading, error } = useAxios({
    method: "post",
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
        <div className="col-12">
          <button class="btn btn-theme mt-2 float-right" variant="primary" onClick={handleShow}>Add Store</button>
        </div>
        <div className="col-6 ">
          {/* <Filter /> */}
        </div>
      </div>
      <div className="row align-items-center justify-content-between">
        <div className="col-md-12">
          {/* <Tables /> */}
          <MuiTable updateColumn={true} updateForm={UpdateStoreForm} callback={()=>setapiState(apiState+1)} data={response} />
        </div>
      </div>
    </>
  );
}

export default Stores;

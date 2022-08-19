import React, { useState, useEffect } from "react";
import Tables from "../../DataTables/Tables";
import Filter from "../../Elements/Filter/Filter";
import { NavLink } from "react-router-dom"
import useAxios from "../../hooks/useAxios";
import MuiTable from "../../DataTables/MuiTable";

function Orders() {

    const [apiState, setapiState] = useState(1);
    const { response, loading, error } = useAxios({
      method: "get",
      url: "/getlead",
      apiState: apiState,
    });
  
    useEffect(() => {
      if (response !== null) {
        console.log(response);
        // setSuccessmessage(response.message);
        // setTimeout(() => {
        //   navigate("/login");
        // }, 5000);
      }
  
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      // setMessage(resMessage);
      console.log(resMessage)
      setTimeout(() => {
        // setMessage("");
      }, 5000);
    }, [response, error]);
  
    const handleRegister = (e) => {
      // e.preventDefault();
      setapiState(apiState + 1);
    };
  
  return (
    <>
        <div className="row pb-4">
          <div className="col-6">
            <NavLink className="text-white btn btn-theme mt-2" to="/orderform">
              Add Order
            </NavLink>
          </div>
          <div className="col-6 ">
            {/* <Filter /> */}
          </div>
        </div>     
      <div className="row align-items-center justify-content-between">
        <div className="col-md-12">
        
        <MuiTable viewColumn={true} data={response} />
        </div>
        </div>
    </>
  );
}

export default Orders;

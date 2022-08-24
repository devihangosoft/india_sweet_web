import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import useAxios from "../../hooks/useAxios";
import MuiTable from "../../DataTables/MuiTable";

function Orders() {
  const userData = JSON.parse(localStorage.getItem("user"));
    const [apiState, setapiState] = useState(1);
    const { response, loading, error } = useAxios({
      method: "post",
      url: "/getleadselectedcolumns",
      body: JSON.stringify({
        user_id: `${userData.data.data[0].user_id}`,
      }),
      apiState: apiState,
    });

    useEffect(() => {
      if (response !== null) {
       console.log(response);
        // setSuccessmessage(response.message);
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

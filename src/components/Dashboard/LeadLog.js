import React, { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import MuiTable from "../DataTables/MuiTable";

function LeadLog() {
  const userData = JSON.parse( localStorage.getItem("user"));
  const [apiState, setapiState] = useState(1);
  const { response, loading, error } = useAxios({
    method: "get",
    url: "/getleadlog", 
    body: JSON.stringify({
     user_id: 1,
     lead_id: 1,
    }),
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
          <button class="btn btn-theme mt-2 float-right" variant="primary" >Add Store</button>
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

export default LeadLog;

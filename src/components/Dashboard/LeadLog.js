import React, { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import MuiTable from "../DataTables/MuiTable";

function LeadLog() {
  const userData = JSON.parse( localStorage.getItem("user"));
  const [apiState, setapiState] = useState(1);
  const { response, loading, error } = useAxios({
    method: "post",
    url: "/getleadlog", 
    body: JSON.stringify({
    // user_id: "1",
     lead_id: "1",
    }),
    apiState: apiState,
  });

  console.log(JSON.stringify({
   //user_id: "1",
   lead_id: "1",
  }))

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
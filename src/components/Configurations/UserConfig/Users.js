import React, { useState, useEffect } from "react";
import Adduserform from "./Adduserform";
import { useDispatch } from "react-redux/es/exports";
import useAxios from "../../hooks/useAxios";
import MuiTable from "../../DataTables/MuiTable";

export default function Users() {
  const dispatch = useDispatch();

  const handleShow = () =>
    dispatch({ type: "openModal",  payload : <Adduserform />  });

    const [apiState, setapiState] = useState(1);
    const { response, loading, error } = useAxios({
      method: "get",
      url: "/getcustomerlist",
      headers: {
        "Accept": "*/*",
        "Content-Type": "application/json",
        // "api-key": "vU1r8cgjty2d3F4zdxvd0TXpctgkRflfGKKfLpfiIhHDTrcbdz0ZUrm6TA",
        "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MDMwMjIyMywianRpIjoiN2U3YjMzODQtMDAyYi00ODNlLTgzY2YtZWU3M2ExYzZmZDJiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IkRldjEyMzQ3IiwibmJmIjoxNjYwMzAyMjIzLCJleHAiOjE2NjAzMjM4MjN9.fdLbOB18qfeREgmxiKNpZFiUal740lfFydLJLq5eT7M"
  },
      // body: JSON.stringify({
      //   user_id: "1405ebc2-9eae-4909-b8f8-de131da71bd7",
      // }),
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
             <div className="pb-4">
                <div className="row">
                  <div className="col-6">
                    {/* <h3>Users List</h3> */}
                    
                  </div>
                  <div className="col-6">
                  <button class="btn btn-theme float-right mt-2"variant="primary" onClick={handleShow}>Add User</button>
                  </div>
                </div>
              </div>

              
        <div className="row align-items-center justify-content-between">
          <div className="col-md-12">
    
          <MuiTable data={response} />
          </div>
        </div>


    </>
  );
}









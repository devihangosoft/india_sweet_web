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









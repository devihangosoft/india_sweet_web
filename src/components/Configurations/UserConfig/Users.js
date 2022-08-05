import React from "react";
import Tables from "../../DataTables/Tables";
import Adduserform from "./Adduserform";
import { useDispatch } from "react-redux/es/exports";

export default function Users() {
  const dispatch = useDispatch();

  const handleShow = () =>
    dispatch({ type: "openModal",  payload : <Adduserform />  });

  return (
    <>
             <div className="py-4">
                <div className="row">
                  <div className="col-6">
                    <h3>Users List</h3>
                    
                  </div>
                  <div className="col-6">
                  <button class="btn btn-primary float-right mt-2"variant="primary" onClick={handleShow}>Add User</button>
                  </div>
                </div>
              </div>

              
        <div className="row align-items-center justify-content-between">
          <div className="col-md-12">
    
            <Tables />
          </div>
        </div>


    </>
  );
}









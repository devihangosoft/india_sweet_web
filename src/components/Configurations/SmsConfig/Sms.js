import React from "react";
import Tables from "../../DataTables/Tables";
import Addsmsform from "./Addsmsform";
import { useDispatch } from "react-redux/es/exports";

export default function Sms() {
  const dispatch = useDispatch();

  const handleShow = () =>
    dispatch({
      type: "openModal",
      payload : <Addsmsform /> 
    });

  return (
    <>


             <div className="py-4">
                <div className="row">
                  <div className="col-6">
                    <h3>Sms Templates List</h3>
                    
                  </div>
                  <div className="col-6">
                  <button class="btn btn-theme float-right mt-2"variant="primary" onClick={handleShow}>Add Sms templates</button>
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









import React from "react";
import Tables from "../../DataTables/Tables";
import Filter from "../../Elements/Filter/Filter";
import Adduserform from "../../Configurations/UserConfig/Adduserform";
import { useDispatch } from "react-redux/es/exports";

function Payments() {
  const dispatch = useDispatch();
  const handleShow = () =>
    dispatch({ type: "openModal", payload: <Adduserform /> });
  return (
    <>
      <div className="pb-4">
        <div className="row">
          <div className="col-6">
            {/* <button class="btn btn-theme mt-2" variant="primary" onClick={handleShow}>Add Order</button> */}
          </div>
          <div className="col-6 ">
            <Filter />
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

export default Payments;

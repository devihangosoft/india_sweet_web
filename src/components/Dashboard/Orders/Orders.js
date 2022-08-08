import React from "react";
import Tables from "../../DataTables/Tables";
import Filter from "../../Elements/Filter/Filter";
import {NavLink} from "react-router-dom"

function Orders() {

  return (
    <>
      <div className="pb-4">
        <div className="row">

        <div className="col-6">
          <NavLink className="text-white btn btn-theme mt-2" to="/orderform">
          Add Order
          </NavLink>
        
                  </div>

          <div className="col-6 ">
            <Filter/>
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

export default Orders;

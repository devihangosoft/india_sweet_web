import React, { useState, useEffect } from "react";
import "react-step-progress/dist/index.css";
import MuiTabs from "./MuiTabs";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom"

function OderDetails(props) {
  const userData = JSON.parse(localStorage.getItem("user"));
  const { orderId } = useParams()
  return (
    <>
      <div className="page-content">
        <div className="cart">
          <div className="row">
            <div className="col-md-12 pb-3">
              <h2 className="h5 mb-0"><a href="#" className="text-muted"></a> Order #{orderId}</h2>
            </div>
            <div className="col-md-12">
              <MuiTabs leadid={orderId}/>
            </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default OderDetails;

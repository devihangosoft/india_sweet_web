import React, { useState, useEffect } from "react";
import Tables from "../../DataTables/Tables";
import Filter from "../../Elements/Filter/Filter";
import Adduserform from "../../Configurations/UserConfig/Adduserform";
import { useDispatch } from "react-redux/es/exports";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import MuiTable from "../../DataTables/MuiTable";
import ProductsForm from "./ProductsForm";

function Products() {
  const dispatch = useDispatch();
  const handleShow = () =>
    dispatch({ type: "openModal", payload: <ProductsForm/> });


  const [apiState, setapiState] = useState(1);
  const { response, loading, error } = useAxios({
    method: "get",
    url: "/getproduct",
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
            <button class="btn btn-theme mt-2" variant="primary" onClick={handleShow}>Add Product</button>
          </div>

          <div className="col-6 ">
            <Filter />
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-between">
        <div className="col-md-12">
          {/* <Tables data={response} /> */}

          <MuiTable data={response} />
        </div>
      </div>
    </>
  );
}

export default Products;

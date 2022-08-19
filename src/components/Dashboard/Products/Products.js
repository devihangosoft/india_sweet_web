import React, { useState, useEffect } from "react";
import Tables from "../../DataTables/Tables";
import Filter from "../../Elements/Filter/Filter";
import Adduserform from "../../Configurations/UserConfig/Adduserform";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import MuiTable from "../../DataTables/MuiTable";
import ProductsForm from "./ProductsForm";
import UpdateProductForm from "./UpdateProductForm";

function Products() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.userReducer);
  const [apiState, setapiState] = useState(1);

  const handleShow = () =>{
    dispatch({ type: "openModal", payload: <ProductsForm callback={()=>setapiState(apiState+1)} /> });
    console.log(user)
    
  }

  const { response, loading, error } = useAxios({
    method: "get",
    url: "/getproduct",
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

          <div className="col-12">
            <button class="btn btn-theme mt-2 float-right" variant="primary" onClick={handleShow}>Add Product</button>
          </div>

          <div className="col-6 ">
            {/* <Filter /> */}
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-between">
        <div className="col-md-12">
          {/* <Tables data={response} /> */}

          <MuiTable updateColumn={true} updateForm={UpdateProductForm} callback={()=>setapiState(apiState+1)} data={response} />
        </div>
      </div>
    </>
  );
}

export default Products;

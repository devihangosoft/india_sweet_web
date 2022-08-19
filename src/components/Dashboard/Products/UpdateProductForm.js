import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import "../../Login/Signin.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux/es/exports";
import * as Yup from "yup";
import useAxios from "../../hooks/useAxios";

function UpdateProductForm({callback, rowData}) {
  const dispatch = useDispatch();
  //let navigate = useNavigate();
  let name = /^[a-zA-Z ]+$/;
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required("First name is required")
      .matches(name, "Enter only Alphabets"),
    details: Yup.string()
      .trim()
      .required("Product details is required"),
    quantity: Yup.string()
      .trim()
      .required("Product quantity is required"),
    price: Yup.string()
      .trim()
      .required("Product price is required")
  });

  const initialValues = {
    details: rowData.product_details,
    name: rowData.product_name,
    quantity: rowData.quantity,
    price: rowData.price
  };
  console.log(rowData)

  const ref = useRef([]);
  const [message, setMessage] = useState("");
  const [successmessage, setSuccessmessage] = useState("");
  const userData = JSON.parse( sessionStorage.getItem("user"));
  
  const [apiState, setapiState] = useState(0);
  const { response, loading, error } = useAxios({
    method: "post",
    url: "/updateproduct",   
    body: JSON.stringify({    
      product_id: rowData.product_id,  
      product_name: ref.current.values.name,
      product_details: ref.current.values.details,
      quantity: ref.current.values.quantity,
      price: ref.current.values.price
    }),
    apiState: apiState,
  });


  useEffect(() => {
    if (response !== null) {
      console.log(response);
      callback();
      setSuccessmessage(response.message);
      setTimeout(() => {
        dispatch({ type: "closeModal" });
      }, 2000);
    }

    const resMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    setMessage(resMessage);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [response, error]);

  const handleproductsForm = (e) => {
    // e.preventDefault();
    setapiState(apiState + 1);
  };

  return (
    <>


      <div className="p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleproductsForm}
          innerRef={ref}
        >
          {({ errors, touched }) => (
            <Form className="theme-form">
              <div className="text-center">
                <h5 className="text-uppercase">Update Product</h5>
                <p>Edit product details</p>
              </div>
              <div className="form-group">
                <div className="row g-2">
                  <div className="col-12">
                    <label className="col-form-label">
                      products Name
                    </label>
                    <Field
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="enter product name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row g-2">
                  <div className="col-12">
                    <label className="col-form-label">
                      Product details
                    </label>
                    <Field
                      className="form-control"
                      type="text"
                      name="details"
                      placeholder="enter product details"
                    />
                    <ErrorMessage
                      name="details"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row g-2">
                  <div className="col-12">
                    <label className="col-form-label">
                      Product quantity
                    </label>
                    <Field
                      className="form-control"
                      type="number"
                      name="quantity"
                      placeholder="enter product quantity"
                    />
                    <ErrorMessage
                      name="quantity"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row g-2">
                  <div className="col-12">
                    <label className="col-form-label">
                      Product price
                    </label>
                    <Field
                      className="form-control"
                      type="number"
                      name="price"
                      placeholder="enter product details"
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group mt-5 mb-0">
                <button
                  className="btn btn-theme btn-block w-100"
                  type="submit"
                >
                  Update
                </button>
              </div>

              {message && (
                <div className="form-group mt-5 mb-0">
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                </div>
              )}
              {successmessage && (
                <div className="form-group mt-5 mb-0">
                  <div className="form-group">
                    <div className="alert alert-success" role="alert">
                      {successmessage}
                    </div>
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>

    </>
  );
}

export default UpdateProductForm;

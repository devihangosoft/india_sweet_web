import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import "../../Login/Signin.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux/es/exports";
import * as Yup from "yup";
import useAxios from "../../hooks/useAxios";

function StoresForm({callback}) {
  //let navigate = useNavigate();
  const dispatch = useDispatch();
  let name = /^[a-zA-Z ]+$/;
  const SignupSchema = Yup.object().shape({
    storename: Yup.string()
      .trim()
      .required("First name is required")
      .matches(name, "Enter only Alphabets"),
      address: Yup.string()
      .trim()
      .required("Store Address is required")
      .matches(name, "Enter only Alphabets"),
  });

  const initialValues = {
    address: "",
    storename: "",

  };

  const ref = useRef([]);
  const [message, setMessage] = useState("");
  const [successmessage, setSuccessmessage] = useState("");

  const [apiState, setapiState] = useState(0);
  const { response, loading, error } = useAxios({
    method: "post",
    url: "/createstore",
    body: JSON.stringify({
      store_address: ref.current.values.address,
      store_name: ref.current.values.storename,
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

  const handleStoresForm = (e) => {
    // e.preventDefault();
    setapiState(apiState + 1);
  };

  return (
    <>

 
                <div className="p-4">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={handleStoresForm}
                    innerRef={ref}
                  >
                    {({ errors, touched }) => (
                      <Form className="theme-form">
                        <div className="text-center">
                          <h5 className="text-uppercase">Create new store</h5>
                          <p>Enter your store details</p>
                        </div>
                        <div className="form-group">
                          <div className="row g-2">
                            <div className="col-12">
                              <label className="col-form-label">
                                Stores Name
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                name="storename"
                                placeholder="enter store name"
                              />
                              <ErrorMessage
                                name="storename"
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
                                Store Address
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                name="address"
                                placeholder="enter store address"
                              />
                              <ErrorMessage
                                name="address"
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
                            Create 
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

export default StoresForm;

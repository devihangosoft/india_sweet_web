import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import "../../Login/Signin.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAxios from "../../hooks/useAxios";

function Adduserform() {
  const [passwordShown1, setPasswordShown1] = useState(false);

  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };
  //let navigate = useNavigate();
  let name = /^[a-zA-Z ]+$/;
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .trim()
      .required("First name is required")
      .matches(name, "Enter only Alphabets"),
    lastname: Yup.string()
      .trim()
      .required("Last name is required")
      .matches(name, "Enter only Alphabets"),
    username: Yup.string()
      .trim()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must not exceed 20 characters"),
    phone: Yup.string()
      .trim()
      .required("Phone number is required")
      .min(10, "Mobile number should be 10 digit")
      .max(10, "Mobile number should be 10 digit"),
   
    email: Yup.string()
      .trim()
      .required("Email is required")
      .email("Email is invalid"),
      password: Yup.string()
      .trim()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    cpassword: Yup.string()
      .trim()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    companyid: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  };

  const ref = useRef([]);
  const [message, setMessage] = useState("");
  const [successmessage, setSuccessmessage] = useState("");
  const userData = JSON.parse( sessionStorage.getItem("user"));
  
  const [apiState, setapiState] = useState(0);
  const { response, loading, error } = useAxios({
    method: "post",
    url: "/registeruserinside",   
    body: JSON.stringify({      
      first_name: ref.current.values.firstname,
      last_name: ref.current.values.lastname,
      phone_number: ref.current.values.phone,
      email_address: ref.current.values.email,
      user_name: ref.current.values.username,
      password: ref.current.values.password,
      company_id: '49',
    }),
    apiState: apiState,
  });



  useEffect(() => {
    if (response !== null) {
      console.log(response);
      setSuccessmessage(response.message);
      setTimeout(() => {
        // navigate("/login");
      }, 5000);
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

  const handleAdduserform = (e) => {
    // e.preventDefault();
    setapiState(apiState + 1);
  };

  return (
    <>


      <div className="p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleAdduserform}
          innerRef={ref}
        >
          {({ errors, touched }) => (
            <Form className="theme-form">
              <div className="text-center">
                <h5 className="text-uppercase">Create new user</h5>
                <p>Enter your user details</p>
              </div>
              <div className="form-group">
                <div className="row g-2">
                <div className="col-12">
                              <label className="col-form-label">
                                User Name
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                name="username"
                                placeholder="User name"
                              />
                              <ErrorMessage
                                name="username"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                     
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row g-2">
                            <div className="col-6">
                              <label className="col-form-label pt-0">
                                First Name
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                name="firstname"
                                placeholder="First name"
                                pattern="[a-zA-Z]+"
                              />
                              <ErrorMessage
                                name="firstname"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="col-6">
                              <label className="col-form-label pt-0">
                                Last Name
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                name="lastname"
                                placeholder="Last name"
                              />
                              <ErrorMessage
                                name="lastname"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row g-2">
                            <div className="col-6">
                              <label className="col-form-label">
                                Phone Number
                              </label>
                              <Field
                                className="form-control"
                                type="number"
                                name="phone"
                                placeholder="9898 XXXXXX"
                                />
                              <ErrorMessage
                                name="phone"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="col-6">
                              <label className="col-form-label">
                                Email Address
                              </label>
                              <Field
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Test@gmail.com"
                              />
                              <ErrorMessage
                                name="email"
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
                                New Password
                              </label>
                              <div className="form-Field position-relative">
                                <Field
                                  className="form-control"
                                  type={passwordShown1 ? "text" : "password"}
                                  name="password"
                                  placeholder="*********"
                                />
                                <ErrorMessage
                                  name="password"
                                  component="div"
                                  className="text-danger"
                                />
                                <div className="show-hide">
                                  <span
                                    onClick={togglePasswordVisiblity1}
                                    className="show"
                                  ></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-3">
                              <label className="col-form-label">
                                Retype Password
                              </label>
                              <div className="form-Field position-relative">
                                <Field
                                  className="form-control"
                                  type={passwordShown2 ? "text" : "password"}
                                  name="cpassword"
                                  placeholder="*********"
                                />
                                <ErrorMessage
                                  name="cpassword"
                                  component="div"
                                  className="text-danger"
                                />
                                <div className="show-hide">
                                  <span
                                    onClick={togglePasswordVisiblity2}
                                    className="show"
                                  ></span>
                                </div>
                              </div>
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

export default Adduserform;

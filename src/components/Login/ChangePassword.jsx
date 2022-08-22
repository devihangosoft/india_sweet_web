import React, { useState , useEffect, useRef} from "react";
import Header from "./Header";
import useAxios from "../hooks/useAxios";

import "./Signin.scss";
import { useNavigate, NavLink } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


function ChangePassword() {
  let navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
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
    password: "",
    cpassword: "",
  };

  const ref = useRef([]);
  const [passwordShown1, setPasswordShown1] = useState(false);

  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };
  const [message, setMessage] = useState("");
  const [successmessage, setSuccessmessage] = useState("");

    const [apiState, setapiState] = useState(0);
    const userData = JSON.parse(localStorage.getItem("user"));

    const { response, loading, error } = useAxios({
      method: "post",      
      url: "/resetpassword",
      body: JSON.stringify({
        email_address: userData.data.data[0].email_address,
        new_password: ref.current.values.password,
    }),
      apiState: apiState,
    });

    useEffect(() => {
      if (response !== null) {
        console.log(response);
        setSuccessmessage(response.message)
        setTimeout(() => {
          setSuccessmessage("")
        }, 3000);
      }

      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(resMessage)
      setMessage(resMessage);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }, [response, error]);



  const handleRegister = ()=>{
    setapiState(apiState+1);
  }

  return (
    <>


      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">

          <div className="col-md-4 p-0">
            <div>
              <div className="text-center">
                <Header />
              </div>
              <div className="login-main">

                <Formik
                  initialValues={initialValues}
                  validationSchema={SignupSchema}
                  onSubmit={handleRegister}
                  innerRef={ref}
                >
                  {({ errors, touched }) => (
                    <Form className="theme-form">
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
                          Create Account
                        </button>
                      </div>

                      {message && (
                        <div className="form-group mt-2 mb-0">
                          <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                              {message}
                            </div>
                          </div>
                        </div>
                      )}
                      {successmessage && (
                        <div className="form-group mt-2 mb-0">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;

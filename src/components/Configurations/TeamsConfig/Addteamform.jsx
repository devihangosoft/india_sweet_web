import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import "../../Login/Signin.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAxios from "../../hooks/useAxios";

function Addteamform({callback}) {
  const dispatch = useDispatch();
  
  //let navigate = useNavigate();
  let name = /^[a-zA-Z ]+$/;
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required("First name is required")
      .matches(name, "Enter only Alphabets"),
  });

  const initialValues = {
    name: "",
  };

  const ref = useRef([]);
  const [message, setMessage] = useState("");
  const [successmessage, setSuccessmessage] = useState("");
  const userData = JSON.parse( sessionStorage.getItem("user"));
  
  const [apiState, setapiState] = useState(0);
  const { response, loading, error } = useAxios({
    method: "post",
    url: "/createteam",   
    body: JSON.stringify({      
      team_name: ref.current.values.name,
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

  const handleTeamForm = (e) => {
    // e.preventDefault();
    setapiState(apiState + 1);
  };

  return (
    <>


      <div className="p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleTeamForm}
          innerRef={ref}
        >
          {({ errors, touched }) => (
            <Form className="theme-form">
              <div className="text-center">
                <h5 className="text-uppercase">Create new team</h5>
                <p>Enter your team details</p>
              </div>
              <div className="form-group">
                <div className="row g-2">
                  <div className="col-12">
                    <label className="col-form-label">
                      Team Name
                    </label>
                    <Field
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="enter team name"
                    />
                    <ErrorMessage
                      name="name"
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

export default Addteamform;

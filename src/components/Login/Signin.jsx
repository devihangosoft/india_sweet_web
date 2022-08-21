import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import "./Signin.scss";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [successmessage, setSuccessmessage] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault()
    
    let postData = JSON.stringify({
      username: username,
      password: password,
    });

    
    try {
      //const response =
      await axios
        .post("http://216.48.182.12:5000/login", postData, {
          headers: {
            "Content-Type": "application/json",
            "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
          },
        })
        .then((response) => {
          dispatch({ type: "setUserDetails", payload: response });
          localStorage.setItem("user", JSON.stringify(response));
          setSuccessmessage("Login successfull !!");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        });

    } catch (error) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        setMessage(resMessage);
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };


  let navigate = useNavigate();
  const handleEmail = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <div className="login-card">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 p-0">
              <div className="text-center">
                <Header />
              </div>
              <div className="login-main">
                <form className="theme-form" onSubmit={handleLogin}>
                  <div className="text-center">
                    <h5 className="text-uppercase">Sign in </h5>
                    <p>Enter your username &amp; password to login</p>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">User Name</label>
                    <input
                      className="form-control"
                      type="text"
                      required
                      value={username}
                      onChange={handleEmail}
                      placeholder="Test@gmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <div className="form-input position-relative">
                      <input
                        className="form-control"
                        value={password}
                        onChange={handlePassword}
                        type={passwordShown ? "text" : "password"}
                        name="login[password]"
                        required
                        placeholder="*********"
                      />
                      <div className="show-hide">
                        <span
                          onClick={togglePasswordVisiblity}
                          className="show"
                        >
                          {" "}
                          Password
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-5">
                    <button
                      className="btn btn-theme btn-block"
                      // disabled={loading}
                    >
                      {/* {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )} */}
                      <span>Login</span>
                    </button>
                  </div>
                  <div className="form-group mt-2 mb-0">
                    {message && (
                      <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                          {message}
                        </div>
                      </div>
                    )}

                    {successmessage && (
                      <div className="form-group">
                        <div className="alert alert-success" role="alert">
                          {successmessage}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="form-group col-lg-12 mx-auto d-flex align-items-center mb-4">
                    <div className="border-bottom w-100 ml-5"></div>
                    <span className="px-2 small text-muted font-weight-bold text-muted">
                      OR
                    </span>
                    <div className="border-bottom w-100 mr-5"></div>
                  </div>
                  <p className="mt-4 mb-0 text-center">
                    Don't have account?{" "}
                    <NavLink
                      to="/register"
                      className="ms-2"
                      href="sign-up.html"
                    >
                      Create Account
                    </NavLink>
                  </p>
                  <p className=" mb-0 text-center">
                    Forgot Password ?{" "}
                    <NavLink
                      to="/resetPassword"
                      className="ms-2"
                      href="sign-up.html"
                    >
                      Reset Password
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

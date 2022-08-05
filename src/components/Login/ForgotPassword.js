import React from "react";
import Header from "./Header";
import LeftSide from "./LeftSide";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row py-5 mt-4 align-items-center justify-content-between">
          <LeftSide />

          <div className="col-offset-2 col-md-6 col-lg-6 ml-auto">
            <form action="#" id="verifyUserForm">
              <div className="row">
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="requestorEmail"
                    type="email"
                    name="userId"
                    placeholder="Registered email id"
                    className="form-control bg-white border-left-0 border-md"
                  />
                  <br />
                  <span className="formError" id="emailIdError"></span>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="userId"
                    type="text"
                    name="userId"
                    placeholder="Employee id"
                    className="form-control bg-white border-left-0 border-md"
                  />
                  <br />
                  <span className="formError" id="userIdError"></span>
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <button
                    type="button"
                    id="requestBtn"
                    onclick="resetPasswordRequest()"
                    className="btn btn-primary btn-block py-2 text-white"
                  >
                    <span className="font-weight-bold">
                      Request new password
                    </span>
                  </button>
                </div>

                {/* <!-- Divider Text --> */}
                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5"></div>
                  <span className="px-2 small text-muted font-weight-bold text-muted">
                    OR
                  </span>
                  <div className="border-bottom w-100 mr-5"></div>
                </div>

                {/* <!-- Already Registered --> */}
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Don't have an account?{" "}
                    <NavLink to="./registration" className="text-primary ml-2">
                      Register
                    </NavLink>
                  </p>
                  <p className="text-muted font-weight-bold">
                    Login to Creysto
                    <NavLink to="./login" className="text-primary ml-2">
                      Login
                    </NavLink>
                  </p>
                </div>
              </div>
            </form>
            <form
              action="#"
              id="resetPasswordForm"
              style={{display: "none"}}
            >
              <div className="row">
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="userPassword"
                    type="password"
                    name="password"
                    placeholder="New password"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* <!-- Submit Button --> */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <a
                    onclick="updatePassword()"
                    className="btn btn-primary btn-block py-2 text-white"
                  >
                    <span className="font-weight-bold">Change password</span>
                  </a>
                </div>

                {/* <!-- Divider Text --> */}
                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5"></div>
                  <span className="px-2 small text-muted font-weight-bold text-muted">
                    OR
                  </span>
                  <div className="border-bottom w-100 mr-5"></div>
                </div>

                {/* <!-- Already Registered --> */}
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Don't have an account?{" "}
                    <NavLink to="/registration" className="text-primary ml-2">
                      Register
                    </NavLink>
                  </p>
                  <p className="text-muted font-weight-bold">
                    Login to Creysto
                    <NavLink to="/" className="text-primary ml-2">
                      Login
                    </NavLink>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ForgotPassword;

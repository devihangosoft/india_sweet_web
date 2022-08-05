import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import "./Signin.scss";

function ResetPassword() {
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };

  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };
  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          <div className="col-md-7 p-0">
            <div className="login-card">
              <div>
                <div className="text-center">
                  <Header />
                </div>
                <div className="login-main">
                  <form className="theme-form">
                    <h4>Reset Your Password</h4>
                    <p>Enter your email/ phone to reset password</p>
                    <div className="form-group">
                      <label className="col-form-label">Enter Your Mobile Number</label>
                      <div className="row">
                        <div className="col-12 col-sm-12">
                          <input className="form-control mb-1" type="tel" placeholder="000-000-0000" />
                        </div>
                        <div className="mt-3 col-12">
                          <div className="text-end">
                            <button className="btn btn-primary btn-block m-t-10" type="submit">Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mb-4"><span className="reset-password-link">If don't receive OTP?&nbsp;&nbsp;<a className="btn-link text-danger" href="#">Resend</a></span></div>
                    <div className="form-group">
                      <label className="col-form-label pt-0">Enter OTP</label>
                      <div className="row">
                        <div className="col">
                          <input className="form-control text-center opt-text" type="text" value="00" maxlength="2" />
                        </div>
                        <div className="col">
                          <input className="form-control text-center opt-text" type="text" value="00" maxlength="2" />
                        </div>
                        <div className="col">
                          <input className="form-control text-center opt-text" type="text" value="00" maxlength="2" />
                        </div>
                      </div>
                    </div>
                    <h6 className="mt-4">Create Your Password</h6>
                    <div className="form-group">
                      <label className="col-form-label">New Password</label>
                      <div className="form-input position-relative">
                        <input className="form-control" type={passwordShown1 ? "text" : "password"} name="login[password]" required="" placeholder="*********" />
                        <div className="show-hide"><span onClick={togglePasswordVisiblity1} className="show"></span></div>
                      </div>
                    </div>
                    <div className="mt-4 form-group">
                      <label className="col-form-label">Retype Password</label>
                      <div className="form-input position-relative">
                        <input className="form-control" type={passwordShown2 ? "text" : "password"} name="bkk" required="" placeholder="*********" />
                        <div className="show-hide"><span onClick={togglePasswordVisiblity2} className="show"></span></div>
                      </div>
                    </div>
                    <div className="form-group mt-5 mb-0">

                      <button className="btn btn-primary btn-block w-100" type="submit">Done                          </button>
                    </div>
                    <p className="mt-4 mb-0 text-center">Already have an password?
                      <NavLink to="/login" className="text-primary ml-2">
                        Login
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;

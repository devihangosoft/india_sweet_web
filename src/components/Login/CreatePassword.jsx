import React, { useState } from "react";
import Header from "./Header";

import { NavLink } from "react-router-dom";
import "./Signin.scss";

function CreatePassword() {
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
  
          <div className="login-card">
          <div className="container">
      <div className="row align-items-center justify-content-between">
       
        <div className="col-md-7 p-0">
            <div>
              <div className="text-center">
			   <Header />
			  </div>
              <div className="login-main"> 
                <form className="theme-form">
                    <h4>Change Password</h4>
					<p>Create new Password</p>
                      <div className="form-group">
                      <label className="col-form-label">New Password</label>
                      <div className="form-input position-relative">
                        <input className="form-control" type={passwordShown1 ? "text" : "password"} name="login[password]" required="" placeholder="*********"/>
                        <div className="show-hide"><span onClick={togglePasswordVisiblity1} className="show"></span></div>
                      </div>
                    </div>
                    <div className="mt-4 form-group">
                      <label className="col-form-label">Retype Password</label>
					    <div className="form-input position-relative">
                      <input className="form-control" type={passwordShown2 ? "text" : "password"} name="bkk" required="" placeholder="*********"/>
					  <div className="show-hide"><span onClick={togglePasswordVisiblity2} className="show"></span></div>
					   </div>
                    </div>
                    <div className="form-group mt-5 mb-0">

                      <button className="btn btn-theme btn-block w-100" type="submit">Done                          </button>
                    </div>
                    <p className="mt-4 mb-0">Don't have account?<NavLink to="/register" className="ms-2" > Create Account</NavLink></p>
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

export default CreatePassword;

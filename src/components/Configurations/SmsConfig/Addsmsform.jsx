import React, { useState } from "react";

import axios from "axios";

import "../../Login/Signin.scss";

function Addsmsform() {
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };

  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onHandleFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };
  const onHandleLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };
  const onHandleUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onHandlePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const onHandleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onHandlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onHandleCpassword = (e) => {
    const cpassword = e.target.value;
    setCpassword(cpassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    let postData = JSON.stringify({
      first_name: firstname,
      last_name: lastname,
      phone_number: phone,
      email_address: email,
      user_name: username,
      password,
    });

    console.log(postData);
    try {
      const response = await axios
        .post("http://216.48.182.12:5000/registeruser", postData, {
          headers: {
            "Content-Type": "application/json",
            "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
          },
        })
        .then((response) => {
          console.log(response.data);
          setMessage(response.data.message);
          setSuccessful(true);
        });
    } catch (error) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setMessage(resMessage);
      setSuccessful(false);
    }
  };

  return (
    <>
      {/* <div className="container">
        <div className="row align-items-center justify-content-between">          
          <div className="col-xl-6 p-0"> */}

            <div className="p-4">


              <div>
               
                {/* <div className="login-main"> */}
                  <form className="theme-form" onSubmit={handleRegister}>
                    <h4>Create user account</h4>
                    <p>Enter user's personal details to create account</p>
                    <div className="form-group">
                      <label className="col-form-label">User Name</label>
                      <input
                        className="form-control"
                        type="text"
                        required
                        name="username"
                        value={username}
                        onChange={onHandleUsername}
                        placeholder="User name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label pt-0">Your Name</label>
                      <div className="row g-2">
                        <div className="col-6">
                          <input
                            className="form-control"
                            type="text"
                            required
                            name="firstname"
                            value={firstname}
                            onChange={onHandleFirstname}
                            placeholder="First name"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            className="form-control"
                            type="text"
                            required
                            name="lastname"
                            value={lastname}
                            onChange={onHandleLastname}
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row g-2">
                        <div className="col-6">
                          <label className="col-form-label">Phone Number</label>
                          <input
                            className="form-control"
                            type="tel"
                            required
                            name="phone"
                            value={phone}
                            onChange={onHandlePhone}
                            placeholder="+91 XXXX"
                          />
                        </div>
                        <div className="col-6">
                          <label className="col-form-label">
                            Email Address
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            required
                            name="email"
                            value={email}
                            onChange={onHandleEmail}
                            placeholder="Test@gmail.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row g-2">
                        <div className="col-12">
                          <label className="col-form-label">New Password</label>
                          <div className="form-input position-relative">
                            <input
                              className="form-control"
                              type={passwordShown1 ? "text" : "password"}
                              required
                              name="password"
                              value={password}
                              onChange={onHandlePassword}
                              placeholder="*********"
                            />
                            <div className="show-hide">
                              <span
                                onClick={togglePasswordVisiblity1}
                                className="show"
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label className="col-form-label">
                            Retype Password
                          </label>
                          <div className="form-input position-relative">
                            <input
                              className="form-control"
                              type={passwordShown2 ? "text" : "password"}
                              required
                              name="cpassword"
                              value={cpassword}
                              onChange={onHandleCpassword}
                              placeholder="*********"
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
                  </form>
                </div>
              </div>
            {/* </div> */}
            
          {/* </div>
        </div>
      </div> */}

    </>
  );
}

export default Addsmsform;

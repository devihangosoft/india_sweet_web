import React, { useState , useEffect} from "react";
import Header from "./Header";

import { NavLink } from "react-router-dom";
import "./Signin.scss";
import OtpInput from "react-otp-input";
import useAxios from "../hooks/useAxios";

function OtpVerification() {
    const [state, setState] = useState(
        {
            otp:""
        }
    )

const handleChange = (otp) => setState({ otp });

const user = sessionStorage.getItem("user");
// const userDetails = JSON.parse(user)



const formData = new FormData();
// formData.append('to_mail', userDetails[0].email_address);
formData.append('to_mail', 'devisingh.lodhi@hagnosoft.com');

const [apiState, setapiState] = useState(1);
const { response, loading, error } = useAxios({
  method: 'post', url: '/send_otp',
  headers:{
    "Content-Type": "multipart/form-data",
    "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
  },
  body: formData,
  apiState: apiState
});


useEffect(() => {
  if (response !== null) {      
    if (response.access_token) {
      // sessionStorage.setItem("user", JSON.stringify(response.data));
      // setSuccessmessage("Successfully Logedin!! ");
      setTimeout(() => {
        // navigate("/otpverification");
      }, 3000);
    }
  }


  const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();      
      // setMessage(resMessage);
      console.log(resMessage);
      setTimeout(() => {
        // setMessage("");
      }, 5000);


}, [response, error]);




const formData2 = new FormData();
formData2.append('otp', state.otp);
formData2.append('email', "devisingh.lodhi@hagnosoft.com");
// formData2.append('otp', '123456');

const [apiState2, setapiState2] = useState(0);
const { response:response2, loading:loading2, error:error2 } = useAxios({
  method: 'post', url: '/verify_otp',
  headers:{
    "Content-Type": "multipart/form-data",
    "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
  },
  body: formData2,
  apiState: apiState2
});


useEffect(() => {
  console.log(response2);
  // if (response2 !== null) {      
  //   if (response2.access_token) {
  //     // sessionStorage.setItem("user", JSON.stringify(response.data));
  //     // setSuccessmessage("Successfully Logedin!! ");
  //     setTimeout(() => {
  //       // navigate("/otpverification");
  //     }, 3000);
  //   }
  // }


  const resMessage =
        (error2.response &&
          error2.response.data &&
          error2.response.data.message) ||
          error2.message ||
          error2.toString();      
      // setMessage(resMessage);
      console.log(resMessage);
      setTimeout(() => {
        // setMessage("");
      }, 5000);



}, [response2, error2]);


const handleResendOTP = ()=>{
  setapiState(apiState+1)
}

const handleVerifyOTP = (e)=>{
  e.preventDefault()
  setapiState2(apiState2+1)
  // console.log(formData2.get('otp'))
}


  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-between">
         
          <div className="col-md-5 p-0">
            <div className="login-card">
              <div>
                <div className="text-center">
                  <Header />
                </div>
                <div className="login-main">
                  <form className="theme-form">
                    <h4>OTP Verification</h4>
                    <p>Enter the OTP sent to your mail</p>

                    <div className="form-group">
                      <OtpInput
                        value={state.otp}
                        onChange={handleChange}
                        numInputs={6}
                        separator={<span style={{ width: "8px" }}></span>}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle={{
                          border: "1px solid transparent",
                          borderRadius: "8px",
                          width: "54px",
                          height: "54px",
                          fontSize: "12px",
                          color: "#000",
                          fontWeight: "400",
                          caretColor: "blue",
                        }}
                        focusStyle={{
                          border: "1px solid #CFD3DB",
                          outline: "none",
                        }}
                      />
                    </div>
                    <div className="mt-4 mb-4">
                      <span className="reset-password-link" >
                        If don't receive OTP?&nbsp;&nbsp;
                        <a className="btn-link text-danger" onClick={handleResendOTP}>
                          Resend
                        </a>
                      </span>
                    </div>
                    <div className="form-group mt-5 mb-0">
                      <button
                        className="btn btn-primary btn-block w-100"
                        type="submit"
                        onClick={handleVerifyOTP}
                      >
                        Done{" "}
                      </button>
                    </div>
                    <p className="mt-4 mb-0 text-center">
                      Already have an account?
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

export default OtpVerification;

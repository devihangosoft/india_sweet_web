import React, { useState } from "react";

import axios from "axios";

import "../../Login/Signin.scss";

function Addfieldform() {
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


             


              <div className="">
                        <h3 className="card-title">Add new field</h3>

                    </div>
                        <form id="newFieldForm">
                            <div className="form-group">
                                <label for="fieldSection">Field section</label>
                                <select className="form-control" name="fieldSection" id="fieldSection" disabled="">
                                    <option disabled="">Select section</option>
                                    <option selected="" value="leads">Orders</option>


                                </select>
                                <span className="formError" id="fieldSectionError"></span>
                            </div>
                            <div className="form-group">
                                <label for="fieldName">Field name</label>
                                <input type="text" name="fieldName" id="fieldName" className="form-control" placeholder="Enter field name" />
                                <span className="formError" id="fieldNameError"></span>
                            </div>

                            <div className="form-group">
                                <label for="fieldType">Field type</label>
                                <select className="form-control" name="fieldType" id="fieldType">
                                    <option selected="" disabled="">Select field type</option>
                                    <option value="text">Text (single-line)</option>
                                    <option value="text-name">Text (Name)</option>
                                    <option value="number">Number</option>
                                    <option value="tel">Phone</option>
                                    <option value="email">Email</option>
                                    <option value="date">Date</option>
                                    <option value="time">Time</option>
                                    <option value="datetime-local">Date-time</option>
                                    <option value="textarea">Text (multi-line)</option>
                                    <option value="dropdown">Dropdown</option>
                                    <option value="url">URL</option>

                                </select>
                                <span className="formError" id="fieldTypeError"></span>

                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="requiredField" />
                                <label className="form-check-label" for="requiredField">Required field</label>

                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="requireValidations" />
                                <label className="form-check-label" for="requireValidations">Add field validations</label>
                            </div>
                        </form>
                        <button className="btn btn-theme mt-4" id="createFieldBtn" onclick="createField()" style={{width:'100%'}}>Add</button>
                    </div>
               



                
          
            {/* </div> */}
            
          {/* </div>
        </div>
      </div> */}

    </>
  );
}

export default Addfieldform;

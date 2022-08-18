import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Orders from "./components/Dashboard/Orders/Orders";
import Products from "./components/Dashboard/Products/Products";
import Stores from "./components/Dashboard/Stores/Stores";
import Payments from "./components/Dashboard/Payments/Payments";

import Configuration from "./components/Configurations/Configuration";
import Signin from "./components/Login/Signin";
import Logout from "./components/Login/Logout";
import Register from "./components/Login/Register";
import ResetPassword from "./components/Login/ResetPassword";
import OtpVerification from "./components/Login/OtpVerification";

// import Adduser from "./components/UserConfig/Adduser";
import CreatePassword from "./components/Login/CreatePassword";
import MainContent from "./components/Dashboard/Dashboard";
import Modals from "./components/Elements/Modals";
import Loader from "./components/Elements/Loader/Loader";
import "./App.css";

import Users from "./components/Configurations/UserConfig/Users";
import Teams from "./components/Configurations/TeamsConfig/Teams";
import Fields from "./components/Configurations/FieldConfig/Fields";
import Dispositions from "./components/Configurations/DispositionsConfig/Dispositions";
import Emails from "./components/Configurations/EmailConfig/Emails";
import Sms from "./components/Configurations/SmsConfig/Sms";

import Layout from "./components/Layout/Layout";
import OrderForm from "./components/Dashboard/Orders/OrderForm";
import OrderDetails from "./components/Dashboard/Orders/OrderDetails"
import CustomizedSteppers from "./components/Dashboard/Orders/Stepper"
import Test from "./Test";
import StoresForm from "./components/Dashboard/Stores/StoresForm";
//import Cards from "./components/DataTables/Card";
// import Accordions from "./components/Elements/Accordions";
// import CustomTabs from "./components/Elements/CustomTabs";
// import LeftSide from "./components/Login/LeftSide";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  console.log(isLoggedIn);

  console.log("hiii hello ")

  return (
    <div className="App">
      <Modals />
      {/* <Loader /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otpverification" element={<OtpVerification />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/createPassword" element={<CreatePassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (<Layout name="Dashboard">
                <MainContent />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/steppers"
            element={
              isLoggedIn ? (<Layout name="Steppers">
                <CustomizedSteppers />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/orders"
            element={
              isLoggedIn ? (<Layout name="Orders">
                <Orders />
              </Layout>) : <Navigate to='/login' />
            }
          />

          <Route
            path="/orderform"
            element={
              isLoggedIn ? (<Layout name="Add Order">
                <OrderForm />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/orderdetails"
            element={
              isLoggedIn ? (<Layout name="Order Details">
                <OrderDetails />
              </Layout>) : <Navigate to='/login' />
            }
          />

          <Route
            path="/products"
            element={
              isLoggedIn ? (<Layout name="Products">
                <Products />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/stores"
            element={
              isLoggedIn ? (<Layout name="Stores">
                <Stores />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/payments"
            element={
              isLoggedIn ? (<Layout name="Payments">
                <Payments />
              </Layout>) : <Navigate to='/login' />
            }
          />

          <Route
            path="/configuration"
            element={
              isLoggedIn ? (<Layout name="Configuration">
                <Configuration />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/users"
            element={
              isLoggedIn ? (<Layout name="Users List">
                <Users />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/teams"
            element={
              isLoggedIn ? (<Layout name="Team">
                <Teams />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/fields"
            element={
              isLoggedIn ? (<Layout name="Fields">
                <Fields />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/dispositions"
            element={
              isLoggedIn ? (<Layout name="Dispositions">
                <Dispositions />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/emails"
            element={
              isLoggedIn ? (<Layout name="Emails">
                <Emails />
              </Layout>) : <Navigate to='/login' />
            }
          />

          <Route
            path="/sms"
            element={
              isLoggedIn ? (<Layout name="SMS">
                <Sms />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/Test"
            element={
              isLoggedIn ? (<Layout name="SMS">
                <Test />
              </Layout>) : <Navigate to='/login' />
            }
          />

          <Route
            path="/form"
            element={
              isLoggedIn ? (<Layout name="SMS">
                <StoresForm />
              </Layout>) : <Navigate to='/login' />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

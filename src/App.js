import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

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
import ChangePassword from "./components/Login/ChangePassword";
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
import Customers from "./components/Dashboard/Customers/Customers";
import UserTeamMapping from "./components/Configurations/UserTeamMapping";
import LeadLog from "./components/Dashboard/Orders/LeadLog";

//import Cards from "./components/DataTables/Card";
// import Accordions from "./components/Elements/Accordions";
// import CustomTabs from "./components/Elements/CustomTabs";
// import LeftSide from "./components/Login/LeftSide";

function App() {
  const { isLoggedIn } = useSelector((store) => store.userReducer);

  return (
    <div className="App">
      <Modals />
      {/* <Loader /> */}
      <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={
              isLoggedIn ? (<Layout name="Dashboard">
                <MainContent />
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otpverification" element={<OtpVerification />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route
            path="/ChangePassword"
            element={
              isLoggedIn ? (<Layout name="Change Password">
                <ChangePassword/>
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/userteammapping"
            element={
              isLoggedIn ? (<Layout name="User Team Mapping">
                <UserTeamMapping/>
              </Layout>) : <Navigate to='/login' />
            }
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (<Layout name="Dashboard">
                <MainContent />
              </Layout>) : <Navigate to='/login' />
            }
          />
           <Route
            path="/leadlog"
            element={
              isLoggedIn ? (<Layout name="Lead Log">
                <LeadLog/>
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
            path="/orders/:orderId"
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
            path="/customers"
            element={
              isLoggedIn ? (<Layout name="Customers List">
                <Customers/>
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

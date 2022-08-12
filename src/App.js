import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
              <Layout name="Dashboard">
                <MainContent/>
              </Layout>
            }
          />
               <Route
            path="/steppers"
            element={
              <Layout name="Steppers">
         <CustomizedSteppers/>
              </Layout>
            }
          />
          <Route
            path="/orders"
            element={
              <Layout name="Orders">
                <Orders />
              </Layout>
            }
          />

            <Route
            path="/orderform"
            element={
              <Layout name="Add Order">
               <OrderForm/>
              </Layout>
            }
          />
            <Route
            path="/orderdetails"
            element={
              <Layout name="Order Details">
               <OrderDetails/>
              </Layout>
            }
          />

            <Route
            path="/products"
            element={
              <Layout name="Products">
                <Products />
              </Layout>
            }
          />
            <Route
            path="/stores"
            element={
              <Layout name="Stores">
                <Stores />
              </Layout>
            }
          />
            <Route
            path="/payments"
            element={
              <Layout name="Payments">
                <Payments />
              </Layout>
            }
          />

          <Route
            path="/configuration"
            element={
              <Layout name="Configuration">
                <Configuration />
              </Layout>
            }
          />
          <Route
            path="/users"
            element={
              <Layout name="Users List">
                <Users />
              </Layout>
            }
          />
          <Route
            path="/teams"
            element={
              <Layout name ="Team">
                <Teams />
              </Layout>
            }
          />
          <Route
            path="/fields"
            element={
              <Layout name="Fields">
                <Fields />
              </Layout>
            }
          />
          <Route
            path="/dispositions"
            element={
              <Layout name="Dispositions">
                <Dispositions />
              </Layout>
            }
          />
          <Route
            path="/emails"
            element={
              <Layout name="Emails">
                <Emails />
              </Layout>
            }
          />

          <Route
            path="/sms"
            element={
              <Layout name="SMS">
                <Sms />
              </Layout>
            }
          />
          <Route
            path="/Test"
            element={
              <Layout name="SMS">
                <Test />
              </Layout>
            }
          />

<Route
            path="/form"
            element={
              <Layout name="SMS">
               <StoresForm/>
              </Layout>
            }
          />

        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

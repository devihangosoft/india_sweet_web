import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import * as Icon from "react-feather";
import LeftSideBar from "../Dashboard/LeftSidebar";
import TopBar from "../Dashboard/TopBar";
const Layout = (props) => {
  return (
    <>
      <TopBar />
      <div className="page-wrapper" id="pageWrapper">
        <div className="page-body-wrapper">
          <LeftSideBar />
          <div className="page-body">
            <div className="container-fluid">
              <div className="page-title">
                <div className="row">
                  <div className="col-6">
                    <h3>{props.name}</h3>
                  </div>
                  <div className="col-6">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <NavLink to="/dashboard">
                          <Icon.Home />
                        </NavLink>
                      </li>
                      <li className="breadcrumb-item active">
                        {props.name}
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
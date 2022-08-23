import React from "react";
import "./LeftSidebar.scss";
import "./sidebar.scss";
import "./header.scss";
import * as Icon from "react-feather";
import { Dropdown } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";

export default function TopBar() {
  let navigate = useNavigate();


  return (
    <>
      <div>
        <div className="page-header">
          <div className="header-wrapper row m-0">
            <nav className="main-header navbar navbar-expand navbar-white navbar-light text-sm">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" data-widget="pushmenu" to="/">
                    <i className="fas fa-bars"></i>
                  </NavLink>
                </li>
              </ul>

              <form className="form-inline ml-3">
                {/* <div className="form-group">
                  <select
                    name="currentuserTeam"
                    id="currentuserTeam"
                    className="form-control"
                    onChange="teamChange()"
                  ></select>
                </div> */}
                <div className="form-group ml-3">
                  <select
                    name="currentuserSubTeam"
                    id="currentuserSubTeam"
                    className="form-control"
                    onChange="subteamChange()"
                    style={{ display: "none" }}
                  ></select>
                </div>
              </form>

              {/* <!-- Right navbar links --> */}
              <ul className="navbar-nav ml-auto align-items-center float-right">
             
                {/* <Dropdown>
                  <Dropdown.Toggle variant="" id="" className=" bg-transparent">
                    <Icon.Bell width="18px" />
                    <span
                      className="badge rounded-pill badge-danger topbar-badge"
                      id="totalpaymentNotifications"
                    >
                      0
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      to="/"
                      className="dropdown-item dropdown-footer"
                      onClick="clearAllPaymentalerts();"
                    >
                      Clear All Notifications
                    </Dropdown.Item>
                    <div id="paymentalerts">
                      <Dropdown.Item to="/" className="dropdown-item">
                        <Icon.Clock />
                        <span id="paymentCount">0</span>
                        <span className="float-right text-muted text-sm"></span>
                      </Dropdown.Item>
                    </div>
                    <div className="dropdown-divider"></div>
                    <Dropdown.Item
                      to="/"
                      className="dropdown-item dropdown-footer"
                      onClick="seeAllPaymentalerts();"
                    >
                      See All Notifications
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}

                <Dropdown>
                  <Dropdown.Toggle
                    variant="username"
                    id="dropdown-basic"
                    className="bg-transparent px-0"
                  >
                    <img
                      src="./images/profile.png"
                      className="topbar-profile"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Dropdown.Item
                      className="dropdown-item"
                      data-toggle="dropdown"
                      to="/logout"
                    >
                      <Icon.User />
                      <span>User</span>
                    </Dropdown.Item>

                    <div className="dropdown-divider"></div>
                    <Dropdown.Item to="/" className="dropdown-item">
                      <Icon.Calendar />
                      <span className="text-muted" id="currentDateTime">
                        11:25 AM
                      </span>
                    </Dropdown.Item>
                    <div className="dropdown-divider"></div>
                    <Dropdown.Item to="/" className="dropdown-item">
                      <Icon.Clock />
                      <span id="hours">5 hours</span>
                    </Dropdown.Item>
                    <div className="dropdown-divider"></div> */}
                    <Dropdown.Item
                      onClick={()=>{navigate('/configuration')}} 
                      className="dropdown-item"
                    >
                      <Icon.Settings />

                      <span>Settings</span>
                    </Dropdown.Item>
                    <div className="dropdown-divider"></div>
                    <Dropdown.Item  
                      onClick={()=>{navigate('/logout')}}                    
                      className="dropdown-item dropdown-footer"
                    >
                      <Icon.LogOut />
                      <span> Logout</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

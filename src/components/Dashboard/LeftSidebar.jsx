import React from "react";
import { NavLink } from "react-router-dom";
import * as Icon from "react-feather";
import "./LeftSidebar.scss";
import "./sidebar.scss";

export default function LeftSideBar() {
  const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="sidebar-link">
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="sidebar-wrapper">
      <div className="logo-wrapper">
        <NavLink
          to="/dashboard"
          className="sidebar-link sidebar-title d-flex  align-items-center"
        >
            <p className="logo-name my-1">ISH</p>
        
          <span className="ml-3">
          <img src="./images/logo.png" alt=" Logo" />
          </span>
        </NavLink>
      </div>

      <ul
        className="sidebar-links custom-scrollbar"
        style={{ height: "100vh" }}
      >
        <li className="sidebar-list">
          <NavLink to="/dashboard" className="sidebar-link sidebar-title ">
            <Icon.Home />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="sidebar-list">
          <NavLink to="/products" className="sidebar-link sidebar-title ">
            <Icon.Grid />
            <span>Products</span>
          </NavLink>
        </li>
        <li className="sidebar-list">
          <NavLink to="/orders" className="sidebar-link sidebar-title ">
            <Icon.ShoppingBag />
            <span>Orders</span>
          </NavLink>
        </li>

        <li className="sidebar-list">
          <NavLink
            className="sidebar-link sidebar-title link-nav  "
            to="/stores"
          >
            <Icon.MapPin />
            <span>Stores</span>
          </NavLink>
        </li>

        <li className="sidebar-list">
          <NavLink
            className="sidebar-link sidebar-title link-nav  "
            to="/customers"
          >
            <Icon.Users />
            <span>Customers</span>
          </NavLink>
        </li>

        {/* <li className="sidebar-list">
          <NavLink
            className="sidebar-link sidebar-title link-nav  "
            to="/payments"
          >
            <Icon.DollarSign />
            <span>Payments</span>
          </NavLink>
        </li> */}

        <li className="sidebar-list">
          <NavLink
            className="sidebar-link sidebar-title link-nav  "
            to="/configuration"
          >
            <Icon.Settings />
            <span>Settings</span>
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
}

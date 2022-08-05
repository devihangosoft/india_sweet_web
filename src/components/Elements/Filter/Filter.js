import React from 'react'
import * as Icon from "react-feather";
import { Dropdown } from "react-bootstrap";
import CustomTabs from "../Tabs/CustomTabs";

export default function Filter() {
  return (
    <>
      <Dropdown className="float-right">
        <Dropdown.Toggle variant="" id="" className="bg-transparent">
          <Icon.Filter />
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ width: "20rem" }}>
          <Dropdown.Item
            style={{ padding: 0 }}
            to="/"
            className="dropdown-item dropdown-footer"
            onClick="seeAllPaymentalerts();"
          >
           <CustomTabs/>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
    </>
  );
}




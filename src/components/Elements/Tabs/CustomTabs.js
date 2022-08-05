import React from "react";
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Filterlist from "../../Elements/Filter/Filterlist";
import "./CustomTabs.css"

function CustomTabs() {
   return (
     <>
 <Tabs className="customTabs col-md-12 p-0">
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <Filterlist />
    </TabPanel>
    <TabPanel>
    <Filterlist />
    </TabPanel>
  </Tabs>
</>
)
}

export default CustomTabs
import React from "react";
import "./Configuration.css";
import * as Icons from "react-feather";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import Users from "./UserConfig/Users";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




function Configuration() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <>

      <div className="container-fluid">
        <div class="row">
          <div class="col-md-3 vol-lg-3 box-col-6 pe-0">
          
      <Tabs
       orientation="vertical"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className="customTabs"
      >
        <Tab icon={<AppRegistrationOutlinedIcon />} iconPosition="start" label="Field Configuration" />
        <Tab icon={<PersonOutlineIcon />} iconPosition="start" label="User Configuration" />
        <Tab icon={<PeopleOutlineIcon />} iconPosition="start" label="Team Configuration" />
        <Tab icon={<DiscountOutlinedIcon />} iconPosition="start" label="Disposition Configuration" />
        <Tab icon={<ProductionQuantityLimitsOutlinedIcon />} iconPosition="start" label="Products Configuration" />
        <Tab icon={<StoreOutlinedIcon />} iconPosition="start" label="Store Configuration" />
        <Tab icon={<AttachEmailOutlinedIcon />} iconPosition="start" label="Email Configuration" />
        <Tab icon={<SmsOutlinedIcon />} iconPosition="start" label="SMS Configuration" />
      </Tabs>
    
            
          </div>
          <div class="col-xl-9 col-md-12 box-col-12">
            <div class="card">
              <div class="card-body">
                


              <TabPanel value={value} index={0}>
  Item One
</TabPanel>
<TabPanel value={value} index={1}>
  <Users />
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel>
<TabPanel value={value} index={3}>
  Item four
</TabPanel>
<TabPanel value={value} index={4}>
  Item five
</TabPanel>
<TabPanel value={value} index={5}>
  Item six
</TabPanel>
<TabPanel value={value} index={6}>
  Item seven
</TabPanel>
<TabPanel value={value} index={7}>
  Item eight
</TabPanel>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Configuration;

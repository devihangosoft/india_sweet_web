import React from "react";
import "./Configuration.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
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
import Teams from "./TeamsConfig/Teams"
import Users from "./UserConfig/Users";
import Sms from "./SmsConfig/Sms";
import Emails from "./EmailConfig/Emails";
import Fields from "./FieldConfig/Fields";
import Dispositions from "./DispositionsConfig/Dispositions";
import Stores from "../Dashboard/Stores/Stores"
import Products from "../Dashboard/Products/Products"

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
        <Box sx={{ p: 0 }}>
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
        textColor='primary'
TabIndicatorProps={{
 style: {
   background: "#FAAF56"
 },
}}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className="customTabs"
      >
       <Tab icon={<PersonOutlineIcon />} iconPosition="start" label="User Configuration" />
       <Tab hidden icon={<AppRegistrationOutlinedIcon />} iconPosition="start" label="Field Configuration" />
        
        <Tab icon={<PeopleOutlineIcon />} iconPosition="start" label="Team Configuration" />
        <Tab icon={<DiscountOutlinedIcon />} iconPosition="start" label="Disposition Configuration" />
        <Tab icon={<ProductionQuantityLimitsOutlinedIcon />} iconPosition="start" label="Products Configuration" />
        <Tab icon={<StoreOutlinedIcon />} iconPosition="start" label="Store Configuration" />
        {/* <Tab icon={<AttachEmailOutlinedIcon />} iconPosition="start" label="Email Configuration" />
        <Tab icon={<SmsOutlinedIcon />} iconPosition="start" label="SMS Configuration" /> */}
      </Tabs>
    
            
          </div>
          <div class="col-xl-9 col-md-12 box-col-12">
            <div class="card">
              <div class="card-body">
                


         
<TabPanel value={value} index={0}>
  <Users />
</TabPanel>
<TabPanel value={value} index={1}>
  <Fields/>
</TabPanel>
<TabPanel value={value} index={2}>
 <Teams/>
</TabPanel>
<TabPanel value={value} index={3}>
<Dispositions/>
</TabPanel>
<TabPanel value={value} index={4}>
<Products/>
</TabPanel>
<TabPanel value={value} index={5}>
 <Stores/>
</TabPanel>
<TabPanel value={value} index={6}>
 <Emails/>
</TabPanel>
<TabPanel value={value} index={7}>
<Sms/>
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

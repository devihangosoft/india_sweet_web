import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useAxios from '../../hooks/useAxios';
import Neworder from './OrderStatus/Neworder';
import Dispatchorder from './OrderStatus/Dispatchorder';
import Production from './OrderStatus/Production';
import Details from './Details';
import Payment from './Payment';
import LeadLog from './LeadLog';

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

export default function MuiTabs(props) {
  const [value, setValue] = React.useState(0);


  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} p={0} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} p={0} >
        <Tabs className="customTabs" value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
 style: {
   background: "#FAAF56"
 },
}}>
          <Tab label=" Details" {...a11yProps(0)} />
          <Tab label="Call Center" {...a11yProps(1)} />
          <Tab label="Production Status" {...a11yProps(2)} />
          <Tab label="Packaging & Dispatch Status" {...a11yProps(3)} />
          <Tab label="Accounts" {...a11yProps(4)} />
          <Tab label="Timeline" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
   
 
    <Details leadid={props.leadid}/>
      </TabPanel>
      <TabPanel value={value} index={1} >
   
   <Neworder leadid={props.leadid}/>
     </TabPanel>
      <TabPanel value={value} index={2}>
        <Production leadid={props.leadid}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
    <Dispatchorder leadid={props.leadid} />
      </TabPanel>
      <TabPanel value={value} index={4}>
    <Payment leadid={props.leadid}/>
      </TabPanel>

      <TabPanel value={value} index={5}>
 <LeadLog/>
      </TabPanel>


    </Box>
  );
}

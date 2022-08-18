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

export default function MuiTabs() {
  const [value, setValue] = React.useState(0);


  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} p={0} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} p={0} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="New order" {...a11yProps(0)} />
          <Tab label="Production Status" {...a11yProps(1)} />
          <Tab label="Dispatch Status" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
    <Neworder />
      </TabPanel>
      <TabPanel value={value} index={1}>
    <Dispatchorder />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Production />
      </TabPanel>
    </Box>
  );
}

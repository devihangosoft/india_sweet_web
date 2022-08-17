import * as React from 'react';
import { useState, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import useAxios from "../../hooks/useAxios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

var names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function SelectMui() {
  const [personName, setPersonName] = React.useState([]);

  const [apiState1, setapiState1] = useState(1);
  const { response: response1, loading: loading1, error: error1 } = useAxios({
      method: "get",
      url: "/getproduct",
      apiState: apiState1,
  });

  useEffect(() => {
      if (response1 !== null) {
        //   console.log("products are : ",response1);
          names = response1.map((item, index) => {
            return item.product_name
        })
      }

      const resMessage =
          (error1.response && error1.response.data && error1.response.data.message) ||
          error1.message ||
          error1.toString();
      console.log(resMessage)
  }, [response1, error1]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: '100%',border:'none' }}>
        <InputLabel id="demo-multiple-checkbox-label">Select</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          //variant="filled"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Select" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name, index) => (
            <MenuItem key={index} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              {/* <Checkbox checked={personName.index > -1} /> */}
              <ListItemText primary={name} />
              
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

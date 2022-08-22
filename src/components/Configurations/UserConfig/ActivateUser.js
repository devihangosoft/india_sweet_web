import React , {useState, useEffect} from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function ActivateUser({rowData, callback}) {
    const [checked, setChecked] = useState(rowData.is_active==="true");    

    useEffect(() => {        
        setChecked(rowData.is_active==="true")
    }, [rowData.is_active]);

    const [apiState3, setapiState3] = useState(0);    
    const { response, loading, error } = useAxios({
        method: "post",
        url:  checked ? "/deactivateuser" : "/activateuser" ,
        body: JSON.stringify({
            user_id: rowData.u_id,
        }),
        apiState: apiState3,
    });

      
    useEffect(() => {
        if (response !== null) {
            console.log(response);
            setChecked(!checked)
            callback();            
            
            Swal.fire({
                confirmButtonColor:'orange',
                icon: 'success',
                title: 'Success',
                text: response.message,
              })
        }

        const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
           
        console.log(resMessage);

    }, [response, error]);


    const handleChange = ()=>{
        setapiState3(apiState3+1) 
        
        console.log(checked)
    }





  return (
    <div>      
      <Switch {...label} 
     
      checked={checked}
  onChange={handleChange}
      color="success" />            
    </div>
  );
}

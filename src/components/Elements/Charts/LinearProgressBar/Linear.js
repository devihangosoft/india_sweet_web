import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#FEAF00' : '#308fe8',
  },
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
    
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
   
        value={50}
      />
    </Box>
  );
}

export default function Liner() {
  return (
    <>
    
     <Box sx={{ display: 'flex', alignItems: 'center', marginBottom:"20px", alignItems:"flex-end" }}>
     <Box sx={{ width: '100%', mr: 1 }}>
        <Typography variant="body3" sx={{fontWeight:600,color: '#535353',marginBottom:'5px',display:"block"}}>Sweet 1</Typography>
     <BorderLinearProgress variant="determinate" value={50} />
     </Box>
     <Box sx={{ minWidth: 35 }}>
       <Typography variant="body2" color="text.secondary" sx={{lineHeight:"10px"}}>{`${Math.round(
        50,
       )}%`}</Typography>
     </Box>
   </Box>
   </>
  );
}

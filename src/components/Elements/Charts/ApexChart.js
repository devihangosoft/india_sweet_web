import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
//


// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    year: 'Week',
    data: [
      { name: 'Profit',  data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
      { name: 'Sales', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
      
    ],
  },
  {
    year: 'Month',
    data: [
      { name: 'Profit', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
      { name: 'Sales', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
    ],
  },
  {
    year: 'Year',
    data: [
      { name: 'Profit', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] },
      { name: 'Sales', data: [80, 55, 34, 114, 80, 130, 15, 28, 55] },
    ],
  },
];

export default function ApexChart() {
  const [seriesData, setSeriesData] = useState('Year');

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  const chartOptions = {
    colors: ['#FEAF00', '#a8a8a8'],
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center', 
    },

    fill: {
        colors: ['#FEAF00', '#a8a8a8']
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadius:5
        }
      },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val}`,
      },
    },
  };

  return (
    <Card>
      
      <CardHeader
        title={<h5 style={{fontWeight:500}}>Total Revenue Stats</h5>}
        subheader=""
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              '& fieldset': { border: '0 !important' },
              '& select': { pl: 1, py: 0.5, pr: '24px !important', typography: 'subtitle2' },
              '& .MuiOutlinedInput-root': { borderRadius: 0.75, bgcolor: 'background.neutral' },
              '& .MuiNativeSelect-icon': { top: 4, right: 0, width: 20, height: 20 },
            }}
          >
            {CHART_DATA.map((option) => (
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </TextField>
        }
      />

      {CHART_DATA.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && (
            <ReactApexChart type="bar" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
    </Card>
  );
}

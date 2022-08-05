import React from 'react'
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import StackedBarChart from './StackedBarChart';
function Chart() {
   return (
      <>
   <BarChart/>
    <DoughnutChart/> 
     <LineChart/>
     <PieChart/>
     <StackedBarChart/>
</>
  )
}

export default Chart
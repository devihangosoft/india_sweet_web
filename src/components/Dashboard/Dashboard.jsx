import React from "react";
import BarChart from "../Elements/Charts/BarChart";
import LineChart from "../Elements/Charts/LineChart";
import PieChart from "../Elements/Charts/PieChart";
import AreaChart from "../Elements/Charts/AreaChart";
import DoughnutChart from "../Elements/Charts/DoughnutChart";

const MainContent = () => {
  return (
    <>
<div className="row">
<div className="col-md-3">
  <div className="card">
    <div className="card-body">
   <PieChart/>
    </div>
  </div>
</div>
<div className="col-md-3">
  <div className="card">
    <div className="card-body">
   <DoughnutChart/>
    </div>
  </div>
</div>
<div className="col-md-6">
  <div className="card">
    <div className="card-body">
   <AreaChart/>
    </div>
  </div>
</div>
<div className="col-md-6">
  <div className="card">
    <div className="card-body">
   <BarChart/>
    </div>
  </div>
</div>
<div className="col-md-6">
  <div className="card">
    <div className="card-body">
   <LineChart/>
    </div>
  </div>
</div>
</div>
    </>
  );
};

export default MainContent;
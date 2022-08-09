import React from "react";
import BarChart from "../Elements/Charts/BarChart";
import LineChart from "../Elements/Charts/LineChart";
import PieChart from "../Elements/Charts/PieChart";
import AreaChart from "../Elements/Charts/AreaChart";
import DoughnutChart from "../Elements/Charts/DoughnutChart";

const MainContent = () => {
  return (
    <>
    <div class="row">
                                    <div class="col-md-6">
                                        <div class="card card-animate">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <p class="fw-medium text-muted mb-0">Users</p>
                                                        <h2 class="mt-4 ff-secondary fw-semibold"><span class="counter-value" data-target="28.05">28.05</span>k</h2>
                                                        <p class="mb-0 text-muted"><span class="badge bg-light text-success mb-0">
                                                                <i class="ri-arrow-up-line align-middle"></i> 16.24 %
                                                            </span> vs. previous month</p>
                                                    </div>
                                                    <div>
                                                        <div class="avatar-sm flex-shrink-0">
                                                            <span class="avatar-title bg-primary rounded-circle fs-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/*end card body */}
                                        </div> {/*end card*/}
                                    </div> {/*end col*/}

                                    <div class="col-md-6">
                                        <div class="card card-animate">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <p class="fw-medium text-muted mb-0">Sessions</p>
                                                        <h2 class="mt-4 ff-secondary fw-semibold"><span class="counter-value" data-target="97.66">97.66</span>k</h2>
                                                        <p class="mb-0 text-muted"><span class="badge bg-light text-danger mb-0">
                                                                <i class="ri-arrow-down-line align-middle"></i> 3.96 %
                                                            </span> vs. previous month</p>
                                                    </div>
                                                    <div>
                                                        <div class="avatar-sm flex-shrink-0">
                                                            <span class="avatar-title bg-danger rounded-circle fs-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/*end card body */}
                                        </div> {/*end card*/}
                                    </div> {/*end col*/}
                                </div>
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
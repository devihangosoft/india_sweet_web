import React from "react";
import * as Icons from 'react-feather';
import BarChart from "../Elements/Charts/BarChart";
import LineChart from "../Elements/Charts/LineChart";
import PieChart from "../Elements/Charts/PieChart";
import AreaChart from "../Elements/Charts/AreaChart";
import DoughnutChart from "../Elements/Charts/DoughnutChart";
import { Icon } from "@mui/material";
import ApexChart from '../Elements/Charts/ApexChart'
import LinearProgressBar from '../Elements/Charts/LinearProgressBar'
import Tables from "../DataTables/Tables";
import Orders from "./Orders/Orders";

const MainContent = () => {
  return (
    <>
      <div class="row mb-5">
        <div class="col-md-4">
          <div class="card card-box-shadow card-animate alert-warning">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="fw-medium text-muted mb-0">Customers</h6>
                  <h2 class="mt-2 ff-secondary fw-semibold"><span class="counter-value" data-target="28.05">28.05</span>k</h2>
                  {/* <p class="mb-0 text-muted"><span class="badge bg-light text-success mb-0">
                    <i class="ri-arrow-up-line align-middle"></i> 16.24 %
                  </span> vs. previous month</p>*/}
                </div> 
                <div>
                  <div class="avatar-sm flex-shrink-0">
                    <span class="avatar-title  rounded-circle fs-5">
                      <Icons.Users size={50}/>
                   </span>
                  </div>
                </div>
              </div>
            </div>{/*end card body */}
          </div> {/*end card*/}
        </div> {/*end col*/}
        <div class="col-md-4">
          <div class="card card-box-shadow card-animate alert-success">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="fw-medium text-muted mb-0">Sales</h6>
                  <h2 class="mt-2 ff-secondary fw-semibold"><span class="counter-value" data-target="97.66">97.66</span>k</h2>
                  {/* <p class="mb-0 text-muted"><span class="badge bg-light text-danger mb-0">
                    <i class="ri-arrow-down-line align-middle"></i> 3.96 %
                  </span> vs. previous month</p> */}
                </div>
                <div>
                  <div class="avatar-sm flex-shrink-0">
                    <span class="avatar-title rounded-circle fs-2">
                    <Icons.Activity size={50}/>
                   </span>
                  </div>
                </div>
              </div>
            </div>{/*end card body */}
          </div> {/*end card*/}
        </div>
        <div class="col-md-4">
          <div class="card card-box-shadow card-animate alert-info">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="fw-medium text-muted mb-0">Orders</h6>
                  <h2 class="mt-2 ff-secondary fw-semibold"><span class="counter-value" data-target="97.66">97.66</span>k</h2>
                  {/* <p class="mb-0 text-muted"><span class="badge bg-light text-danger mb-0">
                    <i class="ri-arrow-down-line align-middle"></i> 3.96 %
                  </span> vs. previous month</p> */}
                </div>
                <div>
                  <div class="avatar-sm flex-shrink-0">
                    <span class="avatar-title rounded-circle fs-2">
                    <Icons.ShoppingCart size={50}/></span>
                  </div>
                </div>
              </div>
            </div>{/*end card body */}
          </div> {/*end card*/}
        </div> {/*end col*/}
      </div>
      <div className="row mb-5">
        <div className="col-md-8">
              <ApexChart/>
        </div>
        <div className="col-md-4 card">
          <div className=" card-box-shadow">
            <div className="card-body">
              <LinearProgressBar/>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-12">
        <div className="card card-box-shadow">
            <div className="card-body">
            {/* <h5>Latest Orders</h5> */}
          <Orders/>
          </div>
          </div>
          </div>
          </div>
    </>
  );
};

export default MainContent;
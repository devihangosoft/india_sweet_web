import React from "react";
import "./Configuration.css";
import * as Icons from "react-feather";

function Configuration() {
  return (
    <>
      <div className="container-fluid">
        <div class="row">
          <div class="col-xl-3 box-col-6 pe-0">
            <div class="config-sidebar">
              <div class="card">
                <div class="card-body">
                  <ul>
                    <li>
                      <div class="btn btn-light">
                        <Icons.Users />
                        Team Management
                      </div>
                    </li>
                    <li>
                      <div class="btn btn-light">
                        <Icons.User />
                        User Management
                      </div>
                    </li>
                    <li>
                      <div class="btn btn-light">
                        <Icons.Trello />
                        Template
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-md-12 box-col-12">
            <div class="card">
              <div class="card-body">
                <ul>
                  <li>
                    <div class="btn btn-light">
                      <Icons.Users />
                      Team Management
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-light">
                      <Icons.User />
                      User Management
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-light">
                      <Icons.Trello />
                      Template
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Configuration;

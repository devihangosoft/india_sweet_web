import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Reports/Modal";
function OrderDetails() {
  return (
    <>

            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6"></div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <NavLink to="/leadlist">Home</NavLink>
                      </li>
                      <li className="breadcrumb-item active">
                        Customer Profile
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* <!-- /.container-fluid --> */}
            </section>

            {/* <!-- Main content --> */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3">
                    {/* <!-- Profile Image --> */}
                    <div className="card card-primary card-outline">
                      <div className="card-body box-profile">
                        <div className="text-center">
                          <img
                            className="profile-user-img img-fluid img-circle"
                            src="./images/user_icon.png"
                            alt="User profile"
                          />
                        </div>
                        {/* <h3
                          className="profile-username text-center"
                          id="customer-Name"
                        ></h3> */}

                        <p className="text-muted text-center">
                          <b>Last updated:</b>
                          <span
                            className="description"
                            id="tradeline_update"
                          ></span>
                        </p>
                        <p className="text-center">
                          <button
                            className="btn btn-sm btn-primary img-circle"
                            title="Call customer"
                            data-toggle="modal"
                            data-target="#dialer-modal"
                          >
                            <i className="fas fa  fa-phone fa-rotate-90"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-info img-circle"
                            title="Email customer"
                            data-toggle="modal"
                            data-target="#email-modal"
                          >
                            <i className="fas fa  fa-envelope"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-success img-circle"
                            title="Send text message"
                            data-toggle="modal"
                            data-target="#sms-modal"
                          >
                            <i className="fas fa  fa-comments"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-warning img-circle"
                            title="set call back"
                            data-toggle="modal"
                            data-target="#callback-modal"
                          >
                            <i className="fas fa  fa-calendar"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-success img-circle"
                            title="update tradeline info"
                          >
                            <i className="fas fa  fa-sync-alt"></i>
                          </button>
                        </p>
                        <ul className="list-group list-group-unbordered mb-3">
                          <li className="list-group-item">
                            <b>Phone No</b>
                            <NavLink
                              to="/"
                              className="float-right"
                              onClick="callOtherNumber($(this).text())"
                              id="customer-PhoneNo"
                            ></NavLink>
                          </li>
                          <li className="list-group-item">
                            <b>Email Address</b>
                            <NavLink
                              to="/"
                              className="float-right"
                              id="customer-Email"
                            ></NavLink>
                          </li>
                          <li className="list-group-item">
                            <b>Date of Birth (Age)</b>
                            <NavLink
                              to="/"
                              className="float-right"
                              id="customer-DOB"
                            ></NavLink>
                          </li>
                          <li className="list-group-item">
                            <b>Employment Type</b>
                            <NavLink
                              to="/"
                              className="float-right"
                              id="customer-EmploymentType"
                            ></NavLink>
                          </li>
                          <li className="list-group-item">
                            <b>Business Name</b>
                            <NavLink
                              to="/"
                              className="float-right"
                              id="customer-Company"
                            ></NavLink>
                          </li>
                          <li className="list-group-item">
                            <b>Industry Type</b>
                            <NavLink
                              to="/"
                              className="float-right"
                              id="customer-Industry"
                            ></NavLink>
                          </li>
                          <li className="list-group-item">
                            <b>City</b>
                            <NavLink
                              to="/"
                              className="float-right"
                              id="customer-City"
                            ></NavLink>
                          </li>
                          <li className="list-group-item">
                            <b>State</b>
                            <NavLink
                              to="/"
                              className="float-right"
                              id="customer-State"
                            ></NavLink>
                          </li>
                          <li className="list-group-item">
                            <label htmlFor="dispositionCode">
                              Disposition Code
                            </label>
                            <select
                              name="Disposition_Code"
                              id="dispositionCode"
                              className="form-control"
                              onChange="dispositionChange()"
                            ></select>
                          </li>
                          <li className="list-group-item">
                            <label htmlFor="subDispositionCode">
                              Sub-Disposition Code
                            </label>
                            <select
                              name="Sub-Disposition_Code"
                              id="subDispositionCode"
                              className="form-control"
                              // disabled="true"
                            >
                              <option value="">Select sub disposition</option>
                            </select>
                          </li>
                          <li className="list-group-item">
                            <label htmlFor="comments">Additional Text</label>
                            <textarea
                              type="text"
                              name="Comments"
                              id="comments"
                              className="form-control"
                              placeholder="Additional Text"
                            ></textarea>
                          </li>
                          <li className="list-group-item">
                            <label htmlFor="Promise_to_Pay_Date">
                              Promise to Pay Date
                            </label>
                            <input
                              type="date"
                              name="Promise_to_Pay_Date"
                              id="promiseToPayDate"
                              className="form-control"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer">
                        <div className="row">
                          <div className="col-12">
                            <div className="float-right">
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick="window.history.back();"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick="updateCustomerInfo()"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-md-9">
                    <div className="card">
                      <div className="card-header p-2">
                        <ul className="nav nav-pills">
                          <li className="nav-item">
                            <NavLink
                              className="nav-link active"
                              to="/basicinfo-tab"
                              data-toggle="tab"
                            >
                              Basic Info
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#additionalInfo-tab"
                              data-toggle="tab"
                            >
                              Additional Numbers
                            </a>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              className="nav-link"
                              to="/address-tab"
                              data-toggle="tab"
                            >
                              Addresses
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              className="nav-link"
                              to="/documents-tab"
                              data-toggle="tab"
                            >
                              Documents
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              className="nav-link"
                              to="/activity-tab"
                              data-toggle="tab"
                            >
                              Logs
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- /.card-header --> */}
                      <div className="card-body">
                        <div className="tab-content">
                          <div className="active tab-pane" id="basicinfo-tab">
                            {/* <!-- tradelineinfo --> */}
                            <div className="row">
                              <div className="col-sm-6">
                                <p>
                                  CvLan: <span id="cvLan"></span>
                                </p>
                              </div>
                              <div className="col-sm-6 ">
                                <p className="text-muted float-right">
                                  <b>Last updated:</b>
                                  <span
                                    className="description"
                                    id="tradeline_update"
                                  ></span>
                                  <span>
                                    &nbsp;&nbsp;
                                    <NavLink
                                      to="/"
                                      className=""
                                      onClick="updateTradeline()"
                                      title="Update tradeline info"
                                    >
                                      <i className="fas fa  fa-sync-alt text-primary"></i>
                                      Refresh
                                    </NavLink>
                                  </span>
                                </p>
                              </div>
                            </div>

                            {/* <!-- product details --> */}
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-6 col-md-3 col-lg-3">
                                        <p>
                                          <b>Product Type</b>
                                          <NavLink
                                            to="/"
                                            className="float-right"
                                            id="basic-producttype"
                                          ></NavLink>
                                        </p>
                                      </div>

                                      <div className="col-sm-6 col-md-4 col-lg-4">
                                        <p>
                                          <b>Account Status</b>
                                          <NavLink
                                            to="/"
                                            className="float-right"
                                            id="basic-accountstatus"
                                          ></NavLink>
                                        </p>
                                      </div>
                                      <div className="col-sm-6 col-md-5 col-lg-5">
                                        <p>
                                          <b>Loan Account Number</b>
                                          <NavLink
                                            to="/"
                                            className="float-right text-green"
                                            id="basic-lan"
                                          ></NavLink>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* <!-- Overdue details --> */}
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="card">
                                  <div className="card-header bg-gray">
                                    <h3 className="card-title">
                                      Overdue Details
                                    </h3>
                                    <span className="float-right">
                                      <b>Overdue status</b>
                                      <span id="overdue-Current_Status">-</span>
                                    </span>
                                  </div>
                                  <div className="card-body p-0">
                                    <div className="table-responsive">
                                      <table className="table table-borderless">
                                        <tr>
                                          <th className="text-left">
                                            <b>Total Overdue</b>
                                          </th>
                                          <td id="overdue-totaloverdue"></td>
                                          <th className="text-left">
                                            <b>EMI Overdue</b>
                                          </th>
                                          <td id="overdue-emioverdue"></td>
                                        </tr>
                                        <tr>
                                          <th className="text-left">
                                            <b>Bounce Overdue</b>
                                          </th>
                                          <td id="overdue-bounceoverdue"></td>
                                          <th className="text-left">
                                            <b>Penal Overdue</b>
                                          </th>
                                          <td id="overdue-penaloverdue"></td>
                                        </tr>
                                        <tr>
                                          <th className="text-left">
                                            <b>Opening Bucket</b>
                                          </th>
                                          <td id="overdue-openingbucket"></td>
                                          <th className="text-left">
                                            <b>Current Bucket</b>
                                          </th>
                                          <td id="overdue-currentbucket"></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* <!-- Product details --> */}
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="card">
                                  <div className="card-header bg-gray">
                                    <h3 className="card-title">
                                      Product Details
                                    </h3>
                                  </div>
                                  <div className="card-body p-0">
                                    <div className="table-responsive">
                                      <table className="table table-borderless">
                                        <tr>
                                          <th className="text-left">
                                            <b>Originated From</b>
                                          </th>
                                          <td id="product-distributorName"></td>
                                          <th className="text-left">
                                            <b>Lending Partner</b>
                                          </th>
                                          <td id="product-lenderName"></td>
                                        </tr>
                                        <tr>
                                          <th className="text-left">
                                            <b>Loan Amount</b>
                                          </th>
                                          <td id="product-loanamount"></td>
                                          <th className="text-left">
                                            <b>Loan Sanction Date</b>
                                          </th>
                                          <td id="product-loansanctiondate"></td>
                                        </tr>
                                        <tr>
                                          <th className="text-left">
                                            <b>Tenure</b>
                                          </th>
                                          <td id="product-tenure"></td>
                                          <th className="text-left">
                                            <b>EMI</b>
                                          </th>
                                          <td id="product-emiAmount"></td>
                                        </tr>
                                        <tr>
                                          <th className="text-left">
                                            <b>Rate of Interest</b>
                                          </th>
                                          <td id="product-roi"></td>
                                          <th className="text-left">
                                            <b>Repayment Date</b>
                                          </th>
                                          <td id="product-repaymentDate"></td>
                                        </tr>
                                        <tr>
                                          <th className="text-left">
                                            <b>NACH Account Number</b>
                                          </th>
                                          <td id="product-accNo"></td>
                                          <th className="text-left">
                                            <b>NACH Bank Name</b>
                                          </th>
                                          <td id="product-bankname"></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* <!-- previous payment details --> */}
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="card">
                                  <div className="card-header bg-gray">
                                    <h3 className="card-title">
                                      Previous Payment Details
                                    </h3>
                                  </div>
                                  <div className="card-body p-0">
                                    <div className="table-responsive">
                                      <table className="table table-borderless">
                                        <tr>
                                          <th className="text-left">
                                            <b>Total Outstanding Amount</b>
                                          </th>
                                          <td id="payment-principalOutstanding"></td>
                                          <th className="text-left">
                                            <b>Last Paid Date</b>
                                          </th>
                                          <td id="payment-lastPaymentDate"></td>
                                        </tr>
                                        <tr>
                                          <th className="text-left">
                                            <b>EMIs Paid</b>
                                          </th>
                                          <td id="payment-numberOfInstallmentsPaid"></td>
                                          <th className="text-left">
                                            <b>Last Paid Amount</b>
                                          </th>
                                          <td id="payment-lastPaidAmount"></td>
                                        </tr>
                                        <tr>
                                          <th className="text-left">
                                            <b>EMIs Due</b>
                                          </th>
                                          <td id="payment-emisdue"></td>
                                          <th className="text-left">
                                            <b>Paid From</b>
                                          </th>
                                          <td id="payment-lastpaidsource"></td>
                                        </tr>
                                      </table>
                                    </div>
                                    <div className="card-body table-responsive">
                                      <p>
                                        <b>Previous Payment History</b>
                                      </p>
                                      <table
                                        className="table table-striped table-bordered"
                                        id="paymentHistoryTable"
                                      ></table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="activity-tab">
                            <div className="row">
                              <div className="col-sm-12 col-md-6 col-lg-3">
                                <select
                                  name=""
                                  id="logDateFilter"
                                  className="form-control"
                                  onChange="logFilterChange()"
                                >
                                  <option value="">Filter By Date</option>
                                </select>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-3">
                                <select
                                  name=""
                                  id="logStatusFilter"
                                  className="form-control"
                                  onChange="logFilterChange()"
                                >
                                  <option value="">Filter By Status</option>
                                </select>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-3">
                                <select
                                  name=""
                                  id="logAgentFilter"
                                  className="form-control"
                                  onChange="logFilterChange()"
                                >
                                  <option value="">Filter By Agent</option>
                                </select>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-3">
                                <select
                                  name=""
                                  id="logChannelFilter"
                                  className="form-control"
                                  onChange="logFilterChange()"
                                >
                                  <option value="">Filter By Channel</option>
                                  <option value="Calling">Calling</option>
                                  <option value="Payment">Payment</option>
                                </select>
                              </div>
                            </div>
                            <br />
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="table-responsive">
                                  <table
                                    className="table table-bordered table-striped"
                                    id="logTable"
                                  ></table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="additionalInfo-tab">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="card-title text-muted">
                                      Last updated on :
                                      <span
                                        id="additionalInfo_update"
                                        className="description"
                                      ></span>
                                    </h3>
                                    <div className="card-tools">
                                      <button
                                        type="button"
                                        className="btn btn-tool text-primary"
                                        title="update contact info"
                                        data-toggle="modal"
                                        data-target="#"
                                      >
                                        <i className="fas fa  fa-sync-alt text-primary"></i>
                                        Refresh
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="card card-outline card-primary collapsed-card">
                                  <div className="card-header">
                                    <h3 className="card-title">
                                      Work / Bureau numbers
                                    </h3>

                                    <div className="card-tools">
                                      <button
                                        type="button"
                                        className="btn btn-tool"
                                        data-card-widget="collapse"
                                        data-toggle="tooltip"
                                        title="Collapse"
                                      >
                                        <i className="fas fa  fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-body table-responsive p-0">
                                    <table
                                      id="workTable"
                                      className="table table-hover"
                                    ></table>
                                  </div>
                                  {/* <!-- /.card-body --> */}
                                </div>
                                {/* <!-- /.card --> */}
                              </div>
                              <div className="col-md-6">
                                <div className="card card-outline card-secondary collapsed-card">
                                  <div className="card-header">
                                    <h3 className="card-title">
                                      Additional phone numbers
                                    </h3>

                                    <div className="card-tools">
                                      <button
                                        type="button"
                                        className="btn btn-tool text-primary"
                                        title="additonal phone"
                                        data-toggle="modal"
                                        data-target="#newphone-modal"
                                      >
                                        Add
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-tool"
                                        data-card-widget="collapse"
                                        data-toggle="tooltip"
                                        title="Collapse"
                                      >
                                        <i className="fas fa  fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-body table-responsive p-0">
                                    <table
                                      id="addPhnTable"
                                      className="table table-hover"
                                    ></table>
                                  </div>
                                  {/* <!-- /.card-body --> */}
                                </div>
                                {/* <!-- /.card --> */}
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <div className="card card-outline card-info collapsed-card">
                                  <div className="card-header">
                                    <h3 className="card-title">
                                      reference Info
                                    </h3>

                                    <div className="card-tools">
                                      {/* <!-- <button type="button" className="btn btn-tool" title="additonal email" data-toggle="modal" data-target="#newContact-modal"><i className="fas fa  fa-plus"></i></button> --> */}
                                      <button
                                        type="button"
                                        className="btn btn-tool"
                                        data-card-widget="collapse"
                                        data-toggle="tooltip"
                                        title="Collapse"
                                      >
                                        <i className="fas fa  fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <div className="table-responsive">
                                      <table
                                        id="referenceTable"
                                        className="table table-condensed table-hover"
                                      ></table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="address-tab">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="card-title text-muted">
                                      Last updated on :
                                      <span
                                        id="additionalInfo_address_update"
                                        className="description "
                                      ></span>
                                    </h3>
                                    <div className="card-tools">
                                      <button
                                        type="button"
                                        className="btn btn-tool text-primary"
                                        title="update contact info"
                                        data-toggle="modal"
                                        data-target="#"
                                      >
                                        <i className="fas fa  fa-sync-alt text-primary"></i>
                                        Refresh
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="card-title">
                                      Additional addresses
                                    </h3>

                                    <div className="card-tools">
                                      <button
                                        type="button"
                                        className="btn btn-tool"
                                        data-card-widget="collapse"
                                        data-toggle="tooltip"
                                        title="Collapse"
                                      >
                                        <i className="fas fa  fa-minus"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <div
                                      className="row"
                                      id="additionalAddressContainer"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="activity-tab">
                            <div className="row">
                              <div className="col-sm-12 col-md-6 col-lg-3">
                                <select
                                  name=""
                                  id="logDateFilter"
                                  className="form-control"
                                  onChange="logFilterChange()"
                                >
                                  <option value="">Filter By Date</option>
                                </select>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-3">
                                <select
                                  name=""
                                  id="logStatusFilter"
                                  className="form-control"
                                  onChange="logFilterChange()"
                                >
                                  <option value="">Filter By Status</option>
                                </select>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-3">
                                <select
                                  name=""
                                  id="logAgentFilter"
                                  className="form-control"
                                  onChange="logFilterChange()"
                                >
                                  <option value="">Filter By Agent</option>
                                </select>
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-3">
                                <select
                                  name=""
                                  id="logChannelFilter"
                                  className="form-control"
                                  onChange="logFilterChange()"
                                >
                                  <option value="">Filter By Channel</option>
                                  <option value="Calling">Calling</option>
                                  <option value="Payment">Payment</option>
                                </select>
                              </div>
                            </div>
                            <br />
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="table-responsive">
                                  <table
                                    className="table table-bordered table-striped"
                                    id="logTable"
                                  ></table>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Document tab --> */}
                          <div className="tab-pane" id="documents-tab">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="card">
                                  <div className="card-header">
                                    <h3 className="card-title text-muted">
                                      Last updated on :
                                      <span
                                        id="additionalInfo_update_documents"
                                        className="description"
                                      ></span>
                                    </h3>
                                    <div className="card-tools">
                                      <button
                                        type="button"
                                        className="btn btn-tool text-primary"
                                        title="update contact info"
                                        data-toggle="modal"
                                        data-target="#"
                                      >
                                        <i className="fas fa  fa-sync-alt text-primary"></i>
                                        Refresh
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="table-responsive">
                                      <table
                                        id="docTable"
                                        className="table table-striped"
                                      >
                                        <tr>
                                          <th>Document Name</th>
                                          <th>As of Date</th>
                                          <th>Preview</th>
                                        </tr>
                                        <tr>
                                          <td>Pan card</td>
                                          <td className="asofdate"></td>
                                          <td>
                                            <NavLink
                                              to="/"
                                              onClick="openDoc('Pan_card_01.jpeg')"
                                            >
                                              Click here
                                            </NavLink>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Aadhar card</td>
                                          <td className="asofdate"></td>
                                          <td>
                                            <NavLink
                                              to="/"
                                              onClick="openDoc('aadhar-card2.jpg')"
                                            >
                                              Click here
                                            </NavLink>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Bank Statement</td>
                                          <td className="asofdate"></td>
                                          <td>
                                            <NavLink
                                              to="/"
                                              onClick="openDoc('sample.pdf')"
                                            >
                                              Click here
                                            </NavLink>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

<Modal/>

    </>
  );
}

export default OrderDetails;

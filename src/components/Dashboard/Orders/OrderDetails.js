import React, { useState } from "react";
import "react-step-progress/dist/index.css";
import CustomizedSteppers from "./Stepper";
import * as Icon from "react-feather";

function OderDetails() {
  const step1Content = <h1>fgfgghgjh</h1>;
  const step2Content = <h1>dgfdg</h1>;
  const step3Content = <h1>dgdfgfdgdfg</h1>;
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <>
      <div className="page-content">
        <div className="cart">



{/* <CustomizedSteppers /> */}

          {/* <!-- Main content --> */}
          <div className="row">
            <div className="col-md-12 py-3">
              <h2 className="h5 mb-0"><a href="#" className="text-muted"></a> Order #16123222</h2>
            </div>
            <div className="col-lg-5">
              {/* <!-- Details --> */}
              <div className="card mb-4">
                <div className="card-body">
                  <div className="mb-3 d-flex justify-content-between">
                    <div>
                      <span className="me-3">22-11-2021</span>
                    </div>
                    <div>
                      <span className="badge rounded-pill bg-info text-white ">SHIPPING</span>
                    </div>
                  </div>
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex mb-2">

                            <div className="flex-lg-grow-1 ms-3">
                              <h6 className="small mb-0">Product Name</h6>
                              <span className="small">Qunatity : 5</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">₹79.99</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex mb-2">

                            <div className="flex-lg-grow-1 ms-3">
                              <h6 className="small mb-0">Product Name</h6>
                              <span className="small">Qunatity : 5</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">₹79.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td >Subtotal</td>
                        <td className="text-right">₹159,98</td>
                      </tr>

                      <tr className="fw-bold">
                        <td>TOTAL</td>
                        <td className="text-right">₹169,98</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              {/* <!-- Payment --> */}
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="h6">Payment Method</h3>
                      <p>Visa -1234 <br />
                        Total: ₹169,98 <span className="badge bg-success rounded-pill text-white">PAID</span></p>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="h6">Billing address</h3>
                      <address>
                        <strong>Dev Anand</strong><br />
                        312 Vijay nagar, Banglore<br />
                        Karntaka, India<br />

                        <abbr title="Phone"> <Icon.Phone size={15} /></abbr> +91 XXXXX XXXXX
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <!-- Customer Notes --> */}
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="h6">Customer Notes</h3>
                  <p>
                    This is dummy Text for comments
                  </p>
                </div>
              </div>
              <div className="card mb-4">
                {/* <!-- Shipping information --> */}
                <div className="card-body">
                  <h3 className="h6">Shipping Information</h3>
                  {/* <strong>FedEx</strong>
          <span><a href="#" className="text-decoration-underline" target="_blank">FF1234567890</a> <i className="bi bi-box-arrow-up-right"></i> </span> */}
                  <hr />
                  {/* <h3 className="h6">Address</h3> */}
                  <address>
                    <strong>Dev Anand</strong><br />
                    312 Vijay nagar, Banglore<br />
                    Karntaka, India<br />
                    <abbr title="Phone"> <Icon.Phone size={15} /></abbr> +91 XXXXX XXXXX
                  </address>
                  <h3 className="h6">Delivery Date : <span>10/12/2022</span></h3>
                  <h3 className="h6">Delivery Time : <span>12:24 PM</span></h3>

                </div>
              </div>
            </div>

            <aside className="col-lg-4">

              <div className="card">
                <div className="card-body">
                  <table className="table ">
                    <tbody>

                      <tr className="summary-shipping">
                        <td>Customer name:</td>
                        <td>user</td>
                      </tr>
                      <tr className="summary-shipping">
                        <td> Phone:</td>
                        <td>
                          +91 XXXXX
                        </td>
                      </tr>
                      <tr className="summary-shipping">
                        <td>Customer name:</td>
                        <td>user</td>
                      </tr>
                      <tr className="summary-shipping">
                        <td>Email </td>
                        <td>abc@xyz</td>
                      </tr>
                      <tr className="summary-shipping">
                        <td>Whatsapp:</td>
                        <td>+91 XXXXX</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default OderDetails;

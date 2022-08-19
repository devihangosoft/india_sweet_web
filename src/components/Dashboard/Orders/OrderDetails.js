import React, { useState, useEffect } from "react";
import "react-step-progress/dist/index.css";
import * as Icon from "react-feather";
import MuiTabs from "./MuiTabs";
import { NavLink } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom"

function OderDetails() {
  const { orderId } = useParams()
  var thisOrder = null;

  const [apiState, setapiState] = useState(1);
  const { response, loading, error } = useAxios({
    method: "get",
    url: "/getlead",
    apiState: apiState,
  });

  useEffect(() => {
    if (response !== null) {
      //console.log(response);      
      thisOrder = response.find(response => response.lead_id === parseInt(orderId))
      //console.log("This Order : ",thisOrder);
    }
    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString(); console.log(resMessage) }, [response, error]);

  return (
    <>
      <div className="page-content">
        <div className="cart">
          <div className="row">
            <div className="col-md-12 py-3">
              <h2 className="h5 mb-0"><a href="#" className="text-muted"></a> Order #16123222</h2>
            </div>
            <div className="col-md-12">
              <MuiTabs />
            </div>

            <div className="col-lg-5">
              {/* <!-- Details --> */}
              <div className="card border-0 card-box-shadow mb-4">
                <div className="card-body ">
                  <table className="table table-borderless">
                    <tbody>
                    <tr>
                        <td>
                        <strong className="me-3">22-11-2021</strong>
                        </td>
                        <td className="text-right"> <span className="badge rounded-pill bg-info text-white ">SHIPPING</span></td>
                      </tr>
                      <tr>
                        <td>
                          
                              <h6 className="mb-0">Product Name</h6>
                              <p>Quantity : 5</p>
                           
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
            </div>

            <div className="col-lg-4">
              <div className="card border-0 card-box-shadow">
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
            </div>

            <div className="col-lg-3">
              <div className="card border-0 card-box-shadow mb-4">
                <div className="card-body">
                  <h3 className="h6">Shipping Information</h3>
                  <span><i className="bi bi-box-arrow-up-right"></i> </span>
                  <hr />
                  <address>
                    <strong>Dev Anand</strong><br />
                    312 Vijay nagar, Banglore<br />
                    Karntaka, India<br />
                    {/* <abbr title="Phone"> <Icon.Phone size={15} /></abbr> +91 XXXXX XXXXX */}
                  </address>
                  <h3 className="h6">Delivery Date : <span>10/12/2022</span></h3>
                  <h3 className="h6">Delivery Time : <span>12:24 PM</span></h3>
                  <br />
                  <h3 className="h6">Payment Information</h3>
                  <hr />
                  <p>
                    Total: ₹169,98 <span className="badge bg-success rounded-pill text-white">PAID</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OderDetails;

import React, { useState } from "react";
import StepProgressBar from "react-step-progress";
import Accordion from "react-bootstrap/Accordion";
import "react-step-progress/dist/index.css";
import * as Icon from "react-feather"

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
          <div className="container">
            <div className="row">
            <aside className="col-lg-4">
                <div className="summary summary-cart">
                  <table className="table table-summary">
                    <tbody>
                      <tr className="summary-subtotal">
                        <td>Order id:</td>
                        <td>100</td>
                      </tr>{/*<!-- End .summary-subtotal --> */}
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

                      {/* <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input type="radio" id="free-shipping" name="shipping" className="custom-control-input" />
                            <label className="custom-control-label" for="free-shipping">Free Shipping</label>
                          </div>
                        </td>
                        <td>$0.00</td>
                      </tr> */}

                      <tr className="summary-shipping-estimate">
                        <td>Delivery Address</td>
                        <td>Blore</td>
                      </tr>{/*<!-- End .summary-shipping-estimate --> */}

                      <tr className="summary-total">
                        <td>Total:</td>
                        <td>$160.00</td>
                      </tr>{/*<!-- End .summary-total --> */}
                    </tbody>
                  </table>{/*<!-- End .table table-summary --> */}

                  {/* <a href="checkout.html" className="btn btn-theme btn-order btn-block">PROCEED </a> */}
                </div>{/*<!-- End .summary --> */}

              </aside>{/*<!-- End .col-lg-3 --> */}
              <div className="col-lg-8">
              
                <table className="table table-cart table-mobile">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="product-col">
                        <div className="product">
                          {/* <figure className="product-media">
                            <a href="#">
                              <img src="assets/images/products/table/product-1.jpg" alt="Product image" />
                            </a>
                          </figure> */}

                          <h6 className="product-title">
                            Product 1
                          </h6>
                        </div>
                      </td>
                      <td className="price-col">$84.00</td>
                      <td className="quantity-col">
                        <div className="cart-product-quantity">
                          <input type="number" className="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required="" />
                          <div className="input-group  input-spinner">
                            <div className="input-group-prepend">
                              <button className="btn btn-decrement btn-spinner" type="button">
                               <Icon.Minus/>
                               </button></div>
                            <input type="text" className="form-control " required="" placeholder="" />
                            <div className="input-group-append"><button className="btn btn-increment btn-spinner" type="button">
                              <Icon.Plus/>
                              </button></div></div>
                        </div>
                      </td>
                      <td className="total-col">$84.00</td>
                      <td className="remove-col"><button className="btn-remove">
                        <Icon.X/>
                        </button></td>
                    </tr>

                    <tr>
                      <td className="product-col">
                        <div className="product">
                          {/* <figure className="product-media">
                            <a href="#">
                              <img src="assets/images/products/table/product-1.jpg" alt="Product image" />
                            </a>
                          </figure> */}

                          <h6 className="product-title">
                            Product 1
                          </h6>
                        </div>
                      </td>
                      <td className="price-col">$84.00</td>
                      <td className="quantity-col">
                        <div className="cart-product-quantity">
                          {/* <input type="number" className="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required="" />
                          <div className="input-group  input-spinner">
                            <div className="input-group-prepend">
                              <button className="btn btn-decrement btn-spinner" type="button">
                               <Icon.Minus/>
                               </button></div>
                            <input type="text" className="form-control " required="" placeholder="" />
                            <div className="input-group-append"><button className="btn btn-increment btn-spinner" type="button">
                              <Icon.Plus/>
                              </button></div></div> */}
                        </div>
                      </td>
                      <td className="total-col">$84.00</td>
                      <td className="remove-col"><button className="btn-remove">
                        <Icon.X/>
                        </button></td>
                    </tr>
                    
                  </tbody>
                </table>{/*<!-- End .table table-wishlist --> */}

                <div className="cart-bottom">
                  <a href="#" className="btn btn-outline-dark-2"><span>UPDATE CART</span>
                  <Icon.RefreshCcw/></a>
                </div>{/*<!-- End .cart-bottom --> */}
              </div>{/*<!-- End .col-lg-9 --> */}

            </div>{/*<!-- End .row --> */}
          </div>{/*<!-- End .container --> */}
        </div>{/*<!-- End .cart --> */}
      </div>
      <div classNameName="row align-items-center justify-content-between">
        <div classNameName="col-md-12">
          <StepProgressBar
            startingStep={0}
            // previousBtnName="Prev"
            steps={[
              {
                label: "Briefing",
                name: "Briefing",
                content: step1Content
              },
              {
                label: "Image-Acquisition",
                name: "Image-Acquisition",
                content: step2Content
              },
              {
                label: "Image-processing",
                name: "Image Processing",
                content: step3Content
                // validator: step2Validator
              },
              {
                label: "Finish",
                name: "Finish",
                content: step3Content
              }
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default OderDetails;

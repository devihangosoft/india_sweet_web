import React, { useState, useEffect } from "react";
import "react-step-progress/dist/index.css";
import MuiTabs from "./MuiTabs";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom"

function Details(props) {
 const [post, setPost] = useState([])
 const userData = JSON.parse(localStorage.getItem("user"));
 const { orderId } = useParams()
 var thisOrder = null;
 const [apiState, setapiState] = useState(1);
 const { response, loading, error } = useAxios({
  method: "post",
  url: "/getlead",
  body: JSON.stringify({
   user_id: `${userData.data.data[0].user_id}`,
  }),
  apiState: apiState,
 });

 useEffect(() => {
  if (response !== null) {
   // console.log(response);
   const thisOrder = response.find(response => response.lead_id === parseInt(orderId))
   console.log("This Order : ", thisOrder);
   setPost(thisOrder)
   // setSuccessmessage(response.message);
  }

  const resMessage =
   (error.response && error.response.data && error.response.data.message) ||
   error.message ||
   error.toString();
  // setMessage(resMessage);
  console.log(resMessage)
  setTimeout(() => {
   // setMessage("");
  }, 5000);
 }, [response, error]);

 const productsrow = [
  {
   product_name: "peda1",
   product_price: 100,
   quantity: 10
  },
  {
   product_name: "gajar ka halwa",
   product_price: 500,
   quantity: 10
  },
  {
   product_name: "kaju katli",
   product_price: 1000,
   quantity: 10
  }
 ]
 const total = (productsrow.reduce((a, v) => a = a + v.product_price, 0))

 return (
  <>


     <div className="row mt-3">
      <div className="col-lg-5">
       {/* <!-- Details --> */}
       <div className=" border-0 mb-4">
        <div className=" ">
         <table className="table table-bordernone">
          <tbody>
           <tr>
            <td>
             <p className="me-3">Quotation No: {post.quotation_no}</p>
            </td>
            <td className="text-right"> <span className="badge rounded-pill bg-info text-white ">
             {post.disposition}
            </span></td>
           </tr>
           {
            productsrow.map((item, index) => {
             return (
              <tr>
               <td>
                <h6 className="mb-0">{item.product_name}</h6>
                <p>Quantity : {item.quantity}</p>
               </td>
               <td className="text-right"><p>₹ {item.product_price}</p></td>
              </tr>)
            })
           }
           {/* <tr>
                        <td ><h6>Subtotal
                        </h6></td>
                        <td className="text-right">₹159,98</td>
                      </tr> */}
           <tr className="fw-bold">
            <td><h6>TOTAL</h6></td>
            <td className="text-right"><p>₹{total}</p></td>
           </tr>
          </tbody>
         </table>
        </div>
       </div>
      </div>

      <div className="col-lg-4 mb-4">
       <div className="card border-0 card-box-shadow">
        <div className="card-body">
         <table className="table ">
          <tbody>
           <tr className="summary-shipping">
            <td><h6>Customer name:</h6></td>
            <td><p>{post.customer_name}</p></td>
           </tr>
           <tr className="summary-shipping">
            <td><h6>Phone:</h6> </td>
            <td>
             {post.customer_phone}
            </td>
           </tr>
           <tr className="summary-shipping">
            <td><h6>Customer Email:</h6></td>
            <td><p>{post.customer_email}</p></td>
           </tr>
           <tr className="summary-shipping">
            <td><h6>Whatsapp:</h6></td>
            <td><p>{post.customer_phone}</p></td>
           </tr>
           <tr className="summary-shipping">
            <td><h6>Reference Name:</h6></td>
            <td><p>{post.reference_name}</p></td>
           </tr>
           <tr className="summary-shipping">
            <td><h6>Reference Contact:</h6></td>
            <td><p>{post.reference_contact}</p></td>
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
          <strong>{post.customer_name}</strong><br />
          {post.dilivery_address}
          {/* <abbr title="Phone"> <Icon.Phone size={15} /></abbr> +91 XXXXX XXXXX */}
         </address>
         <br />
         <h3 className="h6">Delivery Date : <span>{post.dilivery_date}</span></h3>
         <h3 className="h6">Delivery Time : <span>{post.dilivery_time}</span></h3>
         <p className="mt-4 m-0">
          Payment :  <span className="badge bg-success rounded-pill text-white">PAID</span>
         </p>
        </div>
       </div>
      </div>
     </div>
 
  </>
 );
}

export default Details;

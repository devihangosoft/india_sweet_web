import React, { useState, useEffect, useRef } from 'react'
import useAxios from '../../../hooks/useAxios';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function DispatchOrder(props) {
 const SignupSchema = Yup.object().shape({
  dispostion: Yup.string()
   .trim()
   .required("Order status is required")
 });

 const initialValues = {
  user_id: "",
  dispostion: "",
  lead_id: `${props.leadid}`,
  order_status: "",
  dispatch_status: "",
  production_status: "",
  remarks: ""
 };

 const ref = useRef([]);
 const [message, setMessage] = useState("");
 const [successmessage, setSuccessmessage] = useState("");
 const userData = JSON.parse(localStorage.getItem("user"));
 const [apiState, setapiState] = useState(0);
 const { response, loading, error } = useAxios({
  method: "post",
  url: "/processlead",
  body: JSON.stringify({
   lead_id: `${props.leadid}`,
   user_id: `${userData.data.data[0].user_id}`,
   dispostion: ref.current.values.dispostion,
   order_status: ref.current.values.order_status,
   dispatch_status: ref.current.values.dispostion,
   production_status: ref.current.values.production_status,
   remarks: ref.current.values.remarks
  }),
  apiState: apiState,
 });

 useEffect(() => {
  if (response !== null) {
   console.log(response);
   setSuccessmessage(response.message);
   setTimeout(() => {
    setSuccessmessage("");
   }, 5000);
  }

  const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
  setMessage(resMessage);
  setTimeout(() => {
   setMessage("");
  }, 5000);
 }, [response, error]);

 const handleForm = (e) => {
  console.log('click');
  // e.preventDefault();
  setapiState(apiState + 1);
 };

 const [apiState1, setapiState1] = useState(1);
 const { response: response1, loading: loading1, error: error1 } = useAxios({
  method: "post",
  url: "/getdisposition",
  apiState: apiState1,
 });

 useEffect(() => {
  if (response1 !== null) {
   //console.log("disposition data : ", response);
  }

  const resMessage =
   (error1.response && error1.response.data && error1.response.data.message) || error1.message || error1.toString(); console.log(resMessage)
 }, [response1, error1]);



 return (
  <>
   <div className="form-group mt-3 ">
    <div className="cart">
     {message && (
      <div className="form-group mb-0">
       <div className="form-group">
        <div className="alert alert-danger" role="alert">
         {message}
        </div>
       </div>
      </div>
     )}
     {successmessage && (
      <div className="form-group mb-0">
       <div className="form-group">
        <div className="alert alert-success" role="alert">
         {successmessage}
        </div>
       </div>
      </div>
     )}

     <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleForm}
      innerRef={ref}
     >
      {({ errors, touched }) => (
       <Form className="theme-form">
        <div className="table-responsive card-box-shadow">
         <table className="table mb-0">
          <thead className="thead-light">
           <tr>
            <th scope="col">Product</th>
            <th scope="col">Comments</th>
            <th scope="col">Action</th>
            {/* <th scope="col">Total</th> */}
            {/* <th scope="col">Action</th> */}
           </tr>
          </thead>
          <tbody>
           <tr>
            <td>
             <Field as="select"
              required
              name="dispostion"
              className="form-control"
             >
             <option value="" selected disabled hidden>--select--</option>
              {
               response1 != null ?
                response1.map((item, index) => {
                 return <option value={item.disposition_name} key={index}>{item.disposition_name}</option>
                })
                : console.log("No Branch data found")
              }
             </Field>
             <ErrorMessage
              name="disposition"
              component="div"
              className="text-danger"
             />
            </td>
            <td>
             <div className="counter">
              <Field
               className="form-control"
               type="text"
               name="remarks"
               placeholder="enter your remarks"
              />
              <ErrorMessage
               name="remarks"
               component="div"
               className="text-danger"
              />
             </div>
            </td>
            <td>
             <div>
              <button type="submit" className="btn btn-theme">UPDATE</button>
             </div>
            </td>
           </tr>
          </tbody>
         </table>
        </div>
       </Form>
      )}
     </Formik>
    </div>
   </div>
  </>
 )
}
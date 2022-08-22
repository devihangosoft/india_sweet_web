import React, { useState, useEffect, useRef } from 'react'
import useAxios from '../hooks/useAxios';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function UserTeamMapping(props) {

 const SignupSchema = Yup.object().shape({
  team_name: Yup.string()
   .trim()
   .required("Team is required"),
   user_name: Yup.string()
   .trim()
   .required("User is required")
 });

 const initialValues = {
  user_id: "",
  team_id: "",
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
   team_id: ref.current.values.team_id,
   user_id: `${userData.data.data[0].user_id}`,
  }),
  apiState: apiState,
 });

console.log(JSON.stringify({
 lead_id: `${props.leadid}`,
 user_id: `${userData.data.data[0].user_id}`,
    team: ref.current.values.team,
    order_status: ref.current.values.team,
    dispatch_status: ref.current.values.dispatch_status,
    production_status: ref.current.values.production_status,
    remarks: ref.current.values.remarks
   }));
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
  method: "get",
  url: "/getteams",
  apiState: apiState1,
 });

 useEffect(() => {
  if (response1 !== null) {
   //console.log("disposition data : ", response);
  }

  const resMessage =
   (error1.response && error1.response.data && error1.response.data.message) || error1.message || error1.toString(); console.log(resMessage)
 }, [response1, error1]);

 const [apiState2, setapiState2] = useState(1);
 const { response: response2, loading: loading2, error: error2 } = useAxios({
  method: "get",
  url: "/getuserlist",
  apiState: apiState1,
 });

 useEffect(() => {
  if (response2 !== null) {
  // console.log("User data : ", response2);
  }

  const resMessage =
   (error2.response && error2.response.data && error2.response.data.message) || error2.message || error2.toString(); console.log(resMessage)
 }, [response2, error2]);

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
          {/* <thead className="thead-light">
           <tr>
            <th scope="col">Product</th>
            <th scope="col">Comments</th>
            <th scope="col">Action</th>
           </tr>
          </thead> */}
          <tbody>
           <tr>
            <td>
             <Field as="select"
              required
              name="team"
              className="form-control"
             >
              {
               response1 != null ?
                response1.map((item, index) => {
                 return <option value={item.team_id} key={index}>{item.team_name}</option>
                })
                : console.log("No Team data found")
              }
             </Field>
             <ErrorMessage
              name="team"
              component="div"
              className="text-danger"
             />
            </td>
            <td>
             <Field as="select"
              required
              name="user"
              className="form-control"
             >
              {
               response2 != null ?
                response2.map((item, index) => {
                 return <option value={item.user_id} key={index}>{item.first_name}</option>
                })
                : console.log("No Branch data found")
              }
             </Field>
             <ErrorMessage
              name="user"
              component="div"
              className="text-danger"
             />
            </td>
            <td>
             <div>
              <button type="submit" className="btn btn-theme" onClick={handleForm}>UPDATE</button>
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
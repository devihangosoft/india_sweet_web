import React, { useState, useEffect, useRef } from 'react'
import useAxios from '../../hooks/useAxios';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux/es/exports";

export default function UserTeamMapForm(props) {
  const dispatch = useDispatch();

  const handleClose = () => dispatch({ type: "closeModal" });



  const SignupSchema = Yup.object().shape({
    team_id: Yup.string()
      .trim()
      .required("Team is required"),
    user_id: Yup.string()
      .trim()
      .required("User is required")
  });

  const initialValues = {
    user_id: "",
    team_id: "",
    user_name: "",
    team_name: "",
  };

  const ref = useRef([]);
  const [message, setMessage] = useState("");
  const [successmessage, setSuccessmessage] = useState("");


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
      //console.log("User data : ", response2);
    }

    const resMessage =
      (error2.response && error2.response.data && error2.response.data.message) || error2.message || error2.toString(); console.log(resMessage)
  }, [response2, error2]);


  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  const [apiState, setapiState] = useState(0);
  const { response, loading, error } = useAxios({
    method: "post",
    url: "/createteamusermapping",
    body: JSON.stringify({
      team_id: JSON.parse(ref.current.values.team_id).team_id,
      user_id: JSON.parse(ref.current.values.user_id).u_id,
      team_name: JSON.parse(ref.current.values.team_id).team_name,
      user_name: JSON.parse(ref.current.values.user_id).first_name + " " + JSON.parse(ref.current.values.user_id).last_name,
    }),
    apiState: apiState,
  });

  // console.log(JSON.stringify({
  //   team_id: JSON.parse(ref.current.values.team_id).team_id,
  //   user_id: JSON.parse(ref.current.values.user_id).u_id,
  //   team_name: JSON.parse(ref.current.values.team_id).team_name,
  //   user_name: JSON.parse(ref.current.values.user_id).first_name + " " + JSON.parse(ref.current.values.user_id).last_name,
  // }));


  useEffect(() => {
    if (response !== null) {
      console.log(response);
      setSuccessmessage(response.message);
      setTimeout(() => {
        setSuccessmessage("");
        handleClose();
      }, 3000);
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

  return (
    <>

      <div className="form-group mt-3 ">
        <div className="cart">

          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={handleForm}
            innerRef={ref}
          >
            {({ errors, touched }) => (
              <Form className="theme-form p-2">
                <div className="text-center">
                  <h5 className="text-uppercase">Create new team</h5>
                  <p>Enter your team details</p>
                </div>
                <div className=" card-box-shadow">
                  <div className="table mb-0">

                    <div className='form-group'>
                      <div className='col-md-12'>
                        <Field as="select"
                          required
                          name="team_id"
                          className="form-control"
                          onChangeText={() => console.log("hiii text")}
                        >
                          <option value="null">--select--</option>
                          {
                            response1 != null ?
                              response1.map((item, index) => {
                                return <option value={JSON.stringify(item)} key={index}>{item.team_name}</option>

                              })
                              : console.log("No Team data found")
                          }
                        </Field>
                        <ErrorMessage
                          name="team_id"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-12'>
                      <Field as="select"
                        required
                        name="user_id"
                        className="form-control"
                      >
                        <option value="null">--select--</option>
                        {
                          response2 != null ?
                            response2.map((item, index) => {
                              return <option value={JSON.stringify(item)} key={index}> {item.first_name}</option>
                            })
                            : console.log("No Branch data found")
                        }
                      </Field>
                      <ErrorMessage
                        name="user_id"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div>
                    <div className='form-group'>
                      <div className='col-md-12'>
                        <button type="submit" className="btn-block btn btn-theme">UPDATE</button>
                      </div>
                    </div>
                  </div>
                  <div>

                    {message && (
                      <div className="form-group mb-0">
                        <div className="col-md-12">
                          <div className="alert alert-danger" role="alert">
                            {message}
                          </div>
                        </div>
                      </div>
                    )}
                    {successmessage && (
                      <div className="form-group mb-0">
                        <div className="col-md-12">
                          <div className="alert alert-success" role="alert">
                            {successmessage}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}
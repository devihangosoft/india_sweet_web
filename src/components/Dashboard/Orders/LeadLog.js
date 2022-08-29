import React, { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import * as Icon from 'react-feather'

function LeadLog() {
  const [post, setPost] = useState([])
  const userData = JSON.parse(localStorage.getItem("user"));
  const [apiState, setapiState] = useState(1);
  const { response, loading, error } = useAxios({
    method: "post",
    url: "/getleadlog",
    body: JSON.stringify({
      // user_id: "1",
      lead_id: "1",
    }),
    apiState: apiState,
  });

  // console.log(JSON.stringify({
  //  lead_id: "1",
  // }))

  useEffect(() => {
    if (response !== null) {
    //  console.log(response);
      setPost(response)   
    }

    const resMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(resMessage)
  }, [response, error]);

  const IndDateTime = (val) => {
    let date = new Date(val);
    let month = date.getMonth()+1;
    let dt = date.getDate();
    if(dt < 10) {  dt = '0' + dt; }
    if(month < 10) { month = '0' + month;}
     return (dt + '-' + month + '-'+dt + date.getFullYear()+'  '+ date.toLocaleTimeString());
    }
    

    // const datetime = IndDateTime();
    // console.log(datetime);
    // console.log('processs', post);
 
  return (
    <>
      <Timeline className="mt-3">
       
        {post.map((item, index) => {
          return (
            <TimelineItem className="col-md-12">
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="card-box-shadow bg-white p-4">
                  <div className="row">
                    <div className="col-md-3">
                      <h6 className="text-dark">
                        <span className="text-grey small">Processed By
                        </span>
                        <br />
                        <b>
                          {item.processed_by}
                        </b>
                      </h6>
                    </div>
                    <div className="col-md-3">
                      <span className="text-grey small">order status:</span><br></br>
                      <span className="badge rounded-pill bg-info text-white py-1 px-2">
             {item.disposition}
            </span>

                    </div>
                    <div className="col-md-3">
                      <span className="text-grey small">payment status:</span><br></br>
                      <span className="badge rounded-pill bg-warning text-white py-1 px-2">
             {item.disposition}
            </span>

                    </div>
                    <div className="col-md-3">
                      <span className="text-grey small">processed on:</span><br></br>
                     <b>
                     {item.processed_on}
                     
                                           
                     </b>               
                    </div>
                  </div>
                  <hr></hr>
                  <h4>
                   {item.production_status}
                  </h4>



                  <p><span className="text-grey small">Remarks:&nbsp;
                  </span>  {item.remarks}</p>
                </div>

              </TimelineContent>
            </TimelineItem>
          )
        })

        }
      </Timeline>
    </>
  );
}

export default LeadLog;
import React from 'react';
// import axios from 'axios';
const axios = require('axios');

const Test = () => {
    

    async function start() {
                 
        let headersList = {
            "Accept": "*/*",
            // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json",
            // "api-key": "vU1r8cgjty2d3F4zdxvd0TXpctgkRflfGKKfLpfiIhHDTrcbdz0ZUrm6TA",
            "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MDI3ODY2OCwianRpIjoiZDdiZWQxMDItNjZjOC00OTBiLTgyMTctYzY2MjY1YjUyYmNiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IkRldjEyIiwibmJmIjoxNjYwMjc4NjY4LCJleHAiOjE2NjAzMDAyNjh9.xyRG9vVF7-LT0SdzRJwJbw_Db9cWXnC23rx344ZNj7c" 
           }
           
           let bodyContent = JSON.stringify({
            user_id:"e4ead5a7-3549-473b-ba0e-63f2238f7635",
            store_name: "temp store",
            store_address: "temp address"
        });
           console.log(bodyContent);
           
           let reqOptions = {
            //  url: "http://216.48.182.12:5000/getcustomerlist",
            //  url: "http://216.48.182.12:5000/getlead",
            //  url: "http://216.48.182.12:5000/createstore",
            //  url: "http://216.48.182.12:5000/getstoredetails",
            //  url: "http://216.48.182.12:5000/getdisposition",
             url: "http://216.48.182.12:5000/getproduct",
             method: "GET",
             headers: headersList,
            //  data: bodyContent,
           }
           
           let response = await axios.request(reqOptions);
           console.log(response.data);
       }
       start();


    return (
        <div>
            
        </div>
    );
}

export default Test;

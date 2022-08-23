import React from 'react';
import axios from 'axios';
// const axios = require('axios');

const Test = () => {
    
    const apicall = async()=>{
      
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "api-key": "F2PE47UiPImpXj5bEJQymSynK9wAYSd71Lon1haWXLYRGfbRS6K51dQ_NQ",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MDYzMzc4MiwianRpIjoiODM5ZGQ3OWEtOTYyOC00NDU3LWJkZDEtOTE5NDAwNjcwNzcwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IkRldkAxMjM0IiwibmJmIjoxNjYwNjMzNzgyLCJleHAiOjE2NjA2NTUzODJ9.YN6CklmVTyUla7FStH5PmWQxOfzoyMnYsbice_gY65o" 
           }
           
           let bodyContent = JSON.stringify({
             "user_id": "8740618d-a140-4a96-9999-32212a4926fb",
             "product_name": "DOODHA BURFI",
             "product_details": "indian sweet house ki mithaai ",
             "quantity": "1kg",
             "price": "700"
           });
           
           let reqOptions = {
             url: "http://192.168.8.101:5000/createproduct",
             method: "POST",
             headers: headersList,
             data: bodyContent,
           }
           
           let response = await axios.request(reqOptions);
           console.log(response.data);

    }

    
    apicall();


    return (
        <div>
            <h1>`This is test page</h1>
        </div>
    );
}

export default Test;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import useAxios from './components/hooks/useAxios';

const Test = () => {

    const userData = JSON.parse(localStorage.getItem("user"));
    const [apiState, setapiState] = useState(1);
    const { response, loading, error } = useAxios({
      method: "post",
      url: "/test",
    //   body: JSON.stringify({
    //     user_id: `${userData.data.data[0].user_id}`,
    //   }),
      apiState: apiState,
    });

    useEffect(() => {
      if (response !== null) {
       console.log(response);
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



    
    // const apicall = async()=>{
      
    //     let headersList = {
    //         "Accept": "*/*",
    //         "Content-Type": "application/json",
    //         "api-key": "F2PE47UiPImpXj5bEJQymSynK9wAYSd71Lon1haWXLYRGfbRS6K51dQ_NQ",
    //         // "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MDYzMzc4MiwianRpIjoiODM5ZGQ3OWEtOTYyOC00NDU3LWJkZDEtOTE5NDAwNjcwNzcwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IkRldkAxMjM0IiwibmJmIjoxNjYwNjMzNzgyLCJleHAiOjE2NjA2NTUzODJ9.YN6CklmVTyUla7FStH5PmWQxOfzoyMnYsbice_gY65o" 
    //         "Authorization": "Bearer "+"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MTMxODEwOCwianRpIjoiZTFmYWZmZjAtMjdkMS00ODM2LWI4MDQtNGI4ZGZkOGRiZjA5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Im5ldyIsIm5iZiI6MTY2MTMxODEwOCwiZXhwIjoxNjYxMzM5NzA4fQ.hMRrku_-TxJ5cYVt9ALlL7mU7WfXdd1ezfhhN1sOJUo" 
    //        }
           
    //        let bodyContent = JSON.stringify({
    //          "user_id": "8740618d-a140-4a96-9999-32212a4926fb",
    //          "product_name": "DOODHA BURFI",
    //          "product_details": "indian sweet house ki mithaai ",
    //          "quantity": "1kg",
    //          "price": "700"
    //        });
           
    //        let reqOptions = {
    //         //  url: "http://216.48.182.12:5000/test",
    //          url: "http://192.168.8.101:5000/test",             
    //          method: "post",
    //          headers: headersList,
    //          data: bodyContent,
    //        }
           
    //        let response = await axios.request(reqOptions);
    //        console.log(response.data);

    // }

    
    // apicall();






    return (
        <div>
            <h1>`This is test page</h1>
        </div>
    );
}

export default Test;

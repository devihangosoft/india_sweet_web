const axios = require('axios');
async function start() {
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
    "api-key": "vU1r8cgjty2d3F4zdxvd0TXpctgkRflfGKKfLpfiIhHDTrcbdz0ZUrm6TA",
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2MDI3ODY2OCwianRpIjoiZDdiZWQxMDItNjZjOC00OTBiLTgyMTctYzY2MjY1YjUyYmNiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IkRldjEyIiwibmJmIjoxNjYwMjc4NjY4LCJleHAiOjE2NjAzMDAyNjh9.xyRG9vVF7-LT0SdzRJwJbw_Db9cWXnC23rx344ZNj7c" 
   }
   
   let bodyContent = JSON.stringify({"user_id":"e4ead5a7-3549-473b-ba0e-63f2238f7635"});
   
   let reqOptions = {
     url: "http://216.48.182.12:5000/getproduct",
     method: "post",
     headers: headersList,
     data: bodyContent,
   }
   
   let response = await axios.request(reqOptions);
   console.log(response.data);
   
 }
 start();


import axios from "axios";
import {Navigate} from "react-router-dom"

let refresh = false;
const userData = JSON.parse(localStorage.getItem("user"));

axios.interceptors.response.use(resp => resp, async error => {
 if (error.response.status === 401 && !refresh) {
  refresh = true;
  try {
    const response = await axios.post("http://216.48.182.12:5000/jwtrefresh", {}, {
      headers: {
        "Content-Type": "application/json",
        "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
        "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).data.refresh_token
        // "Authorization": "Bearer " + userData.data.refresh_token
      },
    });
   //  const response = await axios.post('refresh', {}, {withCredentials: true});
     if (response.status === 200) {
     console.log(response)
      userData.data.refresh_token = response.data.refresh_token;
      userData.data.access_token = response.data.access_token;
      localStorage.setItem('user', JSON.stringify(userData));
   
     error.config.headers.Authorization = "Bearer " + JSON.parse(localStorage.getItem("user")).data.access_token;
     return axios.request(error.config);
   
     }else{
      console.log("Response is else", response)
     }
  } catch (error) {
    console.log("Error is in refresh", error)
  }
 
 console.log('refresh not happening');
//  localStorage.removeItem("user")
window.location = `${window.origin}/AutoLogout`
 }

 refresh = false;
 return error;
});
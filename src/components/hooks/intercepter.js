import axios from "axios";
// import TokenService from "./token.service";

const instance = axios.create({
    baseURL: "http://216.48.182.12:5000",
    headers: {
        "Content-Type": "application/json",
    },
});
instance.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem("user")).data.access_token;
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
            //   config.headers["x-access-token"] = token; // for Node.js Express back-end
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== "/login" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    // const res = await instance.post("/jwtrefresh", {
                    // refreshToken: TokenService.getLocalRefreshToken(),
                    // });

                    const res = await axios.post("http://216.48.182.12:5000/jwtrefresh", {}, {
                        headers: {
                            "Accept": "*/*",
                            "Content-Type": "application/json",
                            "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
                            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).data.refresh_token}`
                        },
                    })

                    console.log("Response is : ", res)

                    try {                        
                        var userData = JSON.parse(localStorage.getItem("user"));
                        userData.data.access_token = res.data.data.access_token;
                        userData.data.refresh_token = res.data.data.refresh_token;
                        localStorage.setItem("user", JSON.stringify(userData));                  
                        //   TokenService.updateLocalAccessToken(accessToken);
                    } catch (error) {
                        console.log("error in refresh token", error)
                    }

                    const { accessToken } = res.data;
                    return instance(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }
);
export default instance;
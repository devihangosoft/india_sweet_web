
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://216.48.182.12:5000';

// axios.defaults.baseURL = 'http://192.168.8.101:5000';
// axios.defaults.baseURL = 'https://6c78-2402-8100-3852-2ba3-ccfa-29d6-70d9-9a7.in.ngrok.io';


const useAxios = ({ url, method, headers, body = null, apiState = 0 }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);
    const userData = JSON.parse( sessionStorage.getItem("user"));

    // console.log("BODY DATA:",body)

    const fetchData = () => {
        setloading(true);
        setResponse(null)
        setError('')

        axios[method](url, body,
            {
                // headers: headers,
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",                    
                    "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
                    "Authorization": `Bearer ${userData.access_token}`
                },                
            }
        )
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        if (apiState > 0) {
            fetchData();
        }
    }, [apiState]);

    return { response, error, loading };
};

export default useAxios;
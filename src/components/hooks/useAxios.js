
import { useState, useEffect } from 'react';
import axios from 'axios';
// import instance from './intercepter';

axios.defaults.baseURL = 'http://216.48.182.12:5000';
// axios.defaults.baseURL = 'http://192.168.29.146:5000';

// axios.defaults.baseURL = 'http://192.168.8.101:5000';
// axios.defaults.baseURL = 'http://192.168.8.101:5000';

const useAxios = ({ url, method, headers, body = null, apiState = 0 }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);
    
    const userData = JSON.parse(localStorage.getItem("user"));
    
    // console.log("BODY DATA:",body)

    const fetchData = async () => {
        setloading(true);
        setResponse(null);
        setError('');
        // headers: headers,
        headers = {
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
                "Authorization": `Bearer ${userData.data.access_token}`
            },
        };

        // axios[method](url, body, headers )
        //     .then((res) => {
        //         setResponse(res.data);
        //     })
        //     .catch((err) => {
        //         setError(err);
        //     })
        //     .finally(() => {
        //         setloading(false);
        //     });

        try {            
            const res = (method!=='get') ? await axios[method](url, body, headers) : await axios[method](url, headers);
            // const res = (method!=='get') ? await instance[method](url, body, headers) : await instance[method](url, headers);
            setResponse(res.data);
            console.log("stutus is : ", res.status)
        } catch (err) {
            setError(err);
        } finally {
            setloading(false);
        }

    };

    useEffect(() => {
        if (apiState > 0) {
            fetchData();
        }
    }, [apiState]);

    return { response, error, loading };
};

export default useAxios;
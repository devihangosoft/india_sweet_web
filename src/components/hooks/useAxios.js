
import { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'http://216.48.182.12:5000';
axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = ({ url, method, headers, body = null , apiState=0}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);

    const fetchData = () => {
        setloading(true);
        setResponse(null)
        setError('')

        axios[method](url, body,
            {
                headers: headers
                // {
                //     "Content-Type": "application/json",
                //     "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
                // }
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
        if(apiState>0){
            fetchData();
        }
    }, [apiState]);

    return { response, error, loading };
};

export default useAxios;
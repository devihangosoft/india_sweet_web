
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://216.48.182.12:5000';


const useAxios = ({ url, method, headers, body = null, apiState = 0 }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);

    const fetchData = () => {
        setloading(true);
        setResponse(null)
        setError('')

        axios[method](url, 
            {
                headers: headers,
                body,
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
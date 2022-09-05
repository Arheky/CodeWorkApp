import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const useFetch = url => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const {data: responseData} = await axios.get(url);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }, [url])
    return {data, loading, error};
}

export default useFetch;
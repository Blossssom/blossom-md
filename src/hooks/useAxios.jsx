import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (options, axiosInstance = defaultAxios) => {
    const [axiosData, setAxiosData] = useState('');

    const fetchData = (option) => {
        axiosInstance(option).then(data => {
            setAxiosData(data);
        }).catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        fetchData(options);
    }, []);

    if(!options.url) {
        return;
    }

    return {axiosData, fetchData};
};

export default useAxios;
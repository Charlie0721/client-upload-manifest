import axios, {  type AxiosInstance } from "axios";

const axiosIntance: AxiosInstance = axios.create({

    baseURL: 'http://192.168.1.142:4001',
    headers: {
        'Content-Type': 'application/json',

    },
});

export default axiosIntance
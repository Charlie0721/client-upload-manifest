import axios, {  type AxiosInstance } from "axios";
import {URI_API} from './environmentVariables';
const axiosIntance: AxiosInstance = axios.create({
  
    baseURL: URI_API,
    headers: {
        'Content-Type': 'application/json',

    },
});

export default axiosIntance
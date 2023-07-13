import axios from 'axios';
import {AxiosInstance} from "axios";
export const API_URL = "http://localhost:8004/v1";


const Request = (baseURL: any): AxiosInstance => {
    const timeout = 1000 * 60 * 5;
    const request = axios.create({
        baseURL: baseURL,
        timeout: timeout,
        withCredentials: true,
    });
    request.interceptors.request.use((config) => {
        config.headers['Access-Control-Allow-Origin'] = "http://localhost:8080/"; // Set the 'Access-Control-Allow-Origin' header
        return config;
    });

    request.interceptors.request.use((config) => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
    request.interceptors.response.use(response => {
        if (response.data) return response.data;
        return response;
    }, async error => {
        return Promise.reject(error.response);
    });

    return request;
}
const request = Request(API_URL);
export default request;

// @ts-ignore
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import {getItem} from "@/service/localstorage";

// Set base URL
axios.defaults.baseURL = 'https://metsenatclub.xn--h28h.uz/api/v1';

// Set access token
const accessToken = getItem('access_token');
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

// Define response and error interceptors
axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Define custom request configuration
const requestConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const useApi = {
    get: <T>(url: string): Promise<T> => axios.get(url, requestConfig).then(response => response.data),
    post: <T>(url: string, data: any): Promise<T> => axios.post(url, data, requestConfig).then(response => response.data),
    put: <T>(url: string, data: any): Promise<T> => axios.put(url, data, requestConfig).then(response => response.data),
    delete: <T>(url: string): Promise<T> => axios.delete(url, requestConfig).then(response => response.data),
    patch: <T>(url: string, data: any): Promise<T> => axios.patch(url, data, requestConfig).then(response => response.data),
};

export default { useApi };

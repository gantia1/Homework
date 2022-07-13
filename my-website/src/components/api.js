import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030',
});

api.interceptors.request.use(function (config) {

    config.headers = config.headers || {};
    config.headers.Authorization = localStorage.getItem('token');
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default api;
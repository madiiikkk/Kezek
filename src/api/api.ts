import axios from 'axios';

export const api = axios.create({
    baseURL:  "http://localhost:8000/",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
    
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
            if (error.response) {
                console.error('Сессия истекла. Пожалуйста, авторизуйтесь заново.');
            }

            return Promise.reject(error);
    }
)
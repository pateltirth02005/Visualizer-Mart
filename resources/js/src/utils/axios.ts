import axios from 'axios';
import { useAdminAuthStore } from '../stores/adminAuth';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/admin',
});

api.interceptors.request.use((config) => {
    const store = useAdminAuthStore()
    if (store.token) {
        config.headers.Authorization = `Bearer ${store.token}`
    }
    return config
})

export default api;

import axios from "axios";

export function useApi() {
    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            Accept: 'application/json',
            "Content-Type": 'multipart/form-data',
            Authorization: 'Bearer ' + getApiToken(),
        }
    });

    return api;
}

function getApiToken() {
    return localStorage.getItem('ApiToken')
}
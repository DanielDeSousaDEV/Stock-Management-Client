import axios from "axios";

export function useApi() {
    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        withXSRFToken: true,
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: 'Bearer ' + getApiToken(),
        }
    });

    return api;
}

function getApiToken() {
    return localStorage.getItem('ApiToken')
}
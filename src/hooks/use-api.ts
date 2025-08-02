import axios from "axios";

export function useApi() {
    const api = axios.create({
        baseURL: 'http://localhost:8000/api',
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
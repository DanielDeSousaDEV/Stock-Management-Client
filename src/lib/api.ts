import axios from "axios";

// axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withXSRFToken: true,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        Authorization: 'Bearer ' + getApiToken(),
    }
})

function getApiToken() {
    return localStorage.getItem('ApiToken')
}
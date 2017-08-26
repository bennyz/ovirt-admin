import axios from 'axios';

export const api = axios.create({
    baseURL:  process.env.OVIRT_API_URL,
    auth: {
        username: process.env.OVIRT_USERNAME,
        password: process.env.OVIRT_PASSWORD
    }
}) 

export function getToken() {
    return api.get(process.env.OVIRT_SSO_URL);
}
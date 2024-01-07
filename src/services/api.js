import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const api_42 = axios.create({
    baseURL: process.env.NEXT_PUBLIC_42_API_URL,
});
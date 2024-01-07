import { api_42 } from "./api";

export const get42AuthUrl = () => {
    const payload = {
        client_id: process.env.NEXT_PUBLIC_42_CLIENT_ID,
        redirect_uri: process.env.NEXT_PUBLIC_42_WEBHOOK_URL,
        response_type: "code",
        scope: "public",
    }
    const params = new URLSearchParams(payload).toString();
    return `https://api.intra.42.fr/oauth/authorize?${params}`;
}

export const open42AuthUrl = () => {
    window.open(get42AuthUrl(), '_self');
}

export const get42Token = async (user_code) => {
    const response = await api_42.post('/oauth/token', {
        grant_type: 'authorization_code',
        client_id: process.env.NEXT_PUBLIC_42_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_42_CLIENT_SECRET,
        code: user_code,
        redirect_uri: process.env.NEXT_PUBLIC_42_WEBHOOK_URL,
    });

    return response.data;
}

export const get42User = async (token) => {
    const response = await api_42.get('/v2/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
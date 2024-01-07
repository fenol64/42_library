"use client";
import Header from '@/components/Header';
import { get42User } from '@/services/42';
import { api } from '@/services/api';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function me() {
    const [user, setUser] = useState(null);
    const [toggleLoading, setToggleLoading] = useState(false);
    const params = useSearchParams();

    const get42User = async (code) => {
        setToggleLoading(true);
        try {
            const user = await api.get("/42", { params: { code } });
            console.log(user.data);
            setUser(user.data);
            localStorage.setItem("user", JSON.stringify(user.data));
        } catch (error) {
            console.log(error.message);
        } finally {
            setToggleLoading(false);
        }

    }

    useEffect(() => {
        const code = params.get("code");
        const user_data = localStorage.getItem("user");
        if (!code)
            return;
        if (user_data)
            setUser(JSON.parse(user_data));
        else
            get42User(code)

    }, []);

    if (toggleLoading)
        return <div>Loading...</div>

    return (<>
        <Header />
    </>);
}

export default me;
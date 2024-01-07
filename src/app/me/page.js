"use client";
import { get42User } from '@/services/42';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function me() {
    const [user, setUser] = useState(null);
    const [toggleLoading, setToggleLoading] = useState(false);
    const params = useSearchParams();

    const setup = async () => {
        setToggleLoading(true);
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            const user = await get42User(params.get('token'));
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
        }
        setToggleLoading(false);
    }

    useEffect(() => {
        setup();
    }, []);

    if (toggleLoading)
        return <div>Loading...</div>

    return (
        <div>
            <h1>Olá, {user?.login}</h1>
            <img src={user?.image?.link} alt="user image" />


        </div>
    );
}

export default me;
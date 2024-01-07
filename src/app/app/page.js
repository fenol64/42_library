"use client"
import { get42Token } from '@/services/42';
import {  redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

function App(context) {
    const { code } = context.searchParams;
    const router = useRouter();

    if (!code)
        redirect('/');

    useEffect(() => {
        try {
            (async () => {
                const { access_token } = await get42Token(code);
                router.push(`/me?token=${access_token}`);
            })();
        } catch (error) {
            console.log(error);
            redirect('/');
        }
    }, []);
}


export default App;
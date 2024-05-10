"use client";
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

    const extractNumber = (str) => {
        return str.match(/\d+/g).join('').substring(0, 12);
    }

    useEffect(() => {
        const code = params.get("code");
        const user_data = localStorage.getItem("user");
        if (!code)
            return;
        console.log(JSON.parse(user_data))
        if (user_data)
            setUser(JSON.parse(user_data));
        else
            get42User(code)

    }, []);

    if (toggleLoading)
        return <div>Loading...</div>

    return (<div className='main'>
        <h1 className='text-black'>Carteirinha 42</h1>
    <section className="sid_card px-2">
            <header className="s_header">
                <img src="./image.png" className="image_logo" alt="student image" />
                carteira de estudante
            </header>
            <div className="main_content">
                <figure className="image_wrapper ms-2">
                    <div style={{
                        backgroundImage: `url(${user?.image ? user.image.link : "./image.png"})`,
                        height: "120px",
                        width: "120px",
                        borderRadius: 10,
                        backgroundSize: "cover",
                    }}></div>
                </figure>
                <div className="content">
                    <div className="item">
                        <span>Nome:</span>
                        {user ? user.displayname : "Fulano de tal"}
                    </div>
                    <div className="col_wrapper">
                    </div>
                    <div className="col_wrapper">
                        <div className="item">
                            <span>ID:</span>
                            {user ? user.login : "000000"}
                        </div>
                        <div className="item">
                            <span>validade:</span>
                            12/{new Date().getFullYear() + 1}
                        </div>
                        <div className="item">
                            <span>matricula:</span>
                            {user?.created_at ? extractNumber(user.created_at) : "000000"}
                        </div>
                    </div>
                </div>
            </div>
            <div className="student_wrapper">Curso: Engenharia de Software</div>
    </section>

    <section className="sid_card back">
        <img src="./qrcode.png" className="qrcode"/>
    </section>
    </div>);
}

export default me;
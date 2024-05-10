"use client";
import Image from "next/image";
import { open42AuthUrl } from "@/services/42";

export default function Home() {
  return (
    <main className="mt-5 container-fluid container-md shadow rounded">
        <div className="row">
            <div className="p-5 col-12 d-flex flex-column align-items-center justify-content-center">
                <h1 className="mb-5 text-black">Carteirinha estudante 42</h1>
                <button className="login_button" onClick={open42AuthUrl}>
                    <div className="login_button_image">
                        <Image src="/42.svg" alt="42 logo" width={25} height={17} />
                    </div>
                    <span>Entrar com 42</span>
                </button>
            </div>
        </div>
    </main>
  )
}

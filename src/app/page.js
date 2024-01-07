"use client";
import Image from "next/image";
import { open42AuthUrl } from "@/services/42";

export default function Home() {
  return (
    <main className="mt-5 container-fluid container-md shadow rounded">
        <div className="row">
            <div className="p-5 col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="mb-3">
                    <h1>Livraria_42rio</h1>
                    <p className="text-muted">livros e jogos catalogados na 42rio.</p>
                </div>
                <button className="login_button" onClick={open42AuthUrl}>
                    <div className="login_button_image">
                        <Image src="/42.svg" alt="42 logo" width={25} height={17} />
                    </div>
                    <span>Entrar com 42</span>
                </button>
            </div>
            <div className="col-12 col-md-6 order-first order-md-last">
                <img src="/books.jpeg" alt="login image" className='img-fluid rounded' />
            </div>
        </div>
    </main>
  )
}

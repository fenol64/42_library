"use client";
import styles from "./page.module.css"
import Image from "next/image";
import { open42AuthUrl } from "@/services/42";

export default function Home() {
  return (
    <main className={styles.content_wrapper}>
        <div className={styles.login_wrapper}>
            <div className={styles.left_container}>
                <div>
                    <h1 className={styles.login_title}>Livraria_42rio</h1>
                    <p className={styles.login_description}>livros e jogos catalogados na 42rio.</p>
                </div>
                <button className={styles.login_button} onClick={open42AuthUrl}>
                    <div className={styles.login_button_image}>
                        <Image src="/42.svg" alt="42 logo" width={25} height={17} />
                    </div>
                    <span>Entrar com 42</span>
                </button>
            </div>
            <div className={styles.right_container} />
        </div>
    </main>
  )
}

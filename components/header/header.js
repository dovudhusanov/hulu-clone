import React from 'react';
import Link from "next/link";
import {HeaderData} from "./headerData";
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";

function Header() {

    const router = useRouter()

    return (
        <div className={styles.header}>
            <div className="container">
                <div>
                    <Link href="/">
                        <img
                            src="/assets/logo.png"
                            alt="Hulu Logo"
                            className={styles.logo}
                        />
                    </Link>
                    <nav className={styles.navbar}>
                        {HeaderData.map((headerItems, index) => (
                            <Link href={headerItems.path}
                                  className={router.pathname == headerItems.path ? styles.active : styles.headerItem}
                                  key={index}>
                                <span>{headerItems.icon}</span>
                                <p>{headerItems.title}</p>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
import React, {useState} from 'react';
import Link from "next/link";
import {HeaderData} from "./headerData";
import styles from '../../styles/Home.module.css'
import {useRouter} from "next/router";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

function Header() {

    const [activeNav, setActiveNave] = useState(false)
    const router = useRouter()

    return (
        <div className={styles.header}>
            <div className="container">
                <div>
                    <Link href="/next-hulu/pages">
                        <img
                            src="/assets/logo.png"
                            alt="Hulu Logo"
                            className={styles.logo}
                        />
                    </Link>
                    <div className={styles.burger} onClick={() => setActiveNave(true)}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                    <nav className={styles.navbar} style={activeNav ? {left: 0} : {left: "-100%"}}>
                        {HeaderData.map((headerItems, index) => (
                            <Link href={headerItems.path}
                                  className={router.pathname == headerItems.path ? styles.active : styles.headerItem}
                                  key={index}>
                                <span>{headerItems.icon}</span>
                                <p>{headerItems.title}</p>
                            </Link>
                        ))}
                        <div className={styles.closeNav} onClick={() => setActiveNave(false)}><CloseIcon /></div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
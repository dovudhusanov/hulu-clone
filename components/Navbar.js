import React from 'react';
import request from "../base/request"
import {useRouter} from "next/router";
import styles from "../styles/Home.module.css"

function Navbar() {

    const router = useRouter()

    return (
        <div style={{backgroundColor: "var(--primaryColor)"}}>
            <div className="container">
                <div className={styles.nav} style={{marginTop: 100}}>
                    {Object.entries(request).map(([key, {title}]) => (
                        <p
                            key={key}
                            onClick={() => router.push(`/?genre=${key}`)}
                            className={styles.navbarLinks}
                        >
                            {title}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
import React from 'react';
import styles from '../styles/Home.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className="container">
                <h1><a href="https://dovudhonhusanov.vercel.app" target="_blank">Dovudhon Husanov</a> &copy; All rights reserved</h1>
            </div>
        </div>
    );
}

export default Footer;
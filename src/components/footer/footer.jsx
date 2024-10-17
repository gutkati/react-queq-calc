import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()

    return (
        <div className={styles.footer}>
            <div className={styles.box__text}>
                <p className={styles.text}>{year} ©</p>
                <p className={styles.text}>Екатерина Шмелева</p>
            </div>
        </div>
    );
};

export default Footer;
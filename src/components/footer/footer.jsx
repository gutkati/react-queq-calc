import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.box__text}>
                <p className={styles.text}>2024 ©</p>
                <p className={styles.text}>Екатерина Шмелева</p>
            </div>
        </div>
    );
};

export default Footer;
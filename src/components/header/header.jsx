import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>

            </div>
            <div className={styles.title}>
                <h1>Калькулятор квадратных уравнений</h1>
            </div>

        </div>
    );
};

export default Header;
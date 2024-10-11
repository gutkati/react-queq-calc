import React from 'react';
import styles from './Button.module.css'

const Button = ({text, name, isOpen}) => {
    return (
        <div className={styles.box__btn}>
            <label>{text}</label>
            <button onClick={isOpen}>{name}</button>
        </div>
    );
};

export default Button;
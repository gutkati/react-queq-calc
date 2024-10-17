import React from 'react';
import styles from './Input.module.css'

const Input = ({info, text, type, value, onChange, onBlur}) => {
    return (
        <div className={styles.box__inp}>
            <p>Коэффициент</p>
            <div>
                <label htmlFor={info}><em>{text}</em> = </label>
            <input
                type={type}
                name={info}
                id={info}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            </div>


        </div>
    );
};

export default Input;

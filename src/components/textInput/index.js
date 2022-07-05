import React from "react";
import styles from "./styles.module.css";

const TextInput = ({ title, onError, errorMessage, ...props }) => {
    return (
        <div className={styles.textInputMainDiv}>
            <label htmlFor={title} className={styles.textInputTitle}>{title}</label>
            <input
                id={title}
                {...props}
                className={`${styles.inputBox} ${onError ? styles.onError : ''}`}
                autoComplete="off"
            />
            {onError && errorMessage ? <h6 className={styles.errorMessage}>*&nbsp;{errorMessage}</h6> : null}
        </div>
    );
};

export default TextInput;

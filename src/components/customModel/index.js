import React from "react";
import styles from "./styles.module.css";
import closeIcon from "../../assets/closeIcon.svg";

const CustomModel = ({ children, title, handleClose, open }) => {
    if (open) {
        return (
            <div className={`${styles.customModelMain}${open ? styles.show : ''}`}>
                <div className={styles.backgroundBackDrop} />
                <div className={styles.customModelContentMain}>
                    <div className={styles.customModelHeader}>
                        <h6 className={styles.customModelTitle}>{title}</h6>
                        <button onClick={handleClose} className={styles.customModelCloseBtn}>
                            <img loading="lazy" src={closeIcon} width="15px" height="15px" alt="closeIcon" />
                        </button>
                    </div>
                    <div className={styles.customModelContent}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default CustomModel;

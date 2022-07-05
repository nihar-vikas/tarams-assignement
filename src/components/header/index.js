import React from "react";
import styles from "./styles.module.css";

const Header = () => {
    return (
        <div className={styles.headerMain}>
            <img loading="lazy" src="https://www.tarams.com/wp-content/uploads/2019/05/logo_200px-1.png" alt="logo" height="40" />
        </div>
    )
};

export default Header;

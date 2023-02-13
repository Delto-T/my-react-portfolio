// Library
import React from "react";
import styles from "./Header.module.css"

// Component
import NavBar from "./NavBar/NavBar";

function Header()    {

    // JSX
    return(
        <>
        <header className={styles.Header}>
            <div className={["container", styles.flex].join(' ')}>
                <div className={styles.logo}>
                   DT
                </div>

                <nav>
                    <NavBar/>
                </nav>
            </div>
        </header>
        </>
    );
};

export default Header;
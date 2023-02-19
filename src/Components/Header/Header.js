// Library
import React from "react";
import styles from "./Header.module.css"

// Image
import logo from "../../images/logo2resize.png"


// Component
import NavBar from "./NavBar/NavBar";

function Header()    {

    // JSX
    return(
        <>
        <header className={styles.Header}>
            <div className={["container", styles.flex].join(' ')}>
                <div className={styles.logo}>
                   <img src={logo} alt="Logo du site Deltopoulos Thibault" id={styles.headerLogo}/>
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
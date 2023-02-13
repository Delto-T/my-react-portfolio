// Library
import React from "react";
import styles from "./Layout.module.css";

// Component
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Layout(props)    {

    // JSX
    return(
        <div className={styles.Layout}>
            <Header/>

            <div id={styles.main} className="container">
                {props.children}
            </div>
            
            <Footer/>
        </div>
    );
};

export default Layout;
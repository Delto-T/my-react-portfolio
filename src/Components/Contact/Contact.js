// Library
import React from "react";
import styles from "./Contact.module.css";

// Images
import imageContact from '../../images/ampoule.png';
import imageGitHub from '../../images/GH_logo.png';

// Component
import ContactButton from "../ContactButton/ContactButton";

function Contact()    {

    let githubAdresse ="https://github.com/Delto-T";

    // JSX
    return(
        <>
        <div id={styles.mainContact}>
            <div id={styles.columnLeft}>
                <div id={styles.titleContact}>
                    <h1>Contact</h1>
                </div>
                <div id={styles.textContact}>
                    Envie de travailler ensemble ? N'hésitez pas à me contacter !
                </div>
                <div>
                <ContactButton/> 
                </div>
                <div className={styles.divSocialMediaDisplay}>
                    <img src={imageGitHub} alt="Logo github" className={styles.logoDisplay}/>
                    <div className={styles.divLinkContactDisplay}>
                        <a href={githubAdresse} className={styles.linkContactDisplay}>Mon Github</a>
                    </div>
                        
                </div>
                
                
            </div>
            <div id={styles.columnRight}>
                <div id={styles.displayImg}>
                        <img src={imageContact} alt="Image d'un ordinateur d'un developpeur web" id={styles.imgContact}/>
                </div>

            </div>
            
        </div>
        </>
    );
};

export default Contact;
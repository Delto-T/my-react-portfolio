// Library
import React from "react";
import styles from "./Contact.module.css";
import imageContact from '../../images/imageContact1.png';

// Component
import ContactButton from "../ContactButton/ContactButton";

function Contact()    {

    // Varible


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
                
            </div>
            <div id={styles.columnRight}>
                <div >
                    <figure>
                        <img src={imageContact} alt="Image d'un ordinateur d'un developpeur web" id={styles.imgContact}/>
                    </figure>
                </div>

            </div>
            
        </div>
        </>
    );
};

export default Contact;
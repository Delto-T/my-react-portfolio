// Library
import React from "react";
import styles from "./ContactButton.module.css"
import { Link } from 'react-router-dom';
import routes from '../../config/routes';

function ContactButton(){

    // JSX
    return(
        <>
            <Link to={routes.CONTACT} id={styles.contactButton}>Contact</Link>
        </>
    );
};

export default ContactButton;
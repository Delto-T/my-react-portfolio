// Library
import React from "react";
import styles from './NavBar.module.css';
import routes from '../../../config/routes';

// Components
import ItemNavBar from "./ItemNarBar/ItemNavBar";



function NavBar (props){


    //JSX
    return (
        <ul className={styles.NavBar}>
            <ItemNavBar exact={true} to={routes.HOME}>Accueil</ItemNavBar>
            <ItemNavBar exact={false} to={routes.PROJECTS}>Projets</ItemNavBar>
            <ItemNavBar exact={false} to={routes.CONTACT}>Contact</ItemNavBar>
        </ul>
    );
};

export default NavBar;
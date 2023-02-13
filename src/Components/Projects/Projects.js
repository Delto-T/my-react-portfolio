// Library
import React from "react";
import styles from "./Projects.module.css"
import imageProjet from "../../images/projetx2.png"

// Component
import ContactButton from "../ContactButton/ContactButton";

function Projects()    {

    // JSX
    return(
        <>
        <div id={styles.mainProjects} className="container">

            <h1 id={styles.titleProjects}>Projects</h1>

            <div id={styles.gridProjects}> 

                <div id={styles.projet} class={styles.animProject} >
                    <img src={imageProjet} alt="image to symbolise a web project" />
                    <div class={styles.contentAnim}>
                        <h2 class={styles.text}>Projet 1</h2>
                    </div>
                </div>
                <div id={styles.projet} class={styles.animProject} >
                    <img src={imageProjet} alt="image to symbolise a web project" />
                    <div class={styles.contentAnim}>
                        <h2 class={styles.text}>Projet 2</h2>
                    </div>
                </div>
                <div id={styles.projet} class={styles.animProject} >
                    <img src={imageProjet} alt="image to symbolise a web project" />
                    <div class={styles.contentAnim}>
                        <h2 class={styles.text}>Projet 3</h2>
                    </div>
                </div>
                <div id={styles.projet} class={styles.animProject} >
                    <img src={imageProjet} alt="image to symbolise a web project" />
                    <div class={styles.contentAnim}>
                        <h2 class={styles.text}>Projet 4</h2>
                    </div>
                </div>

            </div>

            <div id={styles.contactProjet}>
                <h1 id={styles.titleProjects}>Contactez-moi</h1>
                <div>
                    <ContactButton/> 
                </div>
            </div>
        </div>
        </>
    );
};

export default Projects;
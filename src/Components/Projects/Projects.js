// Library
import React from "react";
import styles from "./Projects.module.css"
import imageProjet from "../../images/projetx2.png"

// Component
import ContactButton from "../ContactButton/ContactButton";

function Projects()    {


    //Variables
    let projectInformations=[
        {
            titleProject: "Project 1",
            imgProject: imageProjet,
            altImgProject: "image to symbolise a web project",
            infoProject: "Ce projet blalblabla.",
            linkToProject: "./test.js"
        },
        {
            titleProject: "Project 2",
            imgProject: imageProjet,
            altImgProject: "image to symbolise a web project",
            infoProject: "Ce projet blalblabla.",
            linkToProject: "./test.js"
        },
        {
            titleProject: "Project 3",
            imgProject: imageProjet,
            altImgProject: "image to symbolise a web project",
            infoProject: "Ce projet blalblabla.",
            linkToProject: "./test.js"
        },
        {
            titleProject: "Project 4",
            imgProject: imageProjet,
            altImgProject: "image to symbolise a web project",
            infoProject: "Ce projet blalblabla.",
            linkToProject: "./test.js"
        }
    ]

    let projectToDisplay =(<>
        { projectInformations.map( projectElement => (
                <div id={styles.projet} class={styles.animProject} >
                    <img src={projectElement.imgProject} alt={projectElement.altImgProject} />
                    <div class={styles.contentAnim}>
                        <a class={styles.linkToProject} href={projectElement.linkToProject}></a>
                            <h2 class={styles.text}> {projectElement.titleProject}</h2>
                    </div>
                </div>
            ))}
    </>)



    // JSX
    return(
        <>
        <div id={styles.mainProjects} className="container">

            <h1 id={styles.titleProjects}>Projects</h1>

            <div id={styles.gridProjects}> 
                {projectToDisplay}
            </div>

            <div id={styles.contactProjet}>
                <h1 id={styles.titleContact}>Contactez-moi</h1>
                <div>
                    <ContactButton/> 
                </div>
            </div>
        </div>
        </>
    );
};

export default Projects;
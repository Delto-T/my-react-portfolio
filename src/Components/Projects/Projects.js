// Library
import React from "react";
import styles from "./Projects.module.css"

// Images
import imageBlog from "../../images/blog.jpg";
import imageTodoList from "../../images/TODO.jpg";
import imageMarkDown from "../../images/marckdown.jpg";
import imageMinionWar from "../../images/minionWar.jpg";

// Component
import ContactButton from "../ContactButton/ContactButton";

function Projects()    {


    //Variables
    let projectInformations=[
        {
            titleProject: "Blog",
            imgProject: imageBlog,
            altImgProject: "image of a web blog",
            infoProject: "Blog en RECT JS",
            linkToProject: "https://github.com/Delto-T/blog-react"
        },
        {
            titleProject: "Todo List",
            imgProject: imageTodoList,
            altImgProject: "image of a web Todo List",
            infoProject: "Simple Todo list react et firebase",
            linkToProject: "https://github.com/Delto-T/to-do-list-v2"
        },
        {
            titleProject: "Markdown",
            imgProject: imageMarkDown,
            altImgProject: "image of a web Markdown Preview",
            infoProject: "Markdown Preview",
            linkToProject: "https://github.com/Delto-T/projet-marckdown"
        },
        {
            titleProject: "Minion War",
            imgProject: imageMinionWar,
            altImgProject: "image to symbolise a web project",
            infoProject: "Mini jeu pour découvrir REDUX",
            linkToProject: "https://github.com/Delto-T/minion-game"
        }
    ]

    let projectToDisplay =(<>
        { projectInformations.map( projectElement => (
                <div id={styles.projet} class={styles.animProject} >
                    <img src={projectElement.imgProject} alt={projectElement.altImgProject} />
                    <div class={styles.contentAnim}>
                        <a class={styles.linkToProject} href={projectElement.linkToProject}></a>
                            <h2 class={styles.text}> {projectElement.titleProject}</h2>
                            <p class={styles.textP}> {projectElement.infoProject}</p>
                    </div>
                </div>
            ))}
    </>)



    // JSX
    return(
        <>
        <div id={styles.mainProjects} className="container">

            <h1 id={styles.titleProjects}>Projets</h1>

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
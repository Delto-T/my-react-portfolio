// Library
import React from "react";
import styles from "./Home.module.css";
import imageHome from "../../images/imageDev.png"

// Component


function Home()    {


    let textPresentation ="Bonjour je suis Thibault, un Front-end wev developpeur junior. Vous pourrez suivre sur ce site l'ensemble de mes créations tout au long de mon evolution et assiter à mon retour vers les technologies qui me passionnent. N'hésitez pas à me contacter si vous voulez apprendre à me connaitre d'avantage.";


    // JSX
    return(
        <div id={styles.mainHome}>
            <div id={styles.columnLeft}>
                <div id={styles.titleHome}>
                    <h1>Présentation</h1>
                </div>
                <div id={styles.presentationHome}>
                    {textPresentation}
                </div>
            </div>
            <div id={styles.columnRight}>
                <div >
                    <figure>
                        <img src={imageHome} alt="Image d'un ordinateur d'un developpeur web" id={styles.imgHome}/>
                    </figure>
                </div>

            </div>
            
        </div>
    );
};

export default Home;
// Library
import React from "react";
import styles from "./Home.module.css";
import imageHome from "../../images/imageDev.png"

// Component


function Home()    {

    // JSX
    return(
        <div id={styles.mainHome}>
            <div id={styles.columnLeft}>
                <div id={styles.titleHome}>
                    <h1>Présentation</h1>
                </div>
                <div id={styles.presentationHome}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget arcu ante. Nam tincidunt felis arcu, et semper est aliquet ac. Vestibulum vitae consectetur est. Vivamus hendrerit mi ac turpis tempor, vitae laoreet enim consequat. Nam placerat libero elit, sed blandit ligula auctor ac. Nullam pulvinar turpis sit amet elit consectetur tincidunt.
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
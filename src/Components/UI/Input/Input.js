//Library
import React from "react";
import styles from './Input.module.css';

//Component


function Input(props) {

    let inputElement = null;


    switch(props.type){
        case "input":
            inputElement=(
            <div className={styles.inputsDivDisplay}>
                <input
                {...props.config}
                id={props.id}
                value={props.value}
                onChange={props.changed}
                className={!props.valid && props.touched ? styles.invalidInputs : styles.validInputs}
                name={props.name}
                >
                </input>
                <div className={!props.valid && props.touched ? styles.errorVisible : styles.errorInvisible}>{props.error}</div>
            </div>
        )
        break;
        case "textarea":
            inputElement=(
                <div className={styles.inputsDivDisplay}>
                    <textarea
                    id={props.id}
                    value={props.value}
                    onChange={props.changed}
                    className={!props.valid && props.touched ? styles.invalidTextarea : styles.validTextarea}
                    name={props.name}>
                    </textarea>
                    <div className={!props.valid && props.touched ? styles.errorVisible : styles.errorInvisible}>{props.error}</div>
                </div>
            )
        break;
    }

        
    //JSX
    return (
        <div className= {styles.Input}>
            <label className={styles.labelForInputs} htmlFor={props.id}> {props.label} </label>
            {inputElement}
        </div>
    );
};

export default Input;
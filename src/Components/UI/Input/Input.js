//Library
import React from "react";
import styles from './Input.module.css';

//Component


function Input(props) {

    let inputElement = null;

    switch(props.type){
        case "input":
            inputElement=(
            <div>
                <input
                {...props.config}
                id={props.id}
                value={props.value}
                onChange={props.changed}>
                </input>
                {!props.valid && props.touched ? <span>{props.error}</span> : null}
            </div>
        )
        break;
        case "textarea":
            inputElement=(
                <>
                    <textarea
                    id={props.id}
                    value={props.value}
                    onChange={props.changed}>
                    </textarea>
                    {!props.valid && props.touched ? <span>{props.error}</span> : null}
                </>
            )
        break;
    }

        
    //JSX
    return (
        <div className= {styles.Input}>
            <label for={props.id}> {props.label} </label>
            {inputElement}
        </div>
    );
};

export default Input;
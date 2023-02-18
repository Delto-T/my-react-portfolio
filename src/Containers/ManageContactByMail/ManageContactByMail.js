// Library
import React, { useState } from "react";
import styles from './ManageContactByMail.module.css';
import { checkValidity } from "../../Share/utility";

// Component
import Input from "../../Components/UI/Input/Input";



function ManageContactByMail()    {

    // State
    const [input, setInput] = useState({
        lastName:{
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Nom'
            },
            value: '',
            label: 'nom',
            valid: false,
            validation: {
                required: true,
                minLength: 2
            },
            msgErreur:'Veuillez rentrer un nom de plus de deux caractères',
            touched: false
        },
        firstName:{
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Prénom'
            },
            value: '',
            label: 'prenom',
            valid: false,
            validation: {
                required: true,
                minLength: 2
            },
            msgErreur:'Veuillez rentrer un prénom de plus de deux caractères',
            touched: false
        },
        mail:{
            elementType: 'input',
            elementConfig: {
                type: 'mail',
                placeholder: 'mail'
            },
            value: '',
            label: 'adresseMail',
            valid: false,
            validation: {
                required: true,
                email: true
            },
            msgErreur:'Veuillez rentrer une adresse email valide',
            touched: false
        },
        mailObject:{
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Object du mail'
            },
            value: '',
            label: 'objet du mail',
            valid: false,
            validation: {
                required: true,
                maxLength: 40,
            },
            msgErreur:"Veuillez indiquer l'object du mail avec maximum 40 caractères",
            touched: false
        },
        messageToSend:{
            elementType: 'textarea',
            elementConfig: {},
            value: '',
            label: 'Contenu du mail',
            valid: true,
            validation: {
                required: true,
                minLength: 15
            },
            msgErreur:'Veuillez taper au minimum 15 charactère',
            touched: false
        }
    });


    const[valid, setValid] = useState(false);


    //Fonctions

        // inputChangedHandler
    const inputChangedHandler = (event, id) => {

        const temporaryInput = {...input};
        temporaryInput[id].value = event.target.value;
        temporaryInput[id].touched = true;
        // Vérification que le text saisie est conforme à ce que l'on veut
        temporaryInput[id].valid=checkValidity(event.target.value, temporaryInput[id].validation)
        
        setInput(temporaryInput)

        //Vérification du formulaire
        let formIsValid = true;
        for(let input in temporaryInput){
            formIsValid = temporaryInput[input].valid && formIsValid;
        }
        setValid(formIsValid);
        console.log(valid);
    };    


    const formElementArray = [];
        // Transformet l'objet input en array avec ID
    for( let key in input){
        formElementArray.push({
            id: key,
            config: input[key]
        });
    }

        // Génération de l'ensemble des inputs
    let form = (

        <form> 
            {formElementArray.map( formElement =>(
                <Input
                key={formElement.id}
                id={formElement.id}
                type={formElement.config.elementType}
                config={formElement.config.elementConfig}
                value={formElement.config.value}
                label={formElement.config.label}
                valid={formElement.config.valid}
                error={formElement.config.msgErreur}
                touched={formElement.config.touched}
                changed={ (e) => inputChangedHandler(e, formElement.id)}
                
                />
            ))}
            <div className={styles.submit}>
                <input type="submit" value="Envoyer" disabled={!valid}/>
            </div>
        </form>   
        
    );


    // JSX
    return(
        <>
            <h1>Test Manage Contact</h1>
            {form}

        </>
    );
};

export default ManageContactByMail;
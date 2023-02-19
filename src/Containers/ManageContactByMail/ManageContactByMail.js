// Library
import React, { useState, useRef } from "react";
import styles from './ManageContactByMail.module.css';
import { checkValidity } from "../../Share/utility";
import emailjs from '@emailjs/browser';
import informationsForEmailjs from "../../config/emailjs";

// Component
import Input from "../../Components/UI/Input/Input";



function ManageContactByMail()    {

    // State
    const [input, setInput] = useState({
        fullName:{
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Nom'
            },
            value: '',
            label: 'Nom',
            valid: false,
            validation: {
                required: true,
                minLength: 2
            },
            msgErreur:'Deux caractères minimum',
            touched: false,
            name: 'user_name'
        },
        mail:{
            elementType: 'input',
            elementConfig: {
                type: 'mail',
                placeholder: 'mail'
            },
            value: '',
            label: 'Votre adresse mail',
            valid: false,
            validation: {
                required: true,
                email: true
            },
            msgErreur:'Veuillez rentrer une adresse email valide',
            touched: false,
            name: 'user_email'
        },
        mailObject:{
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Object du mail'
            },
            value: '',
            label: 'Objet du mail',
            valid: false,
            validation: {
                required: true,
                maxLength: 40,
            },
            msgErreur:"40 caractères maximum",
            touched: false,
            name: 'user_object'
        },
        messageToSend:{
            elementType: 'textarea',
            elementConfig: {},
            value: '',
            label: 'Votre message',
            valid: true,
            validation: {
                required: true,
                minLength: 5
            },
            msgErreur:'5 caractères minimum',
            touched: false,
            name: 'message'
        }
    });


    const[valid, setValid] = useState(false);


    const form = useRef();

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

        // Vider les champs du formulaire
    const resetForm= () => {
        const temporaryInput = {...input};
        for(let key in temporaryInput){
            temporaryInput[key].value="";
        };

        setInput(temporaryInput)

    }

    const formElementArray = [];
        // Transformet l'objet input en array avec ID
    for( let key in input){
        formElementArray.push({
            id: key,
            config: input[key]
        });
    }
        // Préparation du mail suite au submit en utilisant l'API de emailJS
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm(informationsForEmailjs.ID, informationsForEmailjs.TEMPLATE , form.current, informationsForEmailjs.KEY)
              .then((result) => {
                resetForm();
              }, (error) => {
                //   console.log(error.text);
              });
          };


    // Variables

        // Génération de l'ensemble du formulaire
    let formInputs = (
        <form ref={form} onSubmit={sendEmail}> 
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
                name={formElement.config.name}
                />
            ))}
            <div className={styles.buttonSendMail}>
                <input type="submit" value="Envoyer" disabled={!valid}/>
            </div>
        </form>   
        
    );

    


    // JSX
    return(
        <>
            <h1 className={styles.titleContact}>Un mot à me faire passer ?</h1>
            <div id={styles.displayInputs} className="container">
                {formInputs}
            </div>
            

        </>
    );
};

export default ManageContactByMail;
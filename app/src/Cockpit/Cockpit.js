import React from 'react';
import classes from './cockpit.module.css'


const Cockpit = (props) => {

    let btnClass = [classes.Button];
    
    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    const assigned_classes = [];

    if (props.persons.length <= 2) {
        assigned_classes.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assigned_classes.push(classes.bold)
    }


    return (
        <div className = {classes.Cockpit}>
            <h1> {props.title}</h1>
            <p className = {assigned_classes.join(' ')} > Dynamically set class here </p>

            <button  
                    className = {classes.Button}
                    onClick = {props.restoreState}> Restore State  </button>
                <button
                    className = {btnClass.join(' ')}    
                    onClick = {props.togglePersonsHandler}> Toggle Person components</button> 
        </div>
    
    );

}


export default Cockpit;
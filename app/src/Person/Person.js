import React from 'react';
import './person.css'


const Person = (props) => {

    let randomNum = Math.floor(Math.random() * 30);

    return (
        <div className = "personDiv">
            <p onClick = {props.clickPassedMethod}> 
                My name is {props.name} and I am {props.age} years old, favorite number is {randomNum}</p>  
            <p> {props.children} </p>    {/* adding 2-way binding by including props.name to pre-fill the form with orig name */}
            <input type = "text" onChange = {props.inputNewName} value = {props.name}/>
        </div>
    )
}

export default Person
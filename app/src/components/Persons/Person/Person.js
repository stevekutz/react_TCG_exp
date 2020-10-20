import React from 'react';

import classes from './person.module.css';   // and of course rename the source file to match


const Person = (props) => {

    let randomNum = Math.floor(Math.random() * 30);


    console.log(' Person FC component rendering')
    return (
        <div  className = {classes.Person} >
            <p onClick = {props.clickDelete}> 
                My name is {props.name} and I am {props.age} years old, favorite number is {randomNum}</p>  
         {/*   <p> {props.children} </p>     adding 2-way binding by including props.name to pre-fill the form with orig name */}
            <input type = "text" onChange = {props.clickChanged} value = {props.name}/>
        </div>
    )
}

// export default Radium(Person);
export default Person
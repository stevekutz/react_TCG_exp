import React from 'react';

const Person = (props) => {

    let randomNum = Math.floor(Math.random() * 30);

    return (
        <div>
            <p> My name is {props.name} and I am {props.age} years old</p>  
            <p> {props.children} </p>     
        </div>
    )
}

export default Person
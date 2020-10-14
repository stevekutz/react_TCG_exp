import React from 'react';
// import Radium from 'radium'

import './person.css'



const Person = (props) => {

    let randomNum = Math.floor(Math.random() * 30);
    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '400px',
    //         background: 'cadetblue',
    //     }
    // }



    return (
        <div  className = "personDiv" >
            <p onClick = {props.clickDelete}> 
                My name is {props.name} and I am {props.age} years old, favorite number is {randomNum}</p>  
         {/*   <p> {props.children} </p>     adding 2-way binding by including props.name to pre-fill the form with orig name */}
            <input type = "text" onChange = {props.clickChanged} value = {props.name}/>
        </div>
    )
}

// export default Radium(Person);
export default Person
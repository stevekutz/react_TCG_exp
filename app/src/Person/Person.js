import React from 'react';
// import Radium from 'radium';
//import styled from 'styled-components';

// import './person.css'
// to use CSS modules
import classes from './person.module.css';   // and of course rename the source file to match



// styled-components takes styles defined in component(s) and adds them as a class //
// in the head tagof the rendered html a style tag is added by stled components:

// created by styled-components
// <style data-styled="active" data-styled-version="5.2.0">
//  .kfMmkt 
//      .personDiv{
//          width:60%;
//          margin:16px auto;
//          border:1px solid #eee;
//          box-shadow:0 2px 3px #eee;
//          padding:16px;text-align:center;
//      }
//      @media (max-width:500px){
//          .kfMmkt{
//              width:450px;
//              background-color:cadetblue;
//              margin:0 auto;}}
// </style>



// const StyledDiv = styled.div`
//     .personDiv {
//         width: 60%;
//         margin: 16px auto;
//         border: 1px solid #eee;
//         box-shadow: 0 2px 3px #eee;
//         padding: 16px;
//         text-align: center;
//     }


//     @media (max-width: 500px) {
//             width: 450px;
//             background-color: cadetblue;
//             margin: 0 auto;
//     }


// `

const Person = (props) => {

    let randomNum = Math.floor(Math.random() * 30);
    // const style = {
    //     '@media (min-width: 500px)':{
    //          width: '400px',
    //          background: 'cadetblue',
    //          margin: 0 auto,
    //     }
    // }



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
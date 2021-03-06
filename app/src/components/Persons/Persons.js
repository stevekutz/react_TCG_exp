import React from 'react';
import Person from './Person/Person'


const Persons = (props) => props.persons.map((person, index) => {
    console.log(' Persons.js rendering Person component')
   
    return <Person 
                key = {person.id} 
                name = {person.name} 
                age = {person.age}
                clickDelete = {() => props.clickDelete(index)}
                clickChanged = {(event) => props.clickChanged(event, person.id)}
            />
        });

export default Persons
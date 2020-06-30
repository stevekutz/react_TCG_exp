import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'

const App = () => {
    
    const [personsState, setPersonsState ] = 
    useState({
        persons: [
            {name: 'Joey', age: 22},
            {name: 'Alexander', age: 34},
            {name: 'Mike', age: 44},
            ],

        otherState: 'some value'
    })

    console.log(personsState);

    const switchNameHandler = () => {
        // Unlike how ssetState merges state, hooks will replace the previous state
        // after switchNameHandler called, personState will not contain otherState
        setPersonsState({
            persons: [
                {name: 'JoeyChanged', age: 223},
                {name: 'AlexanderUpdated', age: 342},
                {name: 'MikeNew', age: 447},
            ]
        })
    }


    return (
    <div className="App">
        <h1> Starter App</h1>
        {/* DO NOT use this {this.switchNameHandler()} as 
        // it will execute immediately when App is rendered and exceed Maximum Update depth */}
        <button onClick = {switchNameHandler}> Switch Name</button>

        {personsState.persons.map((item, index) => {
            return (
                <Person key = {index} name = {item.name} age = {item.age}/>
            )    
        })
        }    
    </div>
    )

}

export default App;


// <Person name = "Joe" age = "24" />
// <Person name = "Alex" age = "12"> Hobbies are gaming, gaming, ... </Person>
// <Person name = "Moe" age = "45" />

// <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
// <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
// <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />

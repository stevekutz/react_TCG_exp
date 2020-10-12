import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'
var shortid = require('shortid');


const origState = {
    persons: [
        {id: shortid.generate(),  name: 'Joey', age: 22},
        {id: shortid.generate(), name: 'Alexander', age: 34},
        {id: shortid.generate(), name: 'Mike', age: 44},
    ]  
}
    
class App extends Component {
    state = {
        persons: [
            {id: shortid.generate(),  name: 'Joey', age: 22},
            {id: shortid.generate(), name: 'Alexander', age: 34},
            {id: shortid.generate(), name: 'Mike', age: 44},
        ],
        otherState: 'some value',
        showPersons: false,
    }

    // switchNameHandler = () => {
    //     this.setState({
    //         persons: [
    //             {name: 'JoeyChanged', age: 223},
    //             {name: 'AlexanderUpdated', age: 342},
    //             {name: 'MikeNew', age: 447},
    //         ]
    //     })
    // }

    changeFirstName = (newName) =>  {
        this.setState({
            persons: [
                {name: newName, age: 223},
                {name: 'Alexander', age: 34},
                {name: 'Mike', age: 44},
            ]
        })
    }

    inputNameHandler = (event, id) => {
        // returns index if id is located in state
        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id;
        })
    
        // create copy of state at located id
        const person = {...this.state.persons[personIndex]};

        // create new data from event value info
        person.name = event.target.value;

        // make copy of state
        const persons_copy = [...this.state.persons];

        // set info at personIndex from copy of state
        persons_copy[personIndex] = person;

        // set state with updated data
        this.setState({persons: persons_copy});
    
    
    }

    restoreState = () => {
        this.setState({ persons: origState.persons})  
    }


    togglePersonsHandler = () => {    
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

    }

    deletePersonHandler = (index) => {
        // get all persons from state and copy into a new array, do not modify state directly
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; // another way to copy into a new array
        persons.splice(index, 1);
        this.setState({persons: persons})
    }

    render() {

     const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer',
     }

        let persons = null

        if(this.state.showPersons) {
            persons = (
                <div> 
                    {/* using map to RETURN an array of items fed as attributes to the Person component  */}
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            key = {person.id} 
                            name = {person.name} 
                            age = {person.name} 
                            // readOnly = {!person.showPersons}
                            clickDelete = {() => this.deletePersonHandler(index)}
                            clickChanged = {(event) => this.inputNameHandler(event, person.id)}
                            />
                    })}

                    {/*
                    //  <Person 
                    //       name = {this.state.persons[0].name} 
                    //       age = {this.state.persons[0].age} />
                    //  <Person 
                    //       name = {this.state.persons[1].name} 
                    //       age = {this.state.persons[1].age} 
                    //       inputNewName = {this.inputNameHandler}
                    //       clickPassedMethod = {this.switchNameHandler} > Hobbies are gaming, gaming, ... </Person>
                    //  <Person 
                    //       name = {this.state.persons[2].name} 
                    //       age = {this.state.persons[2].age} />
                    */}
                </div>  
            );
        }

        return (
        <div className="App">
               <h1> Starter App</h1>
            {/* DO NOT use this {this.switchNameHandler()} as 
            // it will execute immediately when App is rendered and exceed Maximum Update depth */}
               {/*   
            <button onClick = {this.switchNameHandler}> Switch Name</button>
            <button onClick = {() => this.switchNameHandler() }> Switch Name with Arrow func </button>
            <button onClick = {this.changeFirstName.bind(this, 'NameChange with Bind' )}> Change First Name with Bind</button>
            <button onClick = {() => this.changeFirstName('NameChange with Arrow')}>Change First Name with Arrow </button>
            <button style = {style} onClick = {this.restoreState}> Restore State  </button>    
               */}
               <button style = {style} onClick = {this.restoreState}> Restore State  </button>
                <button
                    style = {style}
                    onClick = {this.togglePersonsHandler}> Toggle Person components</button>       
                    {/*  added persons obj to be dynamically rendered */}
                    {persons}
 

        </div>
        )
    }

}

export default App;


// <Person name = "Joe" age = "24" />
// <Person name = "Alex" age = "12"> Hobbies are gaming, gaming, ... </Person>
// <Person name = "Moe" age = "45" />

// <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
// <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
// <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />


//     {/* DO NOT use this {this.switchNameHandler()} as 
// // it will execute immediately when App is rendered and exceed Maximum Update depth */}
// <button onClick = {this.switchNameHandler}> Switch Name</button>

// {this.state.persons.map((item, index) => {
//     return (
//         <Person key = {index} name = {item.name} age = {item.age}
//             clickPassedMethod = {this.switchNameHandler}
//         />
//     )    
// })
// } 
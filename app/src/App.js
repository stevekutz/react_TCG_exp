import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'

const origState = {
    persons: [
        {name: 'Joey', age: 22},
        {name: 'Alexander', age: 34},
        {name: 'Mike', age: 44},
    ]    
}
    
class App extends Component {
    state = {
        persons: [
            {name: 'Joey', age: 22},
            {name: 'Alexander', age: 34},
            {name: 'Mike', age: 44},
        ],
        otherState: 'some value',
        showPersons: false,
    }

    switchNameHandler = () => {
        this.setState({
            persons: [
                {name: 'JoeyChanged', age: 223},
                {name: 'AlexanderUpdated', age: 342},
                {name: 'MikeNew', age: 447},
            ]
        })
    }

    changeFirstName = (newName) =>  {
        this.setState({
            persons: [
                {name: newName, age: 223},
                {name: 'Alexander', age: 34},
                {name: 'Mike', age: 44},
            ]
        })
    }

    inputNameHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Joey', age: 22}, 
                {name: event.target.value, age: 88},
                {name: 'Mike', age: 44},
            ]
        })
    }

    restoreState = () => {
        this.setState({ origState})  
    }


    togglePersonsHandler = () => {
         this.setState({
              showPersons: !this.state.showPersons,
         })

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
                    {this.state.persons.map(item => {
                        return <Person 
                            key = {item.name} 
                            name = {item.name} 
                            age = {item.name} 
                            readOnly = {!item.showPersons}> {this.state.showPersons.toString()} </Person>
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
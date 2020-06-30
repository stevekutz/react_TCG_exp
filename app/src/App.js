import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'


    
class App extends Component {
    state = {
        persons: [
            {name: 'Joey', age: 22},
            {name: 'Alexander', age: 34},
            {name: 'Mike', age: 44},
        ],
        otherState: 'some value'
    }

    switchNameHandler = () => {
        // Unlike how setState merges state
        this.setState({
            persons: [
                {name: 'JoeyChanged', age: 223},
                {name: 'AlexanderUpdated', age: 342},
                {name: 'MikeNew', age: 447},
            ]
        })
    }

    render() {
        return (
        <div className="App">
            <h1> Starter App</h1>
            {/* DO NOT use this {this.switchNameHandler()} as 
            // it will execute immediately when App is rendered and exceed Maximum Update depth */}
            <button onClick = {this.switchNameHandler}> Switch Name</button>
    
            {this.state.persons.map((item, index) => {
                return (
                    <Person key = {index} name = {item.name} age = {item.age}
                        clickPassedMethod = {this.switchNameHandler}
                    />
                )    
            })
            }    
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

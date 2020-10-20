import React, {Component} from 'react';
// import logo from './logo.svg';
//import './App.css';
// import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';
import classes from './App.module.css';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


import Persons from '../components/Persons/Persons'
import Cockpit from '../Cockpit/Cockpit';

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
        const persons_copy = [...this.state.persons]; // another way to copy into a new array
        persons_copy.splice(index, 1);
        this.setState({persons: persons_copy})
    }

    render() {


        let persons = null
        let btnClass = [classes.Button];
        // let btnClass = '';

        
        // upon re-render, a new random number is generated for all mapped items
        //let randomNum = Math.floor(Math.random() * 30);

        if(this.state.showPersons) {
            persons = (
                <Persons 
                    persons = {this.state.persons}
                    clickDelete = {this.deletePersonHandler}  
                    clickChanged = {this.inputNameHandler}  
                />

            );
                
        btnClass.push(classes.Red);
        // btnClass = classes.Red

        }

        // classnames are defined here to be set dynamically based on showPersons True of False
        // let class_list = ['red', 'bold'].join(' ')



        // const assigned_classes = [];

        // if (this.state.persons.length <= 2) {
        //     assigned_classes.push(classes.red)
        // }
        // if (this.state.persons.length <= 1) {
        //     assigned_classes.push(classes.bold)
        // }



        return (

            <div className={classes.App}>
                <Cockpit 
                    showPersons = {this.state.showPersons}
                    persons = {this.state.persons}
                    restoreState = {this.restoreState}
                    togglePersonsHandler = {this.togglePersonsHandler}
                
                />
                {persons}

            </div>    
        )
    }

}

export default App;

import React, {Component} from 'react';
// import logo from './logo.svg';
//import './App.css';
// import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';
import classes from './App.module.css';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


// import Persons from '../components/Persons/Persons'

import PersonsClass from '../components/Persons/PersonsClass';

import Cockpit from '../Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import withClass2 from '../hoc/withClass2';



var shortid = require('shortid');

const origState = {
    persons: [
        {id: shortid.generate(),  name: 'Joey', age: '22'},
        {id: shortid.generate(), name: 'Alexander', age: 34},
        {id: shortid.generate(), name: 'Mike', age: 44},
    ]  
}
    
class App extends Component {
    // legacy way to manually set up constructor to set initial state based on props
    constructor(props) {
        super(props);
        console.log(' the Apps.js constructor is initializated ')
        // if you want to initialize state here, use the syntax below, NOT setState
        // this.state = {
        // persons: [],
        // showPersons: false,
        // }
    }        




    
    // more modern way: automatically >>  adds constructor, calls super(props), and sets state
    state = {
        persons: [
            {id: shortid.generate(),  name: 'Joey', age: 22},
            {id: shortid.generate(), name: 'Alexander', age: 34},
            {id: shortid.generate(), name: 'Mike', age: 44},
        ],
        otherState: 'some value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0,
        authenticated: false,
    }


    // AFTER the constructor, getDerivedStateFromProps will run (this is a static method)
    static getDerivedStateFromProps(props, state) {
        console.log(' getDerivedStateFromProps called', props);
        return state
    
    }

    // Down the lifecycle path, AFTER Person comp rendered
    // THEN, ComponentDidMount is run
    componentDidMount() {
        console.log(' App.js ComponentDidMount  run')
    }


    componentDidUpdate() {
        console.log(' App.js componentDidUpdate called ')
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
        // NOTE: attributes are updated in a batch and changeCounter not guaranteed
        //  to always be in previous state before update
        // this.setState({
        //     persons: persons_copy, 
        //     changeCounter: this.state.changeCounter + 1 
        //     });
    
        // this is better way set state that depends on old state
        //this guarantees previous state for counter

        this.setState( (prevState, prevProps) => {
            return {
                persons: persons_copy,
                changeCounter: prevState.changeCounter,
            
            }
        
        })


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

    loginHandler = () => {
        this.setState({authenticated: true})
    } 

    render() {
        // after `getDrivedStateFromProps called`, render is called 
        // after which all child components get rendered
        console.log( 'render now called ')

        let persons = null
        let btnClass = [classes.Button];
        // let btnClass = '';

        
        // upon re-render, a new random number is generated for all mapped items
        //let randomNum = Math.floor(Math.random() * 30);

        if(this.state.showPersons) {
            persons = (
                <PersonsClass 
                    persons = {this.state.persons}
                    clickDelete = {this.deletePersonHandler}  
                    clickChanged = {this.inputNameHandler} 
                    isAuthenticated = {this.state.authenticated} 
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

            // <WithClass classProp ={classes.App}>
             <div> 

                <button onClick = { () => {this.setState({showCockpit: !this.state.showCockpit}) }}>  Toggle Cockpit </button>
                {this.state.showCockpit 
                ? <Cockpit 
                    title = {this.props.myTitle}
                    showPersons = {this.state.showPersons}
                    personsLength = {this.state.persons.length}
                    restoreState = {this.restoreState}
                    togglePersonsHandler = {this.togglePersonsHandler}
                    login = {this.loginHandler} 
                />
                : null
                }
                {persons}
             </div> 
            // </WithClass>
        )
    }

}

// export default App;

                          
export default withClass2(App, classes.App)

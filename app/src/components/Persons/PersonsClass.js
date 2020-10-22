import React, {Component} from 'react';
import PersonClass from './Person/PersonClass';


class PersonsClass extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('PersonsClass getDerivedStateFromProps called')
    //     return state
    // }

    // Verifies if anything changeds and requires a conditional to return a boolean
    // Used to optimize performance by preventing unecessary re-renders

    shouldComponentUpdate(nextProps, nextState) {
        console.log( '\t\t\t@@@@ PersonsClass.js shouldComponentUpdate called ')
        // return false // prevents toggle
        if(nextProps.persons !== this.props.persons) {
            console.log('!!!! nextProps.persons NOT equal to this.props.persons')
            console.log(' nextProps.persons', nextProps.persons)
            console.log('props', this.props.persons)
            return true;
        } else {
            console.log(' !!!! NO CHANGE')
            console.log(' nextProps.persons', nextProps.persons)
            console.log('props', this.props.persons)
            
            return false

        }    
    }

    getSnapshotBeforeUpdate(prepProps, prevState) {
        console.log(' PersonClass getSnapShotBeforeUpdate called ')
        return {message: 'Snapshot '}
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(' PersonClass componentDidUpdate called')
        console.log(snapshot)
    }

    render() {

        console.log(' Persons.js rendering PersonClass')
        return this.props.persons.map((person, index) => {

            return (
                <PersonClass
                    key = {person.id} 
                    name = {person.name} 
                    age = {person.age}
                    clickDelete = {() => this.props.clickDelete(index)}
                    clickChanged = {(event) => this.props.clickChanged(event, person.id)}
                />
            )});
    }
}



export default PersonsClass
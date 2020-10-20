import React, {Component} from 'react';
import PersonClass from './Person/PersonClass';


class PersonsClass extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('PersonsClass getDerivedStateFromProps called')
    //     return state
    // }

    shouldComponentUpdate(nextProps, nextState ){
        console.log(' PersonsClass shouldComponentUpdate called ')
        return true
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
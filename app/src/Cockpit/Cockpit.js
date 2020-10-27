import React, {useEffect, useRef, useContext} from 'react';
import classes from './cockpit.module.css'
import AuthContext from '../context/auth-context';
import authContext from '../context/auth-context';



const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext)

    console.log('>>> useContext >>> ', authContext.authenticated)

    // useEffect will run the given function once for every render cycle
    // it combiones functionality of componentDidMount and componentDidUpdate into one effect
    
    // - componentDidMount is a Lifecycle hook and is runs once right ater first render(), 
    //      good to use for API calls,  (even with async/wait), e.g. updating the state
    
    // - componentDidUpdate is a lifecycle hook useful for updating the DOM to react to a prop or state changes
    // takes (prevProps, prevState) as arguments and is usuallu sued to do somethign when state changes

    useEffect( () => {
    
        console.log("\t Cockpit.js  useEffect called")
        // the setTimeout simulate an API call
        // setTimeout( () => {
        //     alert('save data')
        // }, 1000);
        
        toggleBtnRef.current.click()

        // here a return function can do clean up work as would a componentWillUnmount
        return () => {
            console.log('\t\t >>> 2nd arg [],  CLEANUP - runs BEFORE main useEffect but AFTER 1st render')
        };


    // this second argument is an array that lists all variables or data useEffect should act upon
    //});   // like this, runs useEffect on any change such as togglePerson
     }, []); // like this, runs ONCE ONLY and does not react to changes in username or toggle
    // },[props.persons]);  // like this, runs useEffect when person is updated


    useEffect ( () => {
        console.log( '%%%%% Cockpit.js 2nd useEffect called ')
        


        return () => {
            console.log( '%%%%%  no 2nd arg,  ####   2nd Cleanup')
        
        }
    
    
    
    })   // this runs when togglePerson called OR when ToggleCockpit called


    let btnClass = [classes.Button];
    
    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    const assigned_classes = [];

    if (props.personsLength <= 2) {
        assigned_classes.push(classes.red)
    }
    if (props.personsLength <= 1) {
        assigned_classes.push(classes.bold)
    }


    return (
        <div className = {classes.Cockpit}>
            <h1> {props.title}</h1>
            <p className = {assigned_classes.join(' ')} > Dynamically set class here </p>

            <button  
                className = {classes.Button}
                onClick = {props.restoreState}
            > Restore State </button>
            <button
                ref = {toggleBtnRef}
                className = {btnClass.join(' ')}    
                onClick = {props.togglePersonsHandler}
           > Toggle Person components </button>
            
          
            <button onClick= {authContext.login}> Log in </button>


        </div>
    
    );

}


export default React.memo(Cockpit);
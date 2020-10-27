import React, {Component} from 'react';
import classes from './person.module.css';
import Aux from '../../../hoc/Aux';
import withClass2 from '../../../hoc/withClass2';

import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


class PersonClass extends Component {
    constructor(props)  {
        super(props);
        this.inputElementRef = null;

        this.setInputElementRef = el => {
            this.inputElementRef = el;
        }
    
        this.focusTextInput = () => {
            if (this.inputElementRef) this.inputElementRef.focus()
        }

    }

    componentDidMount() {
        this.focusTextInput()
        
        // console.log('inputElementRef', this.inputElementRef)
        
        // CRASHES - Cannot read property 'focusTextInput' of undefined
        // this.inputElementRef.current.focusTextInput();
        
        // CRASHES - Cannot read property current of 'null'
        //this.inputElementRef.current.focus()
    }



    render() {
        
        let randomNum = Math.floor(Math.random() * 30);

        console.log(' Person Class Component rendering')
        
        return (
            
            <Aux>
            {/* <React.Fragment> */}           
            {/* <div  className = {classes.Person} > */}
                <AuthContext.Consumer>
                
                { (context) =>  context.authenticated ? <p> Authenticated ! </p> : <p> Please log in </p>}
                </AuthContext.Consumer>

                <p onClick = {this.props.clickDelete}> 
                    My name is {this.props.name} and I am {this.props.age} years old</p>  
                <p key = 'a'> {this.props.children} </p>     {/* adding 2-way binding by including props.name to pre-fill the form with orig name */}
                <input 
                    key = 'b'
                    type = "text" 
                    onChange = {this.props.clickChanged} 
                    //ref = {this.inputElementRef}       // does NOT set focus to last element
                    ref = {this.setInputElementRef}  // sets focus to last element
                    // ref = {this.focusTextInput}    // does NOT set focus to last element
                    value = {this.props.name}
                    />
            {/* </div>  */}
            {/* </React.Fragment> */}
            </Aux>
            
        )
    
    
    }

}

// watches props in dev mode and presents warnings if
PersonClass.propTypes = {
    clickDelete: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    clickChanged: PropTypes.func,

}


// this adds wrapped div with CSS code
export default withClass2(PersonClass, classes.Person)



// export default PersonClass
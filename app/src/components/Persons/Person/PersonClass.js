import React, {Component} from 'react';
import classes from './person.module.css';

class PersonClass extends Component {
    
    render() {
        
        let randomNum = Math.floor(Math.random() * 30);

        console.log(' Person Class Component rendering')
        
        return (
            <div  className = {classes.Person} >
                <p onClick = {this.props.clickDelete}> 
                    My name is {this.props.name} and I am {this.props.age} years old</p>  
            {/*   <p> {props.children} </p>     adding 2-way binding by including props.name to pre-fill the form with orig name */}
                <input 
                    type = "text" 
                    onChange = {this.props.clickChanged} 
                    value = {this.props.name}/>
            </div>
        )
    
    
    }

}

export default PersonClass
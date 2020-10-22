import React, {Component} from 'react';
import classes from './person.module.css';
import Aux from '../../../hoc/Aux';
import withClass2 from '../../../hoc/withClass2';

class PersonClass extends Component {
    
    render() {
        
        let randomNum = Math.floor(Math.random() * 30);

        console.log(' Person Class Component rendering')
        
        return (
            <div>
            {/* <React.Fragment> */}           
            {/* <Aux className = {classes.Person}>  */}
            {/* <div  className = {classes.Person} > */}
                <p onClick = {this.props.clickDelete}> 
                    My name is {this.props.name} and I am {this.props.age} years old</p>  
            {/*   <p> {props.children} </p>     adding 2-way binding by including props.name to pre-fill the form with orig name */}
                <input 
                    type = "text" 
                    onChange = {this.props.clickChanged} 
                    value = {this.props.name}/>
            {/* </div>  */}
            {/*  </Aux>  */}
            {/* </React.Fragment> */}
            </div>
        )
    
    
    }

}

// this adds wrapped div with CSS code
export default withClass2(PersonClass, classes.Person)



// export default PersonClass
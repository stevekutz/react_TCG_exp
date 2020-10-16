import React, {Component} from 'react';


// implement as a HOC in App
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: 'wrror called',    
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error,
        })
    
    }


    render() {

        if (this.state.hasError){
            return (
                <h1> {this.state.errorMessage} </h1>            
            )
        } else {
            return this.props.children
        }       
    }
}

export default ErrorBoundary
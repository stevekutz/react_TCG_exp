import React from 'react'


// Customary to name HOC with prefix `With`

// this HOC is intended to replace the <div> in the App component

// This implementation of a HOC is just a regular functional component receiving props
// remember that {props.children} encompasses everything between the orig div tags
const withClass = props => (
    <div className = {props.classProp}> {props.children} </div>
);

export default withClass
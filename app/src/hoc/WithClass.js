import React from 'react'

const withClass = props => (
    <div className = {props.classProp}> {props.children} </div>
);

export default withClass
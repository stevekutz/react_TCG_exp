import React from 'react';


// Called a HOC because it wraps another component(and could also add some extra logic or functionality)
const aux = props => props.children;

export default aux;
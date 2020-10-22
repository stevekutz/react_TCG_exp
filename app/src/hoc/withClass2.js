import React from 'react'


// Customary to name HOC with prefix `With`

// This implementation of a HOC uses a regular JavaScript function

// the first arg is a reference(pointer to addresss) to a component we want tp wrap
// the second, third, etc. can be anything required by the HOC
//  - A FC is then returned

// a lower case `w` is used because we are using this as a function, not a Component

const withClass2 = (WrappedComponent, classProp) => {
   return props => (
        <div  className = {classProp}> 
            <WrappedComponent/>
        </div>
   )

}

export default withClass2
import React, { Component } from 'react'

// Boilerplate code for creating HOC

export default ChildComponent => {
    
    class ComposedComponent extends Component {

        render() {
            return <ChildComponent />;
        }

    }

    return ComposedComponent;
}
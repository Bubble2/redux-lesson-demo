import React from 'react';
import {enhancedInput} from './enhanced' 

class MyComponent extends React.Component{
    render(){
        return(
            <input name="title" {...this.props.input} />
        )
    }
}

export default enhancedInput(MyComponent)


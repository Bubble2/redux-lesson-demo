import React from 'react';
import {enhancedHello} from './enhanced';
import MyComponent from './MyComponent';

class Hello extends React.Component{
    render(){
        return(
            <div>
                <span>{this.props.title}Hello World!</span>
                <MyComponent />
            </div>
        )
    }
}

export default enhancedHello('我是参数')(Hello)


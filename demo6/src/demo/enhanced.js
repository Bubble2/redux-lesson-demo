import React from 'react';

export function enhancedHello(params){
    return function(WrappedComponent){
       return class HOC extends React.Component{
            render(){
                const newProps = {
                    title: '我是被增强过的'
                }
                return(
                    <div>
                        {params}
                        <WrappedComponent {...this.props} {...newProps} />   
                    </div>
                )
            }
        } 
    }
    
}

export function enhancedInput(WrappedComponent){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.onChange = this.onChange.bind(this);
            this.state = {
                name:''
            }
        }
        onChange(e){
            this.setState({
                name: e.target.value
            })
        }
        render(){
            const newProps = {
                input:{
                    value: this.state.name,
                    onChange: this.onChange
                }
            }
            return <WrappedComponent {...this.props} {...newProps} />   
        }
    }
}


import React, { Component } from 'react';

//action
const increase = () => ({
  type: 'INCREASE'
});

const decrease = () => ({
  type: 'DECREASE'
});

//reducer
export const countNum = (state = 0, action) => {
  switch(action.type){
      case 'INCREASE':
          return state+1;
      case 'DECREASE':
          return state-1;
      default:
          return state;
  }
}

//Counter
class Counter extends Component {
  constructor(props){
    super(props)
    this.handleReduce = this.handleReduce.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleReduce(){
    const {store} = this.props;
    store.dispatch(decrease());
  }
  handleAdd(){
    const {store} = this.props;
    store.dispatch(increase());
  }
  render() {
    const {getState} = this.props.store
    return (
      <div className="wrap">
        <p>demo1</p>
        <button onClick={this.handleReduce}>-</button>
        <span>{getState().countNum}</span>
        <button onClick={this.handleAdd}>+</button>
      </div>
    );
  }
}

export default Counter;

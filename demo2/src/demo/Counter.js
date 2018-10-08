import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

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
    this.props.decrease();
  }
  handleAdd(){
    this.props.increase();
  }
  render() {
    return (
      <div className="wrap">
        <p>demo2</p>
        <button onClick={this.handleReduce}>-</button>
        <span>{this.props.countNum}</span>
        <button onClick={this.handleAdd}>+</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countNum: state.countNum
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    increase,
    decrease
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

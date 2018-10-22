import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {fetchDataAsync} from './redux/actions'

//Satin
class Satin extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {satin, fetchDataAsync} = this.props;
    return (
      <div className="wrap">
        <p>demo4</p>
        <button onClick={fetchDataAsync}>加载数据</button>
        <div>
          {
            satin.isFetching?'LOADING...':
            <ul>{satin.items&&satin.items.map((item) => {
              return <li key={item.t}>{item.text}</li>
            })}</ul>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    satin: state.satin
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchDataAsync
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Satin);

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
    const {satinData, fetchDataAsync, isLoading} = this.props;
    return (
      <div className="wrap">
        <p>demo2</p>
        <button onClick={fetchDataAsync}>加载数据</button>
        <div>
          {
            isLoading?'LOADING...':
            <ul>{satinData&&satinData.map((item, index) => {
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
    satinData: state.satinData,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchDataAsync
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Satin);

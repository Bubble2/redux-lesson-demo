import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import {showLoading, hideLoading, fetchData} from './redux/actions'

//Satin
class Satin extends Component {
  constructor(props){
    super(props);
    this.loadData = this.loadData.bind(this);
  }

  loadData(){
    const {showLoading, hideLoading, fetchData} = this.props;
    showLoading();
    axios.get('https://www.apiopen.top/satinApi?type=1&page=1').then(res => {
        const data = res.data;
        if(data && data.data.length > 0){
            hideLoading();
            fetchData(data.data);
        }
    })
  }
  
  render() {
    const {satinData, isLoading} = this.props;
    return (
      <div className="wrap">
        <p>demo2</p>
        <button onClick={this.loadData}>加载数据</button>
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
    showLoading,
    hideLoading,
    fetchData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Satin);

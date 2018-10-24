import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import {fetchingData, fetchedData} from './redux/actions'

//Satin
class Satin extends Component {
  constructor(props){
    super(props);
    this.loadData = this.loadData.bind(this);
  }

  loadData(){
    const {fetchingData, fetchedData} = this.props;
    fetchingData();
    axios.get('https://www.apiopen.top/satinApi?type=1&page=1').then(res => {
        const data = res.data;
        if(data && data.data.length > 0){
            fetchedData(data.data);
        }
    })
  }
  
  render() {
    const {satin} = this.props;
    return (
      <div className="wrap">
        <p>demo2,redux async</p>
        <button onClick={this.loadData}>加载数据</button>
        <div>
          {
            satin.isFetching?'LOADING...':
            <ul>{satin.items&&satin.items.map((item, index) => {
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
    fetchingData,
    fetchedData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Satin);

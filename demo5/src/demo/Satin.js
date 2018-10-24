import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {fetchDataAsync, setReaded} from './redux/actions'

//Satin
class Satin extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {satin, fetchDataAsync, setReaded} = this.props;
    return (
      <div className="wrap">
        <p>demo5,redux and immutable</p>
        <button onClick={fetchDataAsync}>加载数据</button>
        <div>
          {
            satin.get('isFetching')?'LOADING...':
            <ul>{satin.get('items')&&satin.get('items').map((item) => {
              return (<li key={item.get('t')}>
                {item.get('isRead')?<span style={{'color':'gray'}}>已读---</span>:''}
                {item.get('text')}---
                <a href="javascript:;" onClick={() => setReaded(item.get('t'))}>
                标记为已读
                </a>
              </li>)      
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
    fetchDataAsync,
    setReaded
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Satin);

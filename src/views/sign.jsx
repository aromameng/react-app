import React, { Component } from 'react';
import Header from '../components/Header'

class Sign extends Component{
  componentWillMount(){
    // console.log('------',this.props)
  }
  render() {
    return (
      <div className='view_sign'>
        <Header {...this.props.route} />
        签到有礼
      </div>
    )
  }
}

export default Sign;
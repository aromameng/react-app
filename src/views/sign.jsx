import React, { Component } from 'react';

class Sign extends Component{
  componentWillMount(){
    console.log('------',this.props)
  }
  render() {
    return (
      <div>
        签到有礼
      </div>
    )
  }
}

export default Sign;
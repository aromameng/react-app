import React, { Component } from 'react';
import '../App.css';
// import logo from '../logo.svg';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom'

class Home extends Component{
  componentWillMount(){
    // console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <Button>加油</Button>
        <Link to='/my'>我的</Link>
      </div>
    )
  }
}

export default Home;
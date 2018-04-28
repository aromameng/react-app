import React, { Component } from 'react';
import '../App.css';
// import logo from '../logo.svg';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Swiper from '../components/Swiper'

const list =[{
  title:'美丽',
  id:1,
  pic: 'http://img5.imgtn.bdimg.com/it/u=1109917053,4211270766&fm=27&gp=0.jpg',
  url:'/sign'
},{
  title:'美丽2',
  id:2,
  pic: 'http://img2.imgtn.bdimg.com/it/u=3965656371,3751907427&fm=27&gp=0.jpg',
  url:'/sign'
},{
  title:'美丽2',
  id:3,
  pic: 'http://img1.imgtn.bdimg.com/it/u=4073425408,760969153&fm=27&gp=0.jpg',
  url:'/sign'
}]

class Home extends Component{
  componentWillMount(){
    // console.log(this.props)
  }
  render() {
    return (
      <div className='view_home'>
        <Swiper list={list} />
        <Button>加油</Button>
        <Link to='/sign'>签到</Link>
        <br/>
        <Link to='/my'>我的</Link>
        <Footer {...this.props} />
      </div>
    )
  }
}

export default Home;
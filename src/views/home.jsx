import React, { Component } from 'react';
// import '../App.css';
// import logo from '../logo.svg';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Swiper from '../components/Swiper'

import HomeNav from '../components/HomeNav'
import GoodList from '../components/GoodList'

// import axios from 'axios'
import goods from '../data/shop'


const list =[{
  title:'美丽',
  id:1,
  pic: 'http://img3.imgtn.bdimg.com/it/u=859170095,620911882&fm=27&gp=0.jpg',
  url:'/sign'
},{
  title:'美丽2',
  id:2,
  pic: 'http://img2.imgtn.bdimg.com/it/u=2111979637,116752699&fm=27&gp=0.jpg',
  url:'/sign'
},{
  title:'美丽2',
  id:3,
  pic: 'http://img5.imgtn.bdimg.com/it/u=3180694005,1343380476&fm=27&gp=0.jpg',
  url:'/sign'
}]

class Home extends Component{
  componentWillMount(){
    // console.log(this.props)
    // axios.get('../data/shop.json').then((res)=>{
    //   console.log(res)
    // })
  }
  render() {
    return (
      <div className='view_home'>
        <Swiper list={list} />
        <HomeNav />
        <GoodList list={goods} />
        <Footer {...this.props} />
      </div>
    )
  }
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom'
import './common.less';

const HomeNav = () =>{
  return (
    <div className='home_nav'>
      <Link className='nav_item' to='/sign'>
        <i className='cp_icon icon_nav_1'></i>
        <span className='title'>签到有礼</span>
      </Link>
      <Link className='nav_item' to='/sign'>
        <i className='cp_icon icon_nav_2'></i>
        <span className='title'>换货专区</span>
      </Link>
      <Link className='nav_item' to='/sign'>
        <i className='cp_icon icon_nav_3'></i>
        <span className='title'>特价专区</span>
      </Link>
      <Link className='nav_item' to='/sign'>
        <i className='cp_icon icon_nav_4'></i>
        <span className='title'>我要补货</span>
      </Link>
    </div>
  )
}

export default HomeNav
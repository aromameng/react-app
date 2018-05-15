import React, { Component } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import { List } from 'antd-mobile';
import './common.less'

const Item = List.Item;

class News extends Component{
  render() {
    const img = require('../assets/img/person.GIF'),
          name = 'Dale清风';

    const list = [{
      title:'全部订单',
      link: '',
      thumb: require('../assets/img/icon_my_02.png')
    },{
      title:'补货订单',
      link: '',
      thumb: require('../assets/img/icon_my_02.png')
    },{
      title:'我的积分',
      link: '',
      thumb: require('../assets/img/icon_my_03.png')
    },{
      title:'我的足迹',
      link: '',
      thumb: require('../assets/img/icon_my_04.png')
    },{
      title:'我的收藏',
      link: '',
      thumb: require('../assets/img/icon_my_05.png')
    }]

    const list2 = [{
      title:'我的消息',
      link: '',
      thumb: require('../assets/img/icon_my_06.png')
    },{
      title:'设置',
      link: '',
      thumb: require('../assets/img/icon_my_07.png')
    }]

    return (
      <div className='view_my'>
        <Header {...this.props.route} />
        <div className='bg'>
          <div className='bg_inner'>
            <img className='pic' alt='my' src={img} />
            <span className='name'>{name}</span>
          </div>
        </div>
        <List className="my-list">              
          {
            list.map((item,index)=>{
              return (
                <Item
                  arrow="horizontal"
                  thumb={item.thumb}
                  key={index}
                  multipleLine
                  onClick={() => {}}
                >
                  {item.title}
                </Item>
              )
            })
          }        
        </List>
        <List className="my-list">              
          {
            list2.map((item,index)=>{
              return (
                <Item
                  arrow="horizontal"
                  thumb={item.thumb}
                  key={index}
                  multipleLine
                  onClick={() => {}}
                >
                  {item.title}
                </Item>
              )
            })
          }        
        </List>
        <Footer {...this.props} />
      </div>
    )
  }
}

export default News;
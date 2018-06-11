import React, { Component } from 'react';
import {connect} from 'react-redux';
import Footer from '../components/Footer'
import Header from '../components/Header'
import { List } from 'antd-mobile';
import {getUserInfo} from '../actions/index'
import './common.less'

const Item = List.Item;

class My extends Component{
  componentWillMount(){
    this.props.getUserInfo()
  }

  render() {
    const {userInfo} = this.props
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
            <img className='pic' alt='my' src={userInfo.img} />
            <span className='name'>{userInfo.name}</span>
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

function mapStateToProps(state) {
  return {
      userInfo:state.index.get('userInfo')
  }
}

function mapDispatchToProps(dispatch) {
  return {
      getUserInfo:() => dispatch(getUserInfo())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(My);
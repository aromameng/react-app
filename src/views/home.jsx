import React, { Component } from 'react';
import {connect} from 'react-redux';
import Footer from '../components/Footer'
import Swiper from '../components/Swiper'
import Header from '../components/Header'

import HomeNav from '../components/HomeNav'
import GoodList from '../components/GoodList'
import {getGoodList,getBannerList} from '../actions/index'
import {Icon} from 'antd-mobile'

import './common.less'

class Home extends Component{
  constructor(props){
    super(props)
    this.state ={
      list:[]
    }
    this.handleDetail = this.handleDetail.bind(this)
  }

  componentWillMount(){
    this.props.getGoodList()
    this.props.getBannerList()
  }

  handleDetail(info){
    this.props.history.push(`good-detail/${info.id}`)
  }

  render() {
    const goods = this.props.goodList;
    const bannerList = this.props.bannerList;
    return (
      <div className='view_home'>
        <Header {...this.props.route} />
        <Swiper list={bannerList} />
        <HomeNav />
        {
          goods.length>0 ? <GoodList list={goods} handleDetail={this.handleDetail} {...this.props} /> :
          (<div className='c_load'>
              <Icon type="loading" size='sm' />
          </div>)
        } 
        <Footer {...this.props} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      goodList:state.index.get('goodList'),
      bannerList: state.test.bannerList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getGoodList:() => dispatch(getGoodList()),
    getBannerList: () => dispatch(getBannerList())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
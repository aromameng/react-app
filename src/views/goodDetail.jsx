import React, { Component } from 'react';
import './common.less'

import {request_get} from '../utils/request'
import api from '../utils/api'

class GoodDetail extends Component{

  constructor(){
    super()
    this.state={
      info:{}
    }
  }

  componentWillMount(){
    request_get(api.goodDetail).then((res)=>{
      this.setState({
        info : res
      })
    })
  }
  render() {
    const {info} = this.state
    return (
      <div className='view_good_detail'>
        商品详情页
        <div>商品标题：{info.title}</div>
        <div>商品价格：￥{info.price}</div>
        <div>商品介绍：{info.summary}</div>
      </div>
    )
  }
}

export default GoodDetail;
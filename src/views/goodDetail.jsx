import React, { Component } from 'react';
import Header from '../components/Header'
import './good.less'

import {request_get} from '../utils/request'
import api from '../utils/api'

// let good = {
//   padding: '15px',
//   lineHeight: '24px'
// }

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
      <div className="view_good_detail">
        <Header {...this.props.route} />
        <article className="view_good_content">
          <div>商品标题：{info.title}</div>
          <div>商品价格：￥{info.price}</div>
          <div>商品介绍：{info.summary}</div>
        </article>      
      </div>
    )
  }
}

export default GoodDetail;
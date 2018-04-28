import React, { Component } from 'react';
// import './game.less'
import Footer from '../components/Footer'
import ShopTab from '../components/ShopTab'
import './shop.less'

class Block extends Component{
  render(){
    return (
      <div>222</div>
    )
  }
} 

class News extends Component{
  componentWillMount(){
   
  }
  goPage() {
    
  }
  render() {
    return (
      <div className='view_classify'>
        <ShopTab />   
        <Footer {...this.props} />    
      </div>
    )
  }
}

export default News;
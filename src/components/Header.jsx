import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './header.less'

class News extends Component{
  componentWillMount(){
    console.log(this.props)
  }
  goPage() {
    this.props.history.push('/about')
  }
  handleBack(){
    window.history.back()    
  }
  render() {
    return (
      <header className='cp_header'>
        {this.props.back ? <Icon type="left" onClick={this.handleBack.bind(this)} className='head_back' /> : null } 
        <span>{this.props.title}</span>
      </header>
    )
  }
}

export default News;
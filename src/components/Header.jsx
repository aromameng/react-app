import React, { Component } from 'react';
import './header.less'

class News extends Component{
  componentWillMount(){
    console.log(this.props)
  }
  goPage() {
    this.props.history.push('/about')
  }
  render() {
    return (
      <header className='cp-header'>
        {this.props.title}
      </header>
    )
  }
}

export default News;
import React, { Component } from 'react';


class News extends Component{
  componentWillMount(){
    // console.log(this.props)
  }
  goPage() {
    this.props.history.push('/about')
  }
  render() {
    return (
      <div>
        新闻
        <a onClick={this.goPage.bind(this)}>关于我们</a>
      </div>
    )
  }
}

export default News;
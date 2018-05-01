import React, { Component } from 'react';
// import { Icon } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './common.less'

class ShopTab extends Component{
  constructor(props){
    super()
    this.state = {
      active: 0
    }
    this.len = props.list.length
  }  

  tabHeight = 0
  contentHeight = 0
  tabList = []
  winHeight = document.body.clientHeight
  isTab = false

  componentWillMount(){
    // console.log(this.props)
  }

  componentDidMount(){
    this.tabHeight = this.refs.tab.clientHeight
    this.contentHeight = this.refs.content.scrollHeight
    let $tab = this.refs.content.querySelectorAll('.tab_item')
    let sum = 0
    Array.from($tab).forEach((item)=>{
      this.tabList.push(sum)
      sum += item.clientHeight
    })
    // console.log(this.tabList)
  }

  goPage() {
    this.props.history.push('/about')
  }

  handleClickTab(e,item,index){
    this.setState({
      active : index
    })
    this.refs.content.scrollTop = this.tabList[index]
    this.isTab = true
  }

  handleConScroll(e){
    
    if(this.isTab) return this.isTab = false
    let scrollTop = e.target.scrollTop
    for(var [index,item] of this.tabList.entries()){     
      if(scrollTop - 100 <= item){
        this.setState({
          active : index
        })
        return
      }
    }
    // console.log(scrollTop)
  }

  render() {
    const {list} = this.props
    const {active} = this.state

    return (
      <div className='cp_shopTab'>
        <div className='tab' ref='tab'>
            {
              list.map((item,index)=>{
                return (
                  <a 
                    key={item.id}
                    className={ active === index ? 'tab_item active' : 'tab_item' }
                    onClick = { (e) => this.handleClickTab(e,item,index) }
                  >{item.title}</a>
                )
              })
            }
        </div>
        <div className='content' ref='content' onScroll={(e)=>this.handleConScroll(e)}>
          <ul>
            {
              list.map((item,index)=>{
                return (
                  <li 
                    key={item.id}
                    className={ active === index ? 'tab_item active' : 'tab_item' }
                    id = {item.id}
                  >
                    <div className='pro_type'>
                      <span>{item.title}</span>
                      <Link className='all' to={item.url}>查看全部</Link>
                    </div>
                    <div className='pro_box'>
                      {
                        item.children.map((item1,index1)=>{
                          return (
                            <div key={index1} className='pro_item'>
                              <img className='pro_pic' alt={item1.title} src={item1.pic} />
                              <span className='pro_tilte'>{item1.title}</span>
                            </div>
                          )
                        })
                      }
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default ShopTab;
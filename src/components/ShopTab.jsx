import React, { Component } from 'react';
// import { Icon } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './common.less'

class ShopTab extends Component{
  constructor(){
    super()
    this.state = {
      active: 0
    }
  }  

  tabHeight = 0

  componentWillMount(){
    // console.log(this.props)
  }

  componentDidMount(){
    this.tabHeight = this.refs.tab.clientHeight
    console.log(this.tabHeight)
  }

  goPage() {
    this.props.history.push('/about')
  }

  handleClickTab(e,index){
    this.setState({
      active : index
    })
  }

  handleConScroll(e){
    let scrollTop = e.target.scrollTop
  }

  render() {
    const list =[{
      name: 'dress',
      title: '服饰',
      id: '001',
      typeId: 'dress',
      url: '',
      children:[{
        name: 'dress',
        title: '女装',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      },{
        name: 'dress',
        title: '男装',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      }]
    },{
      name: 'shoes',
      title: '鞋包',
      url: '',
      typeId: 'shoes',
      id: '002',
      children:[{
        name: 'dress',
        title: '夏上新',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      },{
        name: 'dress',
        title: '女鞋',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      }]
    },{
      name: 'baby',
      title: '母婴',
      typeId: 'baby',
      url: '',
      id: '003',
      children:[{
        name: 'dress',
        title: '童装',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      },{
        name: 'dress',
        title: '童鞋',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      }]
    },{
      name: 'baby',
      title: '母婴',
      url: '',
      id: '004',
      children:[{
        name: 'dress',
        title: '童装',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      },{
        name: 'dress',
        title: '童鞋',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      }]
    },{
      name: 'baby',
      title: '母婴',
      url: '',
      id: '005',
      children:[{
        name: 'dress',
        title: '童装',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      },{
        name: 'dress',
        title: '童鞋',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      }]
    },{
      name: 'baby',
      title: '母婴',
      url: '',
      id: '006',
      children:[{
        name: 'dress',
        title: '童装',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      },{
        name: 'dress',
        title: '童鞋',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      }]
    },{
      name: 'baby',
      title: '母婴',
      url: '',
      id: '007',
      children:[{
        name: 'dress',
        title: '童装',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      },{
        name: 'dress',
        title: '童鞋',
        pic:'http://img0.imgtn.bdimg.com/it/u=3609377622,3839737162&fm=27&gp=0.jpg',
        url: ''
      }]
    }]
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
                    onClick = { (e) => this.handleClickTab(e,index) }
                  >{item.title}</a>
                )
              })
            }
        </div>
        <div className='content' onScroll={(e)=>this.handleConScroll(e)}>
          <ul>
            {
              list.map((item,index)=>{
                return (
                  <li 
                    key={item.id}
                    className={ active === index ? 'tab_item active' : 'tab_item' }
                    onClick = { (e) => this.handleClickTab(e,index) }
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
                              <img className='pro_pic' src={item1.pic} />
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
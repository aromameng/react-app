import React, { Component } from 'react';
import './header.less'

class Footer extends Component{
  constructor(){
    super()
    this.handleNav = this.handleNav.bind(this)
    this.state = {
      menu : [{
        name:'home',
        title:'首页',
        icon:'icon_home',
        active_icon:'icon_home_active',
        link:'/',
        active:true
      },{
        name:'classify',
        title:'分类',
        icon:'icon_classify',
        active_icon:'icon_classify_active',
        link:'/classify',
        active:false
      },{
        name:'shopcart',
        title:'购物车',
        icon:'icon_shop',
        active_icon:'icon_shop_active',
        link:'/shopcart',
        active:false
      },{
        name:'my',
        title:'我',
        icon:'icon_my',
        active_icon:'icon_my_active',
        link:'/my',
        active:false
      }],
      isShow: true
    }
  }

  componentWillMount(){
    const curRoute = this.props.route,
          menu = this.state.menu
    if(!curRoute.meta.foot) this.setState({ isShow : false })
    menu.forEach((item,index) => {
      item.active = false
      if(item.name === curRoute.name){
        item.active = true      
      }
    })
    this.setState({
      menu : menu
    })
  }
  
  handleNav(e,index) {   
    const menu = this.state.menu
    this.props.history.push(menu[index].link)
  }
  render() {
    const {menu} = this.state
    if(!this.state.isShow) return null
    return (
      <footer className='cp_footer'>
        {
          menu.map((item,index)=>{
            return (
              <a key={index} onClick={(e) => this.handleNav(e,index)} className={ item.active ? 'menu_list active' : 'menu_list' }>
                <i className={ item.active ? 'cp_icon ' + item.active_icon : 'cp_icon ' + item.icon  }></i>       
                <span className='text'>{item.title}</span>
              </a>  
            )
          })
        }   
      </footer>
    )
  }
}

export default Footer;
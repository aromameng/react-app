import React, { Component } from 'react';
// import { Icon } from 'antd-mobile';
import './Swiper.less'

class Swiper extends Component{
  constructor(props){
    super()
    this.state ={
      active:0,
      tranX: 0,
      len: 0
    }
    this.start = {
      x: 0,
      tranX: 0
    }
    this.dW = document.body.clientWidth
    // this.len = props.list.length
  }

  componentWillReceiveProps(nextProps){
    if(this.props.list.length){
      this.setState({
        len:this.props.list.length
      })
    }
  }

  touchStart(event,index) {
    this.start.x = event.touches[0].pageX;
    this.start.tranX=this.state.tranX;
  }

  touchMove(event) {
    let distance = event.touches[0].pageX - this.start.x,
        direction = distance > 0;
    if((!this.state.active && direction) || (this.state.active>=(this.state.len-1) && !direction)){
        // 第一张和最后一张的滑动阻力变大
        distance=distance/3;
    }
    this.setState({
      tranX: this.start.tranX + distance
    })
  }

  touchEnd(e) {
    let distance = this.state.tranX - this.start.tranX,
        direction = distance > 0,
        active = this.state.active,
        tranX = this.state.tranX;
    if(Math.abs(distance)>50){
        if((!active && direction) || (active>=(this.state.len-1) && !direction)){
           tranX=this.start.tranX;
           return this.setState({
            active : active,
            tranX: tranX
          })
        }
        direction ? active-- : active++;
        tranX = active * -this.dW;
    }else{
        tranX=this.start.tranX;
    }
    this.setState({
      active : active,
      tranX: tranX
    })
  }

  render() {
    const list = this.props.list,
          {active, tranX} = this.state;
    return (
      <div className='cp_swiper'>
        <ul className='swiper_inner' style = {{ 'transform':'translate(' + tranX + 'px, 0px)' }}>
          {
            list.map((item,index)=>{
              return (
                <li 
                  className={active === index ? 'swiper_item active' : 'swiper_item'} 
                  onTouchStart={(event)=> this.touchStart(event,index) } 
                  onTouchMove={(event)=> this.touchMove(event,index) } 
                  onTouchEnd={(event)=> this.touchEnd(event,index) } 
                  key={item.id}>
                  <img src={item.pic} alt='item.title' />
                </li>
              )
            })
          }
        </ul>
        <div className='swiper_page'>
          {
            list.map((item,index)=>{
              return (
                <em key={index} className={ active === index ? 'page_item active' : 'page_item' }></em>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Swiper;
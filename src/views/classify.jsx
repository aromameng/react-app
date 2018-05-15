import React, { Component } from 'react';
// import './game.less'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ShopTab from '../components/ShopTab'
import './common.less'

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
  },{
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

class News extends Component{
  componentWillMount(){
   
  }
  goPage() {
    
  }
  render() {
    return (
      <div className='view_classify'>
        <Header {...this.props.route} />
        <ShopTab list={list} />   
        <Footer {...this.props} />    
      </div>
    )
  }
}

export default News;
/*
export default [{
  name:'home',
  link:'/',
  meta:{
    back: false,
    foot: true
  }
},{
  name:'my',
  link:'/my',
  meta:{
    back: false,
    foot: true
  }
},{
  name:'classify',
  link:'/classify',
  meta:{
    back: false,
    foot: true
  }
},{
  name:'shop',
  link:'/shop',
  meta:{
    back: false,
    foot: true
  }
}]
*/

export default {
  "home": {
    name:'home',
    link:'/',
    title: '首页',
    meta:{
      back: false,
      foot: true
    }
  },
  "my": {
    name:'my',
    link:'/my',
    title: '我的',
    meta:{
      back: false,
      foot: true
    }
  },
  "shopcart": {
    name:'shopcart',
    link:'/shopcart',
    title: '购物车',
    meta:{
      back: false,
      foot: true
    }
  },
  "classify": {
    name:'classify',
    link:'/classify',
    title: '分类',
    meta:{
      back: false,
      foot: true
    }
  },
  "sign": {
    name:'sign',
    link:'/sign',
    title: '签到有礼',
    meta:{
      back: true,
      foot: false
    }
  },
  "goodDetail": {
    name:'goodDetail',
    link:'/good-detail',
    title: '商品详情',
    meta:{
      back: true,
      foot: false
    }
  }
}
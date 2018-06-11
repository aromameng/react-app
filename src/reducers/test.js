const initState = {
  userInfo:{},
  goodList:[],
  bannerList:[]
}

export default function reducer(state=initState, action){
  switch (action.type) {
      case 'GET_USER':
        return Object.assign({},state,{
          userInfo: action.payload
        })
      case 'GET_GOOD_LIST':
        return Object.assign({},state,{
          goodList: action.payload
        })
      case 'GET_BANNER':
        return Object.assign({},state,{
          bannerList: action.payload
        })
      default:
        return state; // 无论如何都返回一个 state
  }
}
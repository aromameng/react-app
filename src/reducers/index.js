/*
    定义reducers，纯函数
*/


import {Map} from 'immutable';
import {combineReducers} from 'redux';
import test from './test'

const initState = Map({
    userInfo:{},
    goodList:[],
    bannerList:[]
})

const index = function reducer(state=initState, action){
  switch (action.type) {
      case 'GET_USER':
        return state.set("userInfo",action.payload.userInfo)
      case 'GET_GOOD_LIST':
        return state.set("goodList",action.payload)
      case 'GET_BANNER':
        return state.set("bannerList",action.payload)
      default:
        return state; // 无论如何都返回一个 state
  }
}

export default combineReducers({
  test,
  index
});
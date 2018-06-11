/*
  触发reducers
*/
import {storage} from '../utils'
import {request_get} from '../utils/request'
import api from '../utils/api'

const userInfo ={
  name:'Dale清风',
  id:'u001',
  img:require('../assets/img/person.GIF')
}

// 同步
export const getUserInfo = ()=>{
  storage.set('userInfo',userInfo)
  return {
    type: 'GET_USER',
    payload:{
      userInfo:userInfo
    }
  }
}

// 异步，需要引入redux-thunk 库
export const getGoodList = ()=>{
  return dispatch => {
    request_get(api.getGoodsList).then((res)=>{
      dispatch({
        type: 'GET_GOOD_LIST',
        payload: res
      })
    }).catch((error)=>{
      console.log(error)
    })
  }
}

export const getBannerList = ()=>{
  return dispatch => {
    request_get(api.getBanner).then((res)=>{
      dispatch({
        type: 'GET_BANNER',
        payload: res
      })
    }).catch((error)=>{
      console.log(error)
    })
  }
}
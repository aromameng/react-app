/*
  触发reducers
*/
const goodInfo ={
  name:'hello',
  content:'f看的积分卡积分是减肥'
}

// 同步
export const getGoodInfo = ()=>{
  return {
    type: 'GET_GOOD_INFO',
    payload:{
      goodInfo:goodInfo
    }
  }
}

// 异步，需要引入redux-thunk 库
export const test = ()=>{
  return dispatch =>{
    setTimeout(()=>{
      dispatch({
        type: 'GET_GOOD_INFO',
        payload:{
          goodInfo:goodInfo
        }
      })
    },2000)
  } 
}
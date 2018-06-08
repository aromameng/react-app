/*
    定义reducers，纯函数
*/
// export default combineReducers({
  
// });

const initState = {
    goodInfo:{}
}

export default function reducer(state=initState, action){
  switch (action.type) {
      case 'GET_GOOD_INFO':
        return Object.assign({},state,action.payload)
      default:
        return state; // 无论如何都返回一个 state
  }
}
import React from 'react';
import { Button } from 'antd-mobile'
import './common.less';

const Empty = () =>{
  return (
    <div className='view_shop empty'>
      <img className='pic' alt='empty' src={require('../assets/img/empty_cart.png')} />
      <p>购物车还是空的</p>
      <Button className='btn' type="primary">去逛逛</Button>     
    </div>
  )
}

export default Empty
import React from 'react';
import './good.less';

const Good = (props) =>{
  const info = props.info
  return (
    <div className='good_box'>
      <img className='img good_img' alt={info.title} src={info.img} />
      <p className='title'>{info.title}</p>
      <p className='price'>{info.price}</p>    
    </div>
  )
}

export default Good
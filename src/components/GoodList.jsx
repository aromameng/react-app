import React from 'react';
import './good.less';
import Good from './Good'

const GoodList = (props) =>{
  return (
    <div className='good_list'>
        {
          props.list.map((item,index)=>{
            return (
              <Good key={item.id} info={item} {...props} />
            )
          })
        }
    </div>
  )
}

export default GoodList
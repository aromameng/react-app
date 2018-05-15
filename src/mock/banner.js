import {APIV1} from '../utils/config'

const list =[{
  title:'美丽',
  id:1,
  pic: 'http://img3.imgtn.bdimg.com/it/u=859170095,620911882&fm=27&gp=0.jpg',
  url:'/sign'
},{
  title:'美丽2',
  id:2,
  pic: 'http://img2.imgtn.bdimg.com/it/u=2111979637,116752699&fm=27&gp=0.jpg',
  url:'/sign'
},{
  title:'美丽2',
  id:3,
  pic: 'http://img5.imgtn.bdimg.com/it/u=3180694005,1343380476&fm=27&gp=0.jpg',
  url:'/sign'
}]


module.exports = {
  [`GET ${APIV1}/banner`] (req, res) {
    res.status(200).json(list)
  },
}
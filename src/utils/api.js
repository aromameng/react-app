import {APIV1} from '../utils/config'

let url = APIV1

if(process.env.NODE_ENV === 'production'){
  url = 'https://www.easy-mock.com/mock/5afaaac82c5ab01b0cbf4490' + APIV1
}

export default {
  getBanner: `${url}/banner`,
  getGoodsList:`${url}/goods`,
  goodDetail:`${url}/good`
}
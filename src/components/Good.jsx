import React,{Component} from 'react';
import './good.less';
const loading = require('../assets/img/loading.gif')

// const Good = (props) =>{
//   const info = props.info
//   return (
//     <div className='good_box'>
//       <img className='img good_img' alt={info.title} src={info.img || loading} />
//       <p className='title'>{info.title}</p>
//       <p className='price'>{info.price}</p>    
//     </div>
//   )
// }

class Good extends Component{
  constructor(props){
    super(props)
    this.state = {
      _width: 0,
      _height: 0
    }
    this.handleDetail = this.handleDetail.bind(this)
  }
  
  componentDidMount(){
    const _width = this.refs.box.clientWidth
    this.setState({
      _width: _width,
      _height: _width
    })
  }

  handleDetail(){
    this.props.history.push(`good-detail/${this.props.info.id}`)
  }

  render(){
    const info = this.props.info
    const {_width,_height} = this.state
    return (
      <div className='good_box' ref='box' onClick={this.handleDetail}>
        <img className='img good_img' style={{width:_width,height:_height}} alt={info.title} src={info.img || loading} />
        <p className='title'>{info.title}</p>
        <p className='price'>{info.price}</p>    
      </div>
    )
  }
}

export default Good
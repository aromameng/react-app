// import './assets/js/antm-viewport.min'
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/base.less'
import './index.css';
import App from './router';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
// import 'antd-mobile/dist/antd-mobile.css'; 
import './assets/css/antd_reset.less'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();

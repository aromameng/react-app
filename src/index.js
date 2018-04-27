// import './assets/js/antm-viewport.min'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
// import 'antd-mobile/dist/antd-mobile.css'; 

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();

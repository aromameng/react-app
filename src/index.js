import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/base.less'
import './index.css';
import App from './router';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
// import 'antd-mobile/dist/antd-mobile.css'; 
import './assets/css/antd_reset.less'
import configureStore from './stores';

let store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

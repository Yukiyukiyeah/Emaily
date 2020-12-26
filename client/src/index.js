/*
 * @Author: your name
 * @Date: 2020-12-21 18:34:36
 * @LastEditTime: 2020-12-26 20:39:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/index.js
 */
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App';
import reducers from './reducers';
// Development only axios helper
import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
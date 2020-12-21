/*
 * @Author: your name
 * @Date: 2020-12-21 20:19:58
 * @LastEditTime: 2020-12-21 20:24:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/reducers/index.js
 */
import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
});
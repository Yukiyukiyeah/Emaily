/*
 * @Author: your name
 * @Date: 2020-12-21 20:19:58
 * @LastEditTime: 2020-12-26 21:48:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/reducers/index.js
 */
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer'
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
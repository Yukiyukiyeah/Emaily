/*
 * @Author: your name
 * @Date: 2020-12-21 20:19:49
 * @LastEditTime: 2020-12-21 22:20:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/reducers/authReducer.js
 */
// eslint-disable-next-line import/no-anonymous-default-export
import { FETCH_USER } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = null, action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
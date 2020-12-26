/*
 * @Author: your name
 * @Date: 2020-12-26 21:46:10
 * @LastEditTime: 2020-12-26 21:57:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/reducers/surveysReducer.js
 */
import { FETCH_SURVEYS } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=[], action) {
  switch(action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
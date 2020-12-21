/*
 * @Author: your name
 * @Date: 2020-12-21 21:06:37
 * @LastEditTime: 2020-12-21 21:43:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/actions/index.js
 */
import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res});
};

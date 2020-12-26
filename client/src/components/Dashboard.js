/*
 * @Author: your name
 * @Date: 2020-12-21 22:40:32
 * @LastEditTime: 2020-12-26 21:56:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/components/Dashboard.js
 */
import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
const Dashboard = ()  => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new"  className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}
export default Dashboard;
/*
 * @Author: your name
 * @Date: 2020-12-21 22:40:32
 * @LastEditTime: 2020-12-23 18:54:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/components/Dashboard.js
 */
import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard = ()  => {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <Link to="/surveys/new"  className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}
export default Dashboard;
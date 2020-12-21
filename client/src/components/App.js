/*
 * @Author: your name
 * @Date: 2020-12-21 18:36:58
 * @LastEditTime: 2020-12-21 22:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/components/App.js
 */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const SurveyNew = () => <h2>SurveyNew</h2>
const Dashboard = () => <h2>DashBoard</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
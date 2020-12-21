/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Author: your name
 * @Date: 2020-12-21 20:46:57
 * @LastEditTime: 2020-12-22 01:28:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/components/Header.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/github">Login with Github</a></li>
        );
      default:
        return [
          <li kye="1"><Payments /></li>,
          <li key="3" style={{ margin:'0 10px' }}>
            Credits:{this.props.auth.credits}
          </li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link 
            to={this.props.auth ? '/surveys' : '/'} 
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
/*
 * @Author: your name
 * @Date: 2020-12-21 20:46:57
 * @LastEditTime: 2020-12-21 21:00:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /server/client/src/components/Header.js
 */
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              <a>Login with Github</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
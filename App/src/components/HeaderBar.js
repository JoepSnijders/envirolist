import React, { Component } from 'react';
import { Link } from 'react-router';
import './HeaderBar.css';

export default class HeaderBar extends Component {
  render(){
    return (
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-sm-2">
              <Link to="/">
                <div className="header__logo">Envirolist</div>
              </Link>
            </div>
            <div className="col-md-4 col-sm-1 hidden-sm-down">
              <div className="header__search">
                <input type="text" placeholder="Look for activities near.." />
              </div>
            </div>
            <div className="col-md-6 col-sm-9 hidden-xs-down float-xs-right">
              <ul className="header__navi">
                <Link to="add">
                  <li className="header__navi__item">Add Activity</li>
                </Link>
                <li className="header__navi__item">Help</li>
                <li className="header__navi__item">Sign Up</li>
                <li className="header__navi__item">Log In</li>
              </ul>
            </div>
          </div>
          </div>
      </header>
    );
  }
}

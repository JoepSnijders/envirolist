import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Autocomplete from 'react-google-autocomplete';
import './HeaderBar.css';

export default class HeaderBar extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchInput: ''
    }
  }
  handleChange(event){
    this.setState({
      searchInput: event.target.value
    });
  }
  updateLocationValue(location){
    this.setState({
      searchInput: location.formatted_address,
      locationLng: location.geometry.location.lng(),
      locationLat: location.geometry.location.lat()
    });
    browserHistory.push('/search?lat=' + location.geometry.location.lat() + '&lng=' + location.geometry.location.lng() + '&location= ' + location.formatted_address + '&r=500');
  }
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
                <Autocomplete
                    placeholder="Look for activities near.."
                    type="text"
                    value={this.state.searchInput}
                    onChange={this.handleChange}
                    onPlaceSelected={(location) => {
                      this.updateLocationValue(location);
                    }}
                    types={['(regions)']}
                />
                {/* <input type="text" placeholder="Look for activities near.." /> */}
              </div>
            </div>
            <div className="col-md-6 col-sm-9 hidden-xs-down float-xs-right">
              <ul className="header__navi">
                <Link to="add">
                  <li className="header__navi__item">Add Activity</li>
                </Link>
                <li className="header__navi__item">Help</li>
                { this.props.user.user.length === 0 ?
                  <span>
                    <li className="header__navi__item" data-toggle="modal" data-target="#signUpModal">Sign Up</li>
                    <li className="header__navi__item" data-toggle="modal" data-target="#logInModal">Log In</li>
                  </span>
                  :
                  <span>
                    <li className="header__navi__item">{this.props.user.user.name}</li>

                  </span>
                }
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

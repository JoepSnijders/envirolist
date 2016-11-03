import React, { Component } from 'react';
import './SinglePageMain.css';

export default class SinglePageMain extends Component {
  render(){
    return (
      <div className="singlePageMain">
      <div className="singlePageMain__bg" style={this.props.image}></div>
        <div className="singlePageMain__hero">
          <div className="container">
            <div className="col-sm-12">
              <h1>{this.props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

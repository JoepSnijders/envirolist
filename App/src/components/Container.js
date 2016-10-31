import React, { Component } from 'react';

export default class Container extends Component {
  render(){
    return (
      <div className="">
        {this.props.children}
      </div>
    );
  }
}

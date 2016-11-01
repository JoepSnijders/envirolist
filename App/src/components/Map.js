import React, { Component } from 'react';

export default class Map extends Component {
  render(){
    console.log(this.props.jobs);
    return (
      <div className="map">
        {this.props.jobs.map(function(listValue){
          return <li key={listValue._id}>{listValue.name}</li>;
        })}
      </div>
    );
  }
}

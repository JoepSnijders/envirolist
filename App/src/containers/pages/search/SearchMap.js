import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { browserHistory } from 'react-router';
class Marker extends Component {
  render(){
    var type;
    if (this.props.type === 'free volunteer') {
      type = 'free';
    } else if (this.props.type === 'paid') {
      type = 'paid';
    } else if (this.props.type === 'fee required') {
      type = 'fee';
    }
    console.log(type);
    return (
      <div className="marker" >
        <div className="balloon">
          <p className="bold">{this.props.marker.name}</p>
          <p className="small">{this.props.type}</p>
        </div>
        <div className={ "pin " + type}>
          {this.props.text}
        </div>
       <div className="pulse"></div>
      </div>
    );
  }
}

export default class SearchMap extends Component {
  static defaultProps = {
    apiKey: 'AIzaSyCzZKfMu32zOoZINcmT-j5GOZe6NPHzX70',
    center: {lat: 9.7337782, lng: 100.0280685},
    zoom: 8,
  };

  onChildClick(key, childProps){
    browserHistory.push('jobs/' + key);
  }

  render(){
    var center = '';
    if(this.props.lat.length){ // Query parameters present
      center = {
        lng: Number(this.props.lng),
        lat: Number(this.props.lat)
      };
    } else {
      center = {lat: 9.7337782, lng: 100.0280685}; // Back to default position
    }
    return (
        <GoogleMap
          bootstrapURLKeys={{key: this.props.apiKey}}
          center={center}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildClick={this.onChildClick}>
          {
            (this.props.markers.length) ?
            this.props.markers.map((listValue) => {
              return (
                <Marker type={listValue.type} marker={listValue} key={listValue._id} lat={listValue.location.lat} lng={listValue.location.lng} />
              );
            })
            : null
          }
        </GoogleMap>
    );
  }
}

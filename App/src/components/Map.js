import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

class Marker extends Component {
  static defaultProps = {};

  render(){
    return (
       <div style={{backgroundColor: '#12D475', width: 30, height: 30, color: '#fff', position: 'absolute', textAlign: 'center', lineHeight: 3, fontWeight: 'bold', borderRadius: 4}}>
          {this.props.text}
       </div>
    );
  }
}

export default class Map extends Component {
  static defaultProps = {
    apiKey: 'AIzaSyCzZKfMu32zOoZINcmT-j5GOZe6NPHzX70',
    center: {lat: 9.7337782, lng: 100.0280685},
    zoom: 9,
    markerCoords: {lat: 9.7337782, lng: 100.0280685}
  };

  render(){
    return (
        <GoogleMap bootstrapURLKeys={{key: this.props.apiKey}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <Marker {...this.props.markerCoords} text={'A'} />
        </GoogleMap>

    );
  }
}

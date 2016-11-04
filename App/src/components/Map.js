import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import './Map.css';
class Marker extends Component {
  render(){
    return (
      <div className="marker">
        <div className="pin">
          {this.props.text}
        </div>
       <div className="pulse"></div>
      </div>
    );
  }
}

export default class Map extends Component {
  static defaultProps = {
    apiKey: 'AIzaSyCzZKfMu32zOoZINcmT-j5GOZe6NPHzX70',
    center: {lat: 9.7337782, lng: 100.0280685},
    zoom: 2,
    markerCoords: {lat: 9.7337782, lng: 100.0280685}
  };

  render(){
    return (
        <GoogleMap bootstrapURLKeys={{key: this.props.apiKey}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          {
            (this.props.markers.length) ?
            this.props.markers.map((listValue) => {
              return (
                <Marker key={listValue._id} lat={listValue.location.lat} lng={listValue.location.lng} />
              );
            })
            : null
          }
        </GoogleMap>
    );
  }
}

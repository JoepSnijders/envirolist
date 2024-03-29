import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { browserHistory } from 'react-router';
import './Map.css';
import moment from 'moment';
moment().format('YYYY MM DD');
class Marker extends Component {
  render(){
    return (
      <div className="marker">
        <div className="balloon">
          <p className="bold">{this.props.marker.name}</p>
          {/* <p className="small">{moment(this.props.marker.dateAdded).fromNow()}</p> */}
        </div>
        <div className="pin">
          {this.props.text}
        </div>
       <div className="pulse"></div>
      </div>
    );
  }
}

export default class Map extends Component {
  constructor(props){
    super(props);
    this.onChildClick = this.onChildClick.bind(this);
  }
  onChildClick(key, childProps){
    browserHistory.push('jobs/' + key);
  }
  static defaultProps = {
    apiKey: 'AIzaSyCzZKfMu32zOoZINcmT-j5GOZe6NPHzX70',
    center: {lat: 9.7337782, lng: 100.0280685},
    zoom: 0,
  }
  render(){
    return (
        <GoogleMap
          bootstrapURLKeys={{key: this.props.apiKey}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildClick={this.onChildClick}>
          {
            (this.props.markers.length) ?
            this.props.markers.map((listValue) => {
              return (
                <Marker marker={listValue} key={listValue._id} lat={listValue.location.lat} lng={listValue.location.lng} />
              );
            })
            : null
          }
        </GoogleMap>
    );
  }
}

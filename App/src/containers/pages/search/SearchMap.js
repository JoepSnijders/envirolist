import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import _ from 'lodash';
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
    return (
      <div className="marker" >
        <div className="balloon">
          <p className="bold">{this.props.marker.name}</p>
          <p className="small">{_.startCase(_.toLower(this.props.type))}</p>
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
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      center: '',
      radius: ''
    }
  }
  static defaultProps = {
    apiKey: 'AIzaSyCzZKfMu32zOoZINcmT-j5GOZe6NPHzX70',
    center: {lat: 9.7337782, lng: 100.0280685},
    zoom: 8,
  };

  onChildClick(key, childProps){
    browserHistory.push('jobs/' + key);
  }
  onChange(e){
    console.log('hiero');
    console.log(this);
    var bounds = e.bounds;
    var center = e.center;
    var nw = bounds.nw;
    var r = 3963.0; // Radius of the earth
    // Convert lat or lng from decimal degrees into radians (divide by 57.2958)
    var lat1 = center.lat / 57.2958;
    var lon1 = center.lng / 57.2958;
    var lat2 = nw.lat / 57.2958;
    var lon2 = nw.lng / 57.2958;
    // Distance = Circle radius from center to Northeast corner of bounds
    var dis = r * Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1));
    var roundedDistance = Math.round(dis);
    this.setState({
      center: center,
      radius: roundedDistance
    });
    this.props.actions.fetchJobs(0, this.state.center, this.state.radius);
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
    console.log(this.props);
    return (

        <GoogleMap
          bootstrapURLKeys={{key: this.props.apiKey}}
          center={center}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildClick={this.onChildClick}
          onChange={this.onChange}>
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

import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';

export default class FormSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      activityName: '',
      excerpt: '',
      description: '',
      locationName: '',
      locationCountry: '',
      locationLat: '',
      locationLng: '',
      tags: '',
      photo: '',
      sentJob: false
    }
    this.addJob = this.addJob.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateLocationValue = this.updateLocationValue.bind(this);
  }
  addJob(event){
    event.preventDefault();
    // Check if Autocomplete was used.
    console.log(this.state.locationName);
    this.props.actions.addJob({
      activityName: this.state.activityName,
      excerpt: this.state.excerpt,
      description: this.state.description,
      location: this.state.locationName,
      locationCountry: this.state.locationCountry,
      locationLng: this.state.locationLng,
      locationLat: this.state.locationLat,
      tags: this.state.tags,
      photo: this.state.photo
    });
    this.setState({
      sentJob: true
    });
  }
  updateInputValue(target, event){
    this.setState({[target]: event.target.value});
  }
  updateLocationValue(location, event){
    console.log(location);
    var locationArray = location.address_components;
    var name = locationArray[0];
    var country = locationArray[locationArray.length - 1];
    console.log(name.long_name);
    console.log(country.long_name);

    this.setState({
      locationName: name.long_name,
      locationCountry: country.long_name,
      locationLng: location.geometry.location.lng(),
      locationLat: location.geometry.location.lat()
    });
  }
  render() {
    return (
      <div>
      { !this.state.sentJob ? // Show only if false
        <form onSubmit={this.addJob}>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="exampleInputEmail1">Name of activity</label>
                <input value={this.state.activityName} onChange={this.updateInputValue.bind(this, 'activityName')} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E.g. Trash Hero" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="exampleTextarea">Short description of activity</label>
                <small id="excerptHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                <br/>
                <textarea value={this.state.excerpt} onChange={this.updateInputValue.bind(this, 'excerpt')} className="form-control" id="exampleTextarea" rows="3"></textarea>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="exampleTextarea">Optional: Extensive description of activity</label>
                <small id="excerptHelp" className="form-text text-muted">You can also provide a more extensive description of what the activity is about (Max 500 words).</small>
                <br/>
                <textarea value={this.state.description} onChange={this.updateInputValue.bind(this, 'description')} className="form-control" id="exampleTextarea" rows="3"></textarea>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="exampleInputEmail1">Location of activity</label>
                <Autocomplete
                    style={{width: '100%'}}
                    className="form-control"
                    type="text"
                    value={this.state.locationName}
                    onChange={this.updateInputValue.bind(this, 'locationName')}
                    onPlaceSelected={(location) => {
                      this.updateLocationValue(location);
                    }}
                    types={['(regions)']}
                />
                {/* <input value={this.state.location.name} onChange={this.updateInputValue.bind(this, 'location')} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E.g. Koh Phangan" /> */}
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-inline">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Optional: Provide search tags</label>
                  <br/>
                  <input value={this.state.tags} onChange={this.updateInputValue.bind(this, 'tags')} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E.g. Trash, Clean-up, Turtles, etc." />
                  <button className="btn btn-success">Add</button>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-inline">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Optional: Provide photo</label>
                  <br/>
                  <input value={this.state.photo} onChange={this.updateInputValue.bind(this, 'photo')} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Browse for image.." />
                  <button className="btn btn-success">Add</button>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <button type="submit" className="btn btn-success">Add actvitiy to Envirolist!</button>
        </form>
      :
      <div>
        <h2>Activity posted on Envirolist!</h2>
      </div>
      }
      </div>
    );
  }
}

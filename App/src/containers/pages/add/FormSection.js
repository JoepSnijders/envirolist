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
      sentJob: false,
      step: 0,
    }
    this.submitJob = this.submitJob.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateLocationValue = this.updateLocationValue.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }
  submitJob(event){
    event.preventDefault();
    console.log('submitting..');
    // Check if Autocomplete was used.
    this.props.actions.addJob({
      activityName: this.state.activityName,
      excerpt: this.state.excerpt,
      description: this.state.description,
      location: this.state.locationName,
      locationCountry: this.state.locationCountry,
      locationLng: this.state.locationLng,
      locationLat: this.state.locationLat,
      tags: this.state.tags,
      photo: this.state.photo,
      type: this.props.type // Type from props
    });
    this.setState({
      sentJob: true
    });
  }
  updateInputValue(target, event){
    this.setState({[target]: event.target.value});
  }
  updateLocationValue(location, event){
    var locationArray = location.address_components;
    var name = locationArray[0];
    var country = locationArray[locationArray.length - 1];
    this.setState({
      locationName: name.long_name,
      locationCountry: country.long_name,
      locationLng: location.geometry.location.lng(),
      locationLat: location.geometry.location.lat()
    });
  }
  nextStep(step){
    // TODO: Validate fields
    window.scrollTo(0, 0);
    this.setState({
      step: step
    });
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    var volunteer = { backgroundImage: 'url("/images/volunteer.jpg")' }
    var paid = { backgroundImage: 'url("/images/paid.jpg")' }
    var fee = { backgroundImage: 'url("/images/fee.jpg")' }
    return (
      <div>
      { !this.state.sentJob ? // Show only if false
        <div>
          { this.state.step === 0 ? // General
            <div>
              <div className="row">
                <div className="col-md-6">
                  <p className="top">Step 1: Adding a <span className="bold">{ this.props.type }</span> job.</p>
                  <h2>Tell us about your company.</h2>
                  <br/>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name of activity</label>
                    <input value={this.state.activityName} onChange={this.updateInputValue.bind(this, 'activityName')} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E.g. Trash Hero" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleTextarea">Short description of activity</label>
                    <small id="excerptHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <br/>
                    <textarea value={this.state.excerpt} onChange={this.updateInputValue.bind(this, 'excerpt')} className="form-control" id="exampleTextarea" rows="3"></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleTextarea">Optional: Extensive description of activity</label>
                    <small id="excerptHelp" className="form-text text-muted">You can also provide a more extensive description of what the activity is about (Max 500 words).</small>
                    <br/>
                    <textarea value={this.state.description} onChange={this.updateInputValue.bind(this, 'description')} className="form-control" id="exampleTextarea" rows="3"></textarea>
                  </div>
                  <br/>
                  <div className="btn btn-success" onClick={() => this.nextStep(1)}>Continue to next step</div>

                </div>
                <div className="col-md-5 offset-md-1">
                  { this.props.type === 'free volunteer' ?
                    <div className="addpage__choice addpage__choice--volunteering">
                      <div className="addpage__choice__thumb" style={volunteer}></div>
                      <div className="addpage__choice__content">
                        <p className="bold">Add a free unpaid volunteering job.</p>
                        <p>
                          You can add an unpaid volunteering opportunity for free. Your company will be found by people around the world!
                        </p>
                      </div>
                    </div>
                  : null }
                  { this.props.type === 'paid' ?
                    <div className="addpage__choice addpage__choice--paid">
                      <div className="addpage__choice__thumb" style={paid}></div>
                      <div className="addpage__choice__content">
                        <p className="bold">Add a paid job.</p>
                        <p>
                          Of je nu een huisje in de bergen of een extra kamer hebt, verdien een. We ask you for €5,- / month.
                        </p>
                      </div>
                    </div>
                  : null }
                  { this.props.type === 'fee required' ?
                    <div className="addpage__choice addpage__choice--fee">
                      <div className="addpage__choice__thumb" style={fee}></div>
                      <div className="addpage__choice__content">
                        <p className="bold">Add a fee required job.</p>
                        <p>
                          Of je nu een huisje in de bergen of een extra kamer hebt, verdien een. We ask you for €10,- / month.
                        </p>
                      </div>
                    </div>
                  : null }
                </div>
              </div>
            </div>
            : null
          }

          { this.state.step === 1 ? // Location
            <div>
              <p className="top">Step 2:</p>
              <h2>Where are you located?</h2>
              <br/>
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
                    <small id="emailHelp" className="form-text text-muted">We'll never share your location with anyone else.</small>
                    <br/>
                    <div className="btn btn-success" onClick={() => this.nextStep(2)}>Continue to next step</div>
                  </div>
                </div>
              </div>
            </div>
            : null
          }
          { this.state.step === 2 ? // tags
            <div>
              <p className="top">Step 3:</p>
              <h2>Some extra details.</h2>
              <br/>
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
                  <br/>
                  <br/>
                  <button onClick={this.submitJob} className="btn btn-success">Add actvitiy to Envirolist!</button>
                </div>
              </div>
            </div>
            : null
          }
        </div>
      :
      <div>
        <h2>Activity posted on Envirolist!</h2>
      </div>
      }
      </div>
    );
  }
}

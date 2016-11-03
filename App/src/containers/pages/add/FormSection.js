import React, { Component } from 'react';

export default class FormSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      activityName: '',
      excerpt: '',
      description: '',
      location: '',
      tags: '',
      photo: '',
    }
    this.addJob = this.addJob.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  addJob(event){
    event.preventDefault();
    this.props.actions.addJob({
      activityName: this.state.activityName,
      excerpt: this.state.excerpt,
      description: this.state.description,
      location: this.state.location,
      tags: this.state.tags,
      photo: this.state.photo
    });
  }
  updateInputValue(target, event){
    this.setState({[target]: event.target.value});
  }

  render() {
    console.log(this.props);
    return (
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
              <input value={this.state.location} onChange={this.updateInputValue.bind(this, 'location')} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E.g. Koh Phangan" />
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
    );
  }
}

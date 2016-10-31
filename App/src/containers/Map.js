import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class Map extends Component {
  constructor(){
    super();
    this.search = this.search.bind(this);
  }

  search(){
    this.props.actions.searchJobs();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="container">
          <div onClick={this.search} className="btn btn-primary">Search Volunteer Work</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobslist }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);

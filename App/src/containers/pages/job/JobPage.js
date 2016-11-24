import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'
import * as actionCreators from '../../../actions';
import moment from 'moment';
moment().format('YYYY MM DD');
import HeaderBar from '../../../components/HeaderBar';
import Footer from '../../../components/Footer';
import SinglePageMain from '../../../components/SinglePageMain';

import './JobPage.css';

class JobPage extends Component {
  componentDidMount(){
    // Get single ID JSON
    var id = this.props.params.jobId;
    this.props.actions.fetchSingleJob(id);
  }
  render() {
    console.log(this.props);
    var beachImage = { backgroundImage: 'url("/images/big-beach.jpg")' }
    return (
      <div className="jobpage">
        <HeaderBar />
          { !this.props.jobs.error ? // All is Ok
            <div className="singlepage">
              <SinglePageMain title={this.props.jobs.listings.name} image={beachImage} />
              <div className="container">
                <div className="row">
                  <div className="col-sm-7">
                    <h2>{this.props.jobs.listings.name}</h2>
                    <p className="bold">Posted on {moment(this.props.jobs.listings.dateAdded).format('MMMM do YYYY')}</p>
                    <p>
                      Excerpt: { this.props.jobs.listings.excerpt }
                    </p>
                    <p>
                      Description:  { this.props.jobs.listings.content }
                    </p>
                    { this.props.jobs.listings.location ?
                      <p>Location: { this.props.jobs.listings.location.name } - { this.props.jobs.listings.location.country }</p>
                      : null
                    }
                  </div>
                  <div className="col-sm-5">
                    <div className="jobpage__box">
                      <p className="bold">Help {this.props.jobs.listings.name}</p>
                      <p>You can provide a photo for the activity. This photo will be visible for people that are interested.</p>
                      <div className="btn btn-success">Apply for {this.props.jobs.listings.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : // Error detected
            <div className="singlepage">
              <SinglePageMain title="" image={beachImage} />
              <div className="container">
                <div className="row">
                  <div className="col-sm-7">
                    <h2>This page could not be found.</h2>
                    <p>Go back to your <a href="#" onClick={browserHistory.goBack}>last visited page.</a></p>
                    <br/>
                    <br/>
                  </div>
                </div>
              </div>
            </div>
          }

        <Footer />
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
export default connect(mapStateToProps, mapDispatchToProps)(JobPage);

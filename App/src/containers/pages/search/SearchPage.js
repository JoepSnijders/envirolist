import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions';
import _ from 'lodash';
import $ from 'jquery';
import './SearchPage.css';
import HeaderBar from '../../../components/HeaderBar';
import Footer from '../../../components/Footer';
import SearchMap from './SearchMap';
import SearchPageListItem from './SearchPageListItem';

class SearchPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      filteredJobs: []
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.filterJobs = this.filterJobs.bind(this);
  }
  updateSearch(location, radius){
    this.props.actions.fetchJobs();
  }
  filterJobs(type, event){
    if(!$(event.target).hasClass('active')){ // If !active yet filter:
      var jobs = this.props.jobs.listings;
      jobs = _.filter(jobs, {'type': type});
      if (jobs.length > 0) { // Only push if found
        var filteredJobs = this.state.filteredJobs;
        this.setState({ filteredJobs: filteredJobs.concat(jobs) });
      }
    } else { // If active, undo filter:
      jobs = this.state.filteredJobs;
      filteredJobs = _.filter(jobs, {'type': type});
      if (filteredJobs.length > 0) { // Only remove if found
        jobs = _.remove(jobs, {filteredJobs});
        this.setState({ filteredJobs: jobs });
      }
    }
    $(event.target).toggleClass('active');
  }

  componentDidMount(){
    this.updateSearch(this.props.location.query.location, this.props.location.query.r );
  }

  render() {
    return (
      <div className="searchpage">
        <HeaderBar user={this.props.user} />
        <div className="container">
          <div className="searchpage__window">
            <div className="searchpage__main">
              <div className="searchpage__main__filter__paid">
                <div className="searchpage__main__filter__paid__toggle" onClick={(e) => this.filterJobs('free volunteer', e)}>Free Volunteer</div>
                <div className="searchpage__main__filter__paid__toggle" onClick={(e) => this.filterJobs('fee required', e)}>Fee Required</div>
                <div className="searchpage__main__filter__paid__toggle" onClick={(e) => this.filterJobs('paid', e)}>Paid Work</div>
              </div>
              <div className="searchpage__main__filter__tags">
                <p className="bold">Additional Filters</p>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="searchpage__main__number">
                      { this.state.filteredJobs.length ?
                        this.props.jobs.listings.length ?
                        <p className="bold">
                          { this.state.filteredJobs.length } Results{(this.props.location.query.location.length) ? <span> for { this.props.location.query.location }</span> : null }.
                        </p>
                        :
                        <p className="bold">
                          No results found{(this.props.location.query.location.length) ?<span> for { this.props.location.query.location }</span> : null}.
                        </p>
                        :
                        this.props.jobs.listings.length ?
                        <p className="bold">
                          { this.props.jobs.listings.length } Results{(this.props.location.query.location.length) ? <span> for { this.props.location.query.location }</span> : null }.
                        </p>
                        :
                        <p className="bold">
                          No results found{(this.props.location.query.location.length) ?<span> for { this.props.location.query.location }</span> : null}.
                        </p>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="searchpage__main__results">
                { this.state.filteredJobs.length ?
                  this.state.filteredJobs.map((job) => {
                    return (
                      <SearchPageListItem key={job._id} job={job} />
                    );
                  })
                  :
                  this.props.jobs.listings.map((job) => {
                    return (
                      <SearchPageListItem key={job._id} job={job} />
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="searchpage__map">
            <SearchMap actions={this.props.actions} lat={this.props.location.query.lat} lng={this.props.location.query.lng} markers={this.state.filteredJobs.length ? this.state.filteredJobs : this.props.jobs.listings} />
          </div>
        </div>
        <div className="clearfix"></div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobslist, user: state.logInReducer }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

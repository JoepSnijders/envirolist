import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions';
import { Link } from 'react-router';
import './SearchPage.css';
import HeaderBar from '../../../components/HeaderBar';
import Footer from '../../../components/Footer';
import SearchMap from './SearchMap';

class SearchPage extends Component {
  constructor(props){
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }
  updateSearch(location, radius){
    this.props.actions.fetchJobs();
  }
  componentDidMount(){
    this.updateSearch(this.props.location.query.location, this.props.location.query.r );
  }

  render() {
    console.log(this.props.jobs.listings);
    return (
      <div className="searchpage">
        <HeaderBar />
        <div className="container">
          <div className="searchpage__window">
            <div className="searchpage__main">
              <div className="searchpage__main__filter__dates">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="bold">Start</p>
                      <input placeholder="Start date" type="text"/>
                    </div>
                    <div className="col-sm-6">
                      <p className="bold">End</p>
                      <input placeholder="End date" type="text"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="searchpage__main__filter__paid"></div>
              <div className="searchpage__main__filter__tags"></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="searchpage__main__number">
                      { this.props.jobs.listings.length ?
                        <p className="bold">{ this.props.jobs.listings.length } Results{(this.props.location.query.location.length) ? <span> for { this.props.location.query.location }</span> : null }.</p>
                        :
                        <p className="bold">No results found{(this.props.location.query.location.length) ?<span> for { this.props.location.query.location }</span> : null}.</p>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="searchpage__main__results">
                { this.props.jobs.listings.length ?
                  this.props.jobs.listings.map((job) => {
                    return (
                      <Link to={"jobs/" + job._id} key={job._id}>
                        <div className="searchpage__main__results__result">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-sm-2">
                                <div className="searchpage__main__results__result__image" style={{backgroundImage: "url('images/small-beach.jpg')"}}></div>
                              </div>
                              <div className="col-sm-10">
                                <div className="searchpage__main__results__result__content">
                                  <p className="bold">{job.name}</p>
                                  <p>{job.location.name } - { job.location.country }</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })
                  :
                  null
                }
              </div>
            </div>
          </div>

          <div className="searchpage__map">
            <SearchMap lat={this.props.location.query.lat} lng={this.props.location.query.lng} markers={this.props.jobs.listings} />
          </div>
        </div>
        <div className="clearfix"></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

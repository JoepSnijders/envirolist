import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions';
import { Link } from 'react-router';
import Autocomplete from 'react-google-autocomplete';
import './HomePage.css';
import CompanionSection from './CompanionSection';
import MapSection from './MapSection';
import HeaderBar from '../../../components/HeaderBar';
import Footer from '../../../components/Footer';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchInput: '',
      locationLng: '',
      locationLat: ''
    }
  }
  handleChange(event){
    this.setState({
      searchInput: event.target.value
    });
  }
  updateLocationValue(location){
    this.setState({
      searchInput: location.formatted_address,
      locationLng: location.geometry.location.lng(),
      locationLat: location.geometry.location.lat()
    });
  }
  search(value){
    this.props.actions.fetchJobs();
  }
  getLatest(numberOfRequests){
    this.props.actions.fetchJobs(numberOfRequests);
  }
  componentDidMount(){
    // Initialize load with latest 3 posts
    this.getLatest(4);
  }

  render() {
    return (
      <div className="homepage">
        <HeaderBar user={this.props.user} />
        <div className="homepage__main">
          <div className="homepage__bg"></div>
          <div className="container">
            <div className="homepage__main__hero">
              <h1>Help the environment by volunteering anywhere.</h1>
              {/* <input value={this.state.searchInput} onChange={this.handleChange} className="homepage__main__hero__input" type="text" placeholder="I want to help the environment in.." /> */}
              <Autocomplete
                  placeholder="I want to help the environment in.."
                  className="homepage__main__hero__input"
                  type="text"
                  value={this.state.searchInput}
                  onChange={this.handleChange}
                  onPlaceSelected={(location) => {
                    this.updateLocationValue(location);
                  }}
                  types={['(regions)']}
              />
              <Link to={{ pathname: '/search', query:{ location: this.state.searchInput, r: 500, lng: this.state.locationLng, lat: this.state.locationLat} }}>
                <input onClick={() => this.search('value')} className="homepage__main__hero__submit" type="submit" value="Explore map" />
              </Link>
            </div>
          </div>
        </div>
        <div className="homepage__introduction">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h2>Together we can make a <br /> difference.</h2>
                <p className="homepage__introduction__text">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting.</p>
                <br/>
                <Link>
                  <button className="btn btn-transparent">Why is this so important?</button>
                </Link>
              </div>
              <div className="col-md-5">
                <img className="homepage__introduction__image" src={process.env.PUBLIC_URL + '/images/dam.jpg'} width="100%" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <CompanionSection />
        <MapSection jobs={this.props.jobs.listings} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobslist , user: state.logInReducer}
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
